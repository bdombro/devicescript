"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3663],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(r),f=i,v=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(25773),i=(r(27378),r(35318));const o={description:"Mounts a buzzer (sounder) server",title:"Buzzer"},a="Buzzer",p={unversionedId:"api/drivers/buzzer",id:"api/drivers/buzzer",title:"Buzzer",description:"Mounts a buzzer (sounder) server",source:"@site/docs/api/drivers/buzzer.md",sourceDirName:"api/drivers",slug:"/api/drivers/buzzer",permalink:"/devicescript/api/drivers/buzzer",draft:!1,tags:[],version:"current",frontMatter:{description:"Mounts a buzzer (sounder) server",title:"Buzzer"},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/devicescript/api/drivers/button"},next:{title:"DA213B",permalink:"/devicescript/api/drivers/da213b"}},s={},c=[{value:"Options",id:"options",level:2},{value:"pin",id:"pin",level:3},{value:"activeLow",id:"activelow",level:3}],u={toc:c},l="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"buzzer"},"Buzzer"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"startBuzzer")," function starts a ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/services/buzzer"},"buzzer")," server on the device\nand returns a ",(0,i.kt)("a",{parentName:"p",href:"/api/clients/buzzer"},"client"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startBuzzer } from "@devicescript/servers"\n\nconst speaker = startBuzzer({\n    pin: gpio(20)\n})\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"pin"},"pin"),(0,i.kt)("p",null,"The pin hardware identifier on which to mount the buzzer."),(0,i.kt)("h3",{id:"activelow"},"activeLow"),(0,i.kt)("p",null,"Indicates that the current flows through the speaker when the pin ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".\nThat means that when the speaker is supposed to be silent, the pin will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),".\nBy default, the opposite is assumed."))}d.isMDXComponent=!0}}]);