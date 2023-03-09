import {
    CHANGE,
    ConnectionState,
    delay,
    ERROR_TRANSPORT_CLOSED,
    groupBy,
    isCodeError,
    JDEventSource,
    JDService,
    unique,
} from "jacdac-ts"
import * as vscode from "vscode"
import type {
    BuildStatus,
    SideBuildReq,
    SideBuildResp,
    SideKillReq,
    SideKillResp,
    SideSpecsReq,
    SideSpecsResp,
} from "../../cli/src/sideprotocol"
import { logo } from "./assets"
import { sideRequest } from "./jacdac"
import { DeviceScriptExtensionState } from "./state"
import { Utils } from "vscode-uri"
import { TaggedQuickPickItem } from "./pickers"
import { EXIT_CODE_EADDRINUSE } from "../../cli/src/exitcodes"
import { MESSAGE_PREFIX, showInformationMessageWithHelp } from "./commands"
import { checkFileExists } from "./fs"
import { ResolvedBuildConfig, VersionInfo } from "@devicescript/compiler"

function showTerminalError(message: string) {
    showInformationMessageWithHelp(
        message,
        "getting-started/vscode#setting-up-the-project"
    )
}

function normalizeUsedFiles(dir: vscode.Uri, usedFiles: string[]) {
    const dirPath = Utils.resolvePath(dir).fsPath + "/"
    const fs = usedFiles
    const rel = fs.filter(f => f.startsWith(dirPath))
    const cor = rel.map(f => f.slice(dirPath.length))
    return unique(cor)
}

const PROJECT_FOLDER_KEY = "devicescript.devtools.projectFolder"

export class DeveloperToolsManager extends JDEventSource {
    private _connectionState: ConnectionState = ConnectionState.Disconnected
    private _projectFolder: vscode.Uri

    // watch is tied to currentFilename and devicescript manager
    private _watcher: vscode.FileSystemWatcher
    private _currentFilename: string
    private _currentDeviceScriptManager: string

    private _versions: VersionInfo
    private _buildConfig: ResolvedBuildConfig
    private _terminalPromise: Promise<vscode.Terminal>
    private _diagColl: vscode.DiagnosticCollection

    constructor(readonly extensionState: DeviceScriptExtensionState) {
        super()
        const { context } = this.extensionState
        const { subscriptions } = context

        vscode.workspace.onDidChangeWorkspaceFolders(
            this.handleWorkspaceFoldersChange,
            this,
            subscriptions
        )
        vscode.workspace.onDidDeleteFiles(
            this.handleDidDeleteFiles,
            this,
            subscriptions
        )
        vscode.workspace.onDidRenameFiles(
            this.handleDidRenameFiles,
            this,
            subscriptions
        )
        vscode.window.onDidCloseTerminal(
            this.handleCloseTerminal,
            this,
            subscriptions
        )
        subscriptions.push(this)
        subscriptions.push(
            vscode.commands.registerCommand(
                "extension.devicescript.terminal.show",
                () => this.show()
            )
        )
        // outputCh = vscode.window.createOutputChannel("DevS Build")
        this._diagColl =
            vscode.languages.createDiagnosticCollection("DeviceScript")

        // clear errors when file edited
        vscode.workspace.onDidChangeTextDocument(
            ev => {
                this._diagColl.set(ev.document.uri, [])
            },
            undefined,
            subscriptions
        )
    }

    async refreshSpecs() {
        const res = await sideRequest<SideSpecsReq, SideSpecsResp>({
            req: "specs",
            data: {
                dir: ".", // TODO
            },
        })
        const { versions, buildConfig } = res.data
        this._versions = versions
        console.debug(
            `devicescript devtools ${this.devsVersion}, runtime ${this.runtimeVersion}, node ${this.nodeVersion}`
        )
        this.updateBuildConfig(buildConfig)
    }

    updateBuildConfig(data: ResolvedBuildConfig) {
        if (JSON.stringify(this._buildConfig) === JSON.stringify(data)) return

        this._buildConfig = data
        const { changed } =
            this.extensionState.bus.setCustomServiceSpecifications(
                this._buildConfig?.services || []
            )
        if (changed) this.emit(CHANGE)
    }

    private showBuildResults(st: BuildStatus) {
        this._diagColl.clear()
        const severities = [
            vscode.DiagnosticSeverity.Warning,
            vscode.DiagnosticSeverity.Error,
            vscode.DiagnosticSeverity.Hint,
            vscode.DiagnosticSeverity.Information,
        ]

        const byFile = groupBy(st.diagnostics, s => s.filename)
        for (const fn of Object.keys(byFile)) {
            const diags = byFile[fn].map(d => {
                const p0 = new vscode.Position(d.line - 1, d.column - 1)
                const p1 = new vscode.Position(d.endLine - 1, d.endColumn - 1)
                const msg =
                    typeof d.messageText == "string"
                        ? d.messageText
                        : d.messageText.messageText
                const sev =
                    severities[d.category] ?? vscode.DiagnosticSeverity.Error
                const vd = new vscode.Diagnostic(
                    new vscode.Range(p0, p1),
                    msg,
                    sev
                )
                vd.source = "DeviceScript"
                vd.code = d.code
                return vd
            })
            this._diagColl.set(vscode.Uri.file(fn), diags)
        }
        this.updateBuildConfig(st.config)
    }

    // relative to projectFolder, but most likely undef srcFolder
    get currentFilename() {
        return this._currentFilename
    }

    get currentFile(): vscode.Uri {
        const { projectFolder, currentFilename } = this
        return projectFolder && currentFilename
            ? Utils.joinPath(projectFolder, currentFilename)
            : undefined
    }

    get currentDeviceScriptManager() {
        return this._currentDeviceScriptManager
    }

    /**
     * Builds a file relative to the current project folder
     */
    async build(filename: string, service?: JDService): Promise<BuildStatus> {
        this._watcher?.dispose()
        this._watcher = undefined

        this._currentFilename = filename
        this._currentDeviceScriptManager = service?.id

        const res = await this.buildOnce()
        if (res) await this.startWatch(res.usedFiles)

        this.emit(CHANGE)

        return res
    }

    private async buildOnce(): Promise<BuildStatus> {
        const filename = this._currentFilename

        if (!this._currentFilename) return undefined

        console.debug(`build ${filename}`)
        const service = this.extensionState.bus.node(
            this._currentDeviceScriptManager
        ) as JDService
        const deployTo = service?.device?.deviceId
        try {
            const res = await sideRequest<SideBuildReq, SideBuildResp>({
                req: "build",
                data: {
                    filename,
                    deployTo,
                },
            })
            this.showBuildResults(res.data)
            return res.data
        } catch (err) {
            console.error(err) // TODO
            // this is rather unusual, show it to the user
            vscode.window.showErrorMessage(err.message)
            return undefined
        }
    }

    private async startWatch(usedFiles: string[]) {
        usedFiles = normalizeUsedFiles(this.projectFolder, usedFiles)
        const filename = this._currentFilename
        const sid = this._currentDeviceScriptManager

        console.debug(`fs.watch: ${filename}`)
        const handleChange = async (uri: vscode.Uri) => {
            console.debug(`fs changed: ${uri.fsPath}`)
            const service = this.extensionState.bus.node(sid) as JDService
            await this.build(filename, service)
        }
        const pattern = `{${usedFiles.join(",")}}`
        const glob = new vscode.RelativePattern(this.projectFolder, pattern)
        this._watcher = vscode.workspace.createFileSystemWatcher(glob)
        this._watcher.onDidChange(handleChange)
        this._watcher.onDidCreate(handleChange)
        this._watcher.onDidDelete(handleChange)
    }

    private async init() {
        try {
            await this.refreshSpecs()
        } catch (e) {
            if (isCodeError(e, ERROR_TRANSPORT_CLOSED)) return false
            else throw e
        }
        return true
    }

    versions() {
        return this._versions
    }

    get devsVersion() {
        return this._versions?.devsVersion
    }

    get runtimeVersion() {
        return this._versions?.runtimeVersion
    }

    get nodeVersion() {
        return this._versions?.nodeVersion
    }

    get buildConfig() {
        return this._buildConfig
    }

    get boards() {
        return Object.values(this.buildConfig?.boards)
    }

    get srcFolder() {
        return this.projectFolder
            ? vscode.Uri.joinPath(this.projectFolder, "src")
            : undefined
    }

    get projectFolder() {
        return this._projectFolder
    }

    async setProjectFolder(folder: vscode.Uri) {
        if (folder?.toString() !== this._projectFolder?.toString()) {
            if (this._projectFolder) this.kill()
            this._projectFolder = folder
            this.emit(CHANGE)
            await this.saveProjectFolder()
        }
    }

    get connectionState() {
        return this._connectionState
    }

    get connected() {
        return this.connectionState === ConnectionState.Connected
    }

    private set connectionState(state: ConnectionState) {
        if (state !== this._connectionState) {
            this._connectionState = state
            this.emit(CHANGE)
        }
    }

    private async pickProject(): Promise<vscode.Uri> {
        // try sorted
        const dir = this.extensionState.state.get<string>(PROJECT_FOLDER_KEY)
        if (dir) {
            try {
                const folder = vscode.Uri.file(dir)
                const exists = await checkFileExists(
                    folder,
                    "./devsconfig.json"
                )
                if (exists) return folder

                // clear outdated key
                await this.extensionState.state.update(
                    PROJECT_FOLDER_KEY,
                    undefined
                )
            } catch {
                // clear outdated key
                await this.extensionState.state.update(
                    PROJECT_FOLDER_KEY,
                    undefined
                )
            } finally {
            }
        }

        //
        const projects = await this.findProjects()
        if (projects.length == 0) return undefined
        else if (projects.length == 1) return projects[0]
        else {
            const items = projects.map(
                project =>
                    <TaggedQuickPickItem<vscode.Uri>>{
                        data: project,
                        description: project.fsPath,
                        label: Utils.basename(project),
                    }
            )
            const res = await vscode.window.showQuickPick(items, {
                title: "Pick a DeviceScript project",
            })
            return res?.data
        }
    }

    private async createTerminal(): Promise<vscode.Terminal> {
        if (!this._projectFolder) this._projectFolder = await this.pickProject()
        if (!this._projectFolder) {
            this.clear()
            return undefined
        }

        // store current folder
        await this.saveProjectFolder()

        try {
            this.connectionState = ConnectionState.Connecting
            const t = await this.createCliTerminal({
                title: "DeviceScript",
                progress: "Starting Development Server...",
                args: ["devtools", "--vscode"],
                message: "DeviceScript Development Server\n",
            })
            if (!t) {
                this.clear()
                return undefined
            }
            this.connectionState = ConnectionState.Connected
            return t
        } catch (e) {
            this.clear()
            return undefined
        }
    }

    private async saveProjectFolder() {
        await this.extensionState.state.update(
            PROJECT_FOLDER_KEY,
            this._projectFolder?.fsPath
        )
    }

    start(): Promise<void> {
        return (
            this._terminalPromise ||
            (this._terminalPromise = this.createTerminal())
        ).then(() => this.startBuild())
    }

    async entryPoints() {
        const { srcFolder } = this
        if (!srcFolder) return []
        const files = await vscode.workspace.fs.readDirectory(srcFolder)
        return files
            .filter(
                ([name, type]) =>
                    type == vscode.FileType.File &&
                    name.startsWith("main") &&
                    name.endsWith(".ts")
            )
            .map(r => "src/" + r[0])
    }

    private async startBuild() {
        const files = await this.entryPoints()
        const file = files?.[0]
        if (file) await this.build(file)
    }

    dispose() {
        this.kill()
    }

    private async sendKillRequest() {
        try {
            await sideRequest<SideKillReq, SideKillResp>({
                req: "kill",
                data: {},
            })
            // process acknoledged the message
            return true
        } catch {
            return false
        }
    }

    private async kill() {
        this.sendKillRequest()
        const p = this._terminalPromise
        this.clear()
        if (p) {
            const t = await p
            if (t) {
                try {
                    t.sendText("\u001c")
                } catch {}
            }
        }
    }

    private async handleWorkspaceFoldersChange(
        e: vscode.WorkspaceFoldersChangeEvent
    ) {
        if (e.removed && this._projectFolder) {
            const projects = (await this.findProjects()).map(uri =>
                uri.toString()
            )
            if (!projects.includes(this._projectFolder?.toString()))
                await this.setProjectFolder(undefined)
        }
    }

    private async handleDidDeleteFiles(ev: vscode.FileDeleteEvent) {
        const cf = this.currentFile
        if (!cf) return
        const pp = cf.path
        if (ev.files.find(f => f.path === pp)) await this.build(undefined)
    }

    private async handleDidRenameFiles(ev: vscode.FileRenameEvent) {
        const cf = this.currentFile
        if (!cf) return
        const pp = cf.path
        // TODO better than just stop everyhing
        if (ev.files.find(f => f.oldUri.path === pp))
            await this.build(undefined)
    }

    private async handleCloseTerminal(t: vscode.Terminal) {
        if (this._terminalPromise && t === (await this._terminalPromise)) {
            this.clear()
            if (t.exitStatus.reason === vscode.TerminalExitReason.Process) {
                switch (t.exitStatus.code) {
                    case EXIT_CODE_EADDRINUSE:
                        // try to send a kill command
                        console.debug(
                            `trying to shutdown other development server`
                        )
                        const killed = await this.sendKillRequest()
                        if (killed) {
                            await delay(1000)
                            await this.start()
                        } else
                            showTerminalError(
                                `Development Server ports already in use.`
                            )
                        break
                    default:
                        showTerminalError(
                            `Development Server exited unexpectedly.`
                        )
                        break
                }
            }
        }
    }

    private clear() {
        this._terminalPromise = undefined
        this._projectFolder = undefined
        this._versions = undefined
        this._watcher?.dispose()
        this._watcher = undefined
        this._currentFilename = undefined
        this._currentDeviceScriptManager = undefined
        this.updateBuildConfig(undefined) // TODOD
        this.connectionState = ConnectionState.Disconnected
        this.emit(CHANGE)
    }

    async findProjects() {
        // find file marker
        const configs = await vscode.workspace.findFiles(
            "**/devsconfig.json",
            "**​/node_modules/**"
        )
        return configs
            .map(cfg => Utils.dirname(cfg))
            .filter(d => !/\/node_modules\//.test(d.fsPath))
    }

    async show() {
        if (!this._terminalPromise) return
        const terminal = await this._terminalPromise
        terminal?.show()
    }

    public async createCliTerminal(options: {
        title?: string
        progress: string
        useShell?: boolean
        diagnostics?: boolean
        message?: string
        args: string[]
    }): Promise<vscode.Terminal> {
        if (!this._projectFolder) {
            return undefined
        }

        const cwd = this._projectFolder
        const devsConfig = await checkFileExists(cwd, "./devsconfig.json")
        if (!devsConfig) {
            showTerminalError("Could not find file `devsconfig.json`.")
            return undefined // not a devicescript folder
        }

        const cliBin = "./node_modules/.bin/devicescript"
        const cliInstalled = await checkFileExists(cwd, cliBin)
        if (!cliInstalled) {
            showTerminalError("Install Node.JS dependencies to enable tools.")
            return undefined
        }

        const { title, progress, args, message } = options
        return vscode.window.withProgress<vscode.Terminal>(
            {
                location: vscode.ProgressLocation.Notification,
                title: MESSAGE_PREFIX + progress,
                cancellable: false,
            },
            async () => {
                const devToolsConfig = vscode.workspace.getConfiguration(
                    "devicescript.devtools"
                )
                const jacdacConfig = vscode.workspace.getConfiguration(
                    "devicescript.jacdac"
                )
                const isWindows = globalThis.process?.platform === "win32"
                const useShell =
                    options.useShell ?? !!devToolsConfig.get("shell")
                const nodePath = devToolsConfig.get("node") as string
                const diagnostics =
                    options.diagnostics ?? jacdacConfig.get("diagnostics")
                let cli = nodePath || "node"
                if (isWindows) {
                    cli = "node_modules\\.bin\\devicescript.cmd"
                } else args.unshift("./node_modules/.bin/devicescript")
                if (diagnostics) args.push("--diagnostics")
                console.debug(
                    `create terminal: ${useShell ? "shell:" : ""}${
                        cwd.fsPath
                    }> ${cli} ${args.join(" ")}`
                )
                const terminalOptions: vscode.TerminalOptions = {
                    name: "DeviceScript" || title,
                    hideFromUser: false,
                    message,
                    isTransient: true,
                    shellPath: useShell ? undefined : cli,
                    shellArgs: useShell ? undefined : args,
                    iconPath: logo(this.extensionState.context),
                    cwd: cwd.fsPath,
                }
                const t = vscode.window.createTerminal(terminalOptions)
                if (useShell) {
                    t.sendText("", true)
                    t.sendText(`${cli} ${args.join(" ")}`, true)
                }
                let retry = 0
                let inited = false
                while (retry++ < 20) {
                    inited = await this.init()
                    if (inited) break
                    await delay(500)
                }
                if (!inited) {
                    this.clear()
                    return undefined
                }

                return t
            }
        )
    }
}
