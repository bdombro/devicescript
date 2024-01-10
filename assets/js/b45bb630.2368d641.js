"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2782],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const i={},o="BME680",p={unversionedId:"api/drivers/bme680",id:"api/drivers/bme680",title:"BME680",description:"Driver for BME680 temperature/humidity/air pressure/aqi",source:"@site/docs/api/drivers/bme680.md",sourceDirName:"api/drivers",slug:"/api/drivers/bme680",permalink:"/devicescript/api/drivers/bme680",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AHT20",permalink:"/devicescript/api/drivers/aht20"},next:{title:"Button",permalink:"/devicescript/api/drivers/button"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bme680"},"BME680"),(0,a.kt)("p",null,"Driver for BME680 temperature/humidity/air pressure/aqi\nat I2C address ",(0,a.kt)("inlineCode",{parentName:"p"},"0x76")," (default) or ",(0,a.kt)("inlineCode",{parentName:"p"},"0x77"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Services: ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/temperature/"},"temperature"),", ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/humidity/"},"humidity"),", ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/airpressure/"},"air pressure"),", ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/airqualityindex/"},"air quality index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bme680-ds001.pdf"},"Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript/blob/main/packages/drivers/src/bme680.ts"},"Source"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { startBME680 } from "@devicescript/drivers"\nconst { temperature, humidity, pressure, airQualityIndex } = await startBME680()\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure I2C throught the ",(0,a.kt)("a",{parentName:"li",href:"/developer/board-configuration"},"board configuration")),(0,a.kt)("li",{parentName:"ul"},"Check that you are using the correct I2C address")))}m.isMDXComponent=!0}}]);