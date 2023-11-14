(self.webpackChunkblog=self.webpackChunkblog||[]).push([[438],{2562:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.Link=void 0;var l=n(a(434)),r=n(a(7071)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(7294)),c=a(9402),s=a(1883),i=a(7610),u=["language","to","onClick"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}var d=o.default.forwardRef((function(e,t){var a=e.language,n=e.to,m=e.onClick,d=(0,r.default)(e,u),g=(0,o.useContext)(c.I18nextContext),b=a||g.language,f=""+function(e){return g.generateDefaultLanguagePage||e!==g.defaultLanguage?"/"+e:""}(b)+n;return o.default.createElement(s.Link,(0,l.default)({},d,{to:f,innerRef:t,hrefLang:b,onClick:function(e){a&&localStorage.setItem(i.LANGUAGE_KEY,a),m&&m(e)}}))}));t.Link=d},531:function(e,t,a){"use strict";t.__esModule=!0;var n=a(1072);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||(t[e]=n[e]))}));var l=a(9402);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||(t[e]=l[e]))}));var r=a(8112);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var o=a(2562);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}))},8112:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.useI18next=void 0;var l=n(a(434)),r=a(1072),o=a(7294),c=a(1883),s=a(9402),i=a(7610);t.useI18next=function(e,t){var a=(0,r.useTranslation)(e,t),n=a.i18n,u=a.t,m=a.ready,d=(0,o.useContext)(s.I18nextContext),g=d.routed,b=d.defaultLanguage,f=d.generateDefaultLanguagePage,p=function(e){return f||e!==b?"/"+e:""};return(0,l.default)({},d,{i18n:n,t:u,ready:m,navigate:function(e,t){var a=p(d.language),n=g?""+a+e:""+e;return(0,c.navigate)(n,t)},changeLanguage:function(e,t,a){var n=""+p(e)+(t||function(e){if(!g)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(i.LANGUAGE_KEY,e),(0,c.navigate)(n,a)}})}},7782:function(e,t,a){e.exports=a(531)},3478:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),l=a(7782);var r=function(){return n.createElement("footer",{className:""},n.createElement("div",{className:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"text-center mb-3"},n.createElement("a",{target:"_blank",href:"https://github.com/mkleung",className:"text-teal-500 dark:text-red hover:underline mx-3"},"Github"),n.createElement("a",{target:"_blank",href:"https://www.instagram.com/morningmike/",className:"text-teal-500 hover:underline mx-3"},"Instagram"),n.createElement("a",{target:"_blank",href:"https://twitter.com/mikelottawa",className:"text-teal-500 hover:underline mx-3"},"Twitter")),n.createElement("div",{className:"text-center mb-3"},n.createElement("p",{className:"mb-5 text-xs font-light"},n.createElement(l.Trans,null,"Made using Gatsby"))))))};function o(){const[e,t]=n.useState(function(){if("undefined"!=typeof window){return window.localStorage.getItem("theme")||"light"}}());return n.useEffect((()=>{"dark"===e?document.body.classList.add("dark"):document.body.classList.remove("dark"),window.localStorage.setItem("theme",e)}),[e]),n.createElement("div",{className:"global-toggle-switch"},n.createElement("span",{onClick:()=>t("dark"===e?"light":"dark")},"dark"===e?n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},n.createElement("circle",{cx:"12",cy:"12",r:"5"}),n.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),n.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),n.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),n.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),n.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),n.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),n.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),n.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})):n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",style:{transform:"rotate(90deg)"}},n.createElement("mask",{id:"mask"},n.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#FFF"}),n.createElement("circle",{cx:"12",cy:"4",r:"9",fill:"black"})),n.createElement("circle",{fill:"black",cx:"12",cy:"12",r:"9",mask:"url(#mask)"}))))}var c=e=>{let{siteTitle:t,navLocation:a}=e;const{0:r,1:c}=(0,n.useState)(!1),{languages:s,changeLanguage:i}=(0,l.useI18next)(),u=n.useContext(l.I18nextContext);return n.createElement("div",{className:" max-w-screen-xl flex items-center justify-between  py-4  mx-auto p-4"},n.createElement(l.Link,{to:"/"},n.createElement("h1",{className:"text-2xl font-semibold\t"})),n.createElement("nav",null,n.createElement("section",{className:"MOBILE-MENU flex lg:hidden"},n.createElement("div",{className:"HAMBURGER-ICON space-y-2",onClick:()=>c((e=>!e))},n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"})),n.createElement("div",{className:r?"showMenuNav":"hideMenuNav"},n.createElement("div",{className:"absolute top-0 right-0 px-4 py-4",onClick:()=>c(!1)},n.createElement("svg",{className:"h-8 w-8 text-gray-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))),n.createElement("ul",{className:" flex flex-col items-center justify-between min-h-[250px]"},n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/about"},n.createElement(l.Trans,null,"about"))),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/portfolio"},n.createElement(l.Trans,null,"portfolio"))),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/projects"},n.createElement(l.Trans,null,"projects"))),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/contact"},n.createElement(l.Trans,null,"contact")))))),n.createElement("ul",{className:"navbar hidden font-medium space-x-8 lg:flex"},n.createElement("li",null,n.createElement(l.Link,{to:"/",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"home"))),n.createElement("li",null,n.createElement(l.Link,{to:"/about",activeClassName:"active",className:"block  py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"about"))),n.createElement("li",null,n.createElement(l.Link,{to:"/portfolio",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"portfolio"))),n.createElement("li",null,n.createElement(l.Link,{to:"/projects",activeClassName:"active",className:"block  py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"projects"))),n.createElement("li",null,n.createElement(l.Link,{to:"/contact",activeClassName:"active",className:"block  py-2  text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"contact"))),"fr"==u.language?n.createElement("li",{key:"en"},n.createElement("a",{className:"language-switcher",href:"#",onClick:e=>{e.preventDefault(),i("en")}},"EN")):n.createElement("li",{key:"en"},n.createElement("a",{className:"language-switcher ",href:"#",onClick:e=>{e.preventDefault(),i("fr")}},"FR")),n.createElement("li",{className:"darkCheckContainer"},n.createElement(o,null)))),n.createElement("style",null,"\n      .hideMenuNav {\n        display: none;\n      }\n      .showMenuNav {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100vh;\n        top: 0;\n        left: 0;\n        background: white;\n        z-index: 10;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n      }\n    "))};var s=e=>{let{children:t}=e;return n.createElement("main",{className:" font-sans leading-normal tracking-normal text-gray-800"},n.createElement(c,null),t,n.createElement(r,null))}},5991:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return o}});var n=a(7294),l=a(3478),r=a(7782);t.default=()=>n.createElement(l.Z,null,n.createElement("div",{className:"container max-w-2xl mx-auto p-4 py-8"},n.createElement("h3",{className:" mb-5 mainTitle"},n.createElement(r.Trans,null,"learn")),n.createElement("div",{class:"mb-4"},n.createElement("span",{class:"bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 "},"React")),n.createElement("div",{className:"container m-auto grid grid-cols-2 gap-4"},n.createElement("div",{class:"max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},n.createElement("p",{class:" title font-bold text-l mb-4"},"React Project 6 - Quiz app"),n.createElement("a",{target:"_blank",href:"https://bhm6v.csb.app/",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2"},"View Demo"),n.createElement("a",{target:"_blank",href:"https://github.com/mkleung/100daysofReact",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"},"Code")),n.createElement("div",{class:"max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},n.createElement("p",{class:" title font-bold text-l mb-4"},"React Project 5 - To do list"),n.createElement("a",{target:"_blank",href:"https://ri74q.csb.app/",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2"},"View Demo"),n.createElement("a",{target:"_blank",href:"https://github.com/mkleung/100daysofReact",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"},"Code")),n.createElement("div",{class:"max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},n.createElement("p",{class:" title font-bold text-l mb-4"},"React Project 4 - Calculator"),n.createElement("a",{target:"_blank",href:"https://193rm.codesandbox.io/",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2"},"View Demo"),n.createElement("a",{target:"_blank",href:"https://github.com/mkleung/100daysofReact",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"},"Code")),n.createElement("div",{class:"max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},n.createElement("p",{class:" title font-bold text-l mb-4"},"React Project 3 - Calendar"),n.createElement("a",{target:"_blank",href:"https://193rm.codesandbox.io/",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2"},"View Demo"),n.createElement("a",{target:"_blank",href:"https://github.com/mkleung/100daysofReact",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"},"Code")),n.createElement("div",{class:"max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},n.createElement("p",{class:" title font-bold text-l mb-2"},"React Project 2 - Stopwatch"),n.createElement("ul",{class:"list-disc pl-6 mb-4"},n.createElement("li",null,"Props"),n.createElement("li",null,"prevState"),n.createElement("li",null,"Bind")),n.createElement("a",{target:"_blank",href:"https://6fr6p.codesandbox.io/",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2"},"View Demo"),n.createElement("a",{target:"_blank",href:"https://github.com/mkleung/100daysofReact",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"},"Code")),n.createElement("div",{class:"max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},n.createElement("p",{class:" title font-bold text-l mb-2"},"React Project 1 - Button Counter"),n.createElement("ul",{class:"list-disc pl-6 mb-4"},n.createElement("li",null,"Function Components"),n.createElement("li",null,"Class Components"),n.createElement("li",null,"SetState")),n.createElement("a",{target:"_blank",href:"https://t2f9h.codesandbox.io/",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2"},"View Demo"),n.createElement("a",{target:"_blank",href:"https://github.com/mkleung/100daysofReact",class:"transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"},"Code")))));const o=()=>n.createElement("title",null,n.createElement(r.Trans,null,"learn")," ")}}]);
//# sourceMappingURL=component---src-pages-learn-js-2478346781b6935215a5.js.map