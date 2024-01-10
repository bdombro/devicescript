"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6474],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(25773),i=(r(27378),r(35318));const a={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Pulse Oximeter service"},l="PulseOximeter",o={unversionedId:"api/clients/pulseoximeter",id:"api/clients/pulseoximeter",title:"PulseOximeter",description:"DeviceScript client for Pulse Oximeter service",source:"@site/docs/api/clients/pulseoximeter.md",sourceDirName:"api/clients",slug:"/api/clients/pulseoximeter",permalink:"/devicescript/api/clients/pulseoximeter",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Pulse Oximeter service"},sidebar:"tutorialSidebar"},p={},s=[{value:"Registers",id:"registers",level:2},{value:"reading",id:"ro:reading",level:3},{value:"readingError",id:"ro:readingError",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pulseoximeter"},"PulseOximeter"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,i.kt)("p",null,"A sensor approximating the oxygen level."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Jacdac is not suitable for medical devices and should NOT be used in any kind of device to diagnose or treat any medical conditions.")),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { PulseOximeter } from "@devicescript/core"\n\nconst pulseOximeter = new PulseOximeter()\n')),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"registers"},"Registers"),(0,i.kt)("p",null),(0,i.kt)("h3",{id:"ro:reading"},"reading"),(0,i.kt)("p",null,"The estimated oxygen level in blood."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8.8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { PulseOximeter } from "@devicescript/core"\n\nconst pulseOximeter = new PulseOximeter()\n// ...\nconst value = await pulseOximeter.reading.read()\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"track incoming values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { PulseOximeter } from "@devicescript/core"\n\nconst pulseOximeter = new PulseOximeter()\n// ...\npulseOximeter.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("h3",{id:"ro:readingError"},"readingError"),(0,i.kt)("p",null,"The estimated error on the reported sensor data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8.8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read only"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { PulseOximeter } from "@devicescript/core"\n\nconst pulseOximeter = new PulseOximeter()\n// ...\nconst value = await pulseOximeter.readingError.read()\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"track incoming values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { PulseOximeter } from "@devicescript/core"\n\nconst pulseOximeter = new PulseOximeter()\n// ...\npulseOximeter.readingError.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("p",null))}m.isMDXComponent=!0}}]);