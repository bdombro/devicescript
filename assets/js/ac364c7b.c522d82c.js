"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7761],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(25773),i=(n(27378),n(35318));const r={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Matrix Keypad service"},l="MatrixKeypad",p={unversionedId:"api/clients/matrixkeypad",id:"api/clients/matrixkeypad",title:"MatrixKeypad",description:"DeviceScript client for Matrix Keypad service",source:"@site/docs/api/clients/matrixkeypad.md",sourceDirName:"api/clients",slug:"/api/clients/matrixkeypad",permalink:"/devicescript/api/clients/matrixkeypad",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Matrix Keypad service"},sidebar:"tutorialSidebar"},o={},s=[{value:"Registers",id:"registers",level:2},{value:"reading",id:"ro:reading",level:3},{value:"rows",id:"const:rows",level:3},{value:"columns",id:"const:columns",level:3},{value:"labels",id:"const:labels",level:3},{value:"variant",id:"const:variant",level:3},{value:"Events",id:"events",level:2},{value:"down",id:"down",level:3},{value:"up",id:"up",level:3},{value:"click",id:"click",level:3},{value:"longClick",id:"longclick",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"matrixkeypad"},"MatrixKeypad"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,i.kt)("p",null,"A matrix of buttons connected as a keypad"),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { MatrixKeypad } from "@devicescript/core"\n\nconst matrixKeypad = new MatrixKeypad()\n')),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"registers"},"Registers"),(0,i.kt)("p",null),(0,i.kt)("h3",{id:"ro:reading"},"reading"),(0,i.kt)("p",null,"The coordinate of the button currently pressed. Keys are zero-indexed from left to right, top to bottom:\n",(0,i.kt)("inlineCode",{parentName:"p"},"row = index / columns"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"column = index % columns"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<any[]>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"r: u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"track incoming values"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { MatrixKeypad } from "@devicescript/core"\n\nconst matrixKeypad = new MatrixKeypad()\n// ...\nmatrixKeypad.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h3",{id:"const:rows"},"rows"),(0,i.kt)("p",null,"Number of rows in the matrix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { MatrixKeypad } from "@devicescript/core"\n\nconst matrixKeypad = new MatrixKeypad()\n// ...\nconst value = await matrixKeypad.rows.read()\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h3",{id:"const:columns"},"columns"),(0,i.kt)("p",null,"Number of columns in the matrix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { MatrixKeypad } from "@devicescript/core"\n\nconst matrixKeypad = new MatrixKeypad()\n// ...\nconst value = await matrixKeypad.columns.read()\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h3",{id:"const:labels"},"labels"),(0,i.kt)("p",null,"The characters printed on the keys if any, in indexing sequence."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Register<any[]>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"li"},"r: z"),")"),(0,i.kt)("li",{parentName:"ul"},"optional: this register may not be implemented"),(0,i.kt)("li",{parentName:"ul"},"constant: the register value will not change (until the next reset)")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h3",{id:"const:variant"},"variant"),(0,i.kt)("p",null,"The type of physical keypad. If the variant is ",(0,i.kt)("inlineCode",{parentName:"p"},"ElastomerLEDPixel"),"\nand the next service on the device is a ",(0,i.kt)("inlineCode",{parentName:"p"},"LEDPixel")," service, it is considered\nas the service controlling the LED pixel on the keypad."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { MatrixKeypad } from "@devicescript/core"\n\nconst matrixKeypad = new MatrixKeypad()\n// ...\nconst value = await matrixKeypad.variant.read()\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"down"},"down"),(0,i.kt)("p",null,"Emitted when a key, at the given index, goes from inactive (",(0,i.kt)("inlineCode",{parentName:"p"},"pressed == 0"),") to active."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"matrixKeypad.down.subscribe(() => {\n\n})\n")),(0,i.kt)("h3",{id:"up"},"up"),(0,i.kt)("p",null,"Emitted when a key, at the given index, goes from active (",(0,i.kt)("inlineCode",{parentName:"p"},"pressed == 1"),") to inactive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"matrixKeypad.up.subscribe(() => {\n\n})\n")),(0,i.kt)("h3",{id:"click"},"click"),(0,i.kt)("p",null,"Emitted together with ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," when the press time was not longer than 500ms."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"matrixKeypad.click.subscribe(() => {\n\n})\n")),(0,i.kt)("h3",{id:"longclick"},"longClick"),(0,i.kt)("p",null,"Emitted together with ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," when the press time was more than 500ms."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"matrixKeypad.longClick.subscribe(() => {\n\n})\n")),(0,i.kt)("p",null))}d.isMDXComponent=!0}}]);