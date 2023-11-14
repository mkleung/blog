(self.webpackChunkblog=self.webpackChunkblog||[]).push([[501],{2562:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.Link=void 0;var l=n(a(434)),r=n(a(7071)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(n,r,c):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(7294)),o=a(9402),i=a(1883),s=a(7610),m=["language","to","onClick"];function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var d=c.default.forwardRef((function(e,t){var a=e.language,n=e.to,u=e.onClick,d=(0,r.default)(e,m),g=(0,c.useContext)(o.I18nextContext),f=a||g.language,p=""+function(e){return g.generateDefaultLanguagePage||e!==g.defaultLanguage?"/"+e:""}(f)+n;return c.default.createElement(i.Link,(0,l.default)({},d,{to:p,innerRef:t,hrefLang:f,onClick:function(e){a&&localStorage.setItem(s.LANGUAGE_KEY,a),u&&u(e)}}))}));t.Link=d},531:function(e,t,a){"use strict";t.__esModule=!0;var n=a(1072);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||(t[e]=n[e]))}));var l=a(9402);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||(t[e]=l[e]))}));var r=a(8112);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var c=a(2562);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||(t[e]=c[e]))}))},8112:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.useI18next=void 0;var l=n(a(434)),r=a(1072),c=a(7294),o=a(1883),i=a(9402),s=a(7610);t.useI18next=function(e,t){var a=(0,r.useTranslation)(e,t),n=a.i18n,m=a.t,u=a.ready,d=(0,c.useContext)(i.I18nextContext),g=d.routed,f=d.defaultLanguage,p=d.generateDefaultLanguagePage,E=function(e){return p||e!==f?"/"+e:""};return(0,l.default)({},d,{i18n:n,t:m,ready:u,navigate:function(e,t){var a=E(d.language),n=g?""+a+e:""+e;return(0,o.navigate)(n,t)},changeLanguage:function(e,t,a){var n=""+E(e)+(t||function(e){if(!g)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(s.LANGUAGE_KEY,e),(0,o.navigate)(n,a)}})}},7782:function(e,t,a){e.exports=a(531)},3478:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(7294),l=a(7782);var r=function(){return n.createElement("footer",{className:""},n.createElement("div",{className:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},n.createElement("hr",{className:"my-6 border-gray-100 sm:mx-auto dark:border-gray-200 lg:my-8"}),n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"text-center mb-3"},n.createElement("a",{target:"_blank",href:"https://github.com/mkleung",className:"text-teal-500 dark:text-red hover:underline mx-3"},"Github"),n.createElement("a",{target:"_blank",href:"https://www.instagram.com/morningmike/",className:"text-teal-500 hover:underline mx-3"},"Instagram"),n.createElement("a",{target:"_blank",href:"https://twitter.com/mikelottawa",className:"text-teal-500 hover:underline mx-3"},"Twitter")),n.createElement("div",{className:"text-center mb-3"},n.createElement("p",{className:"mb-5 text-xs font-light"},n.createElement(l.Trans,null,"Made using Gatsby"))))))};function c(){const[e,t]=n.useState(function(){if("undefined"!=typeof window){return window.localStorage.getItem("theme")||"light"}}());return n.useEffect((()=>{"dark"===e?document.body.classList.add("dark"):document.body.classList.remove("dark"),window.localStorage.setItem("theme",e)}),[e]),n.createElement("div",{className:"global-toggle-switch"},n.createElement("span",{onClick:()=>t("dark"===e?"light":"dark")},"dark"===e?n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},n.createElement("circle",{cx:"12",cy:"12",r:"5"}),n.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),n.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),n.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),n.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),n.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),n.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),n.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),n.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})):n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",style:{transform:"rotate(90deg)"}},n.createElement("mask",{id:"mask"},n.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#FFF"}),n.createElement("circle",{cx:"12",cy:"4",r:"9",fill:"black"})),n.createElement("circle",{fill:"black",cx:"12",cy:"12",r:"9",mask:"url(#mask)"}))))}var o=e=>{let{siteTitle:t,navLocation:a}=e;const{0:r,1:o}=(0,n.useState)(!1),{languages:i,changeLanguage:s}=(0,l.useI18next)(),m=n.useContext(l.I18nextContext);return n.createElement("div",{className:" max-w-screen-xl flex items-center justify-between  py-4  mx-auto p-4"},n.createElement(l.Link,{to:"/"},n.createElement("h1",{className:"text-2xl font-semibold\t"})),n.createElement("nav",null,n.createElement("section",{className:"MOBILE-MENU flex lg:hidden"},n.createElement("div",{className:"HAMBURGER-ICON space-y-2",onClick:()=>o((e=>!e))},n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"})),n.createElement("div",{className:r?"showMenuNav":"hideMenuNav"},n.createElement("div",{className:"absolute top-0 right-0 px-4 py-4",onClick:()=>o(!1)},n.createElement("svg",{className:"h-8 w-8 text-gray-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))),n.createElement("ul",{className:" flex flex-col items-center justify-between min-h-[250px]"},n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/about"},n.createElement(l.Trans,null,"about"))),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/portfolio"},n.createElement(l.Trans,null,"portfolio"))),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/learn"},n.createElement(l.Trans,null,"learn"))),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/contact"},n.createElement(l.Trans,null,"contact")))))),n.createElement("ul",{className:"navbar hidden font-medium space-x-8 lg:flex"},n.createElement("li",null,n.createElement(l.Link,{to:"/",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"home"))),n.createElement("li",null,n.createElement(l.Link,{to:"/about",activeClassName:"active",className:"block  py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"about"))),n.createElement("li",null,n.createElement(l.Link,{to:"/portfolio",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"portfolio"))),n.createElement("li",null,n.createElement(l.Link,{to:"/learn",activeClassName:"active",className:"block  py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"learn"))),n.createElement("li",null,n.createElement(l.Link,{to:"/contact",activeClassName:"active",className:"block  py-2  text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out"},n.createElement(l.Trans,null,"contact"))),"fr"==m.language?n.createElement("li",{key:"en"},n.createElement("a",{className:"language-switcher",href:"#",onClick:e=>{e.preventDefault(),s("en")}},"EN")):n.createElement("li",{key:"en"},n.createElement("a",{className:"language-switcher ",href:"#",onClick:e=>{e.preventDefault(),s("fr")}},"FR")),n.createElement("li",{className:"darkCheckContainer"},n.createElement(c,null)))),n.createElement("style",null,"\n      .hideMenuNav {\n        display: none;\n      }\n      .showMenuNav {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100vh;\n        top: 0;\n        left: 0;\n        background: white;\n        z-index: 10;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n      }\n    "))};var i=e=>{let{children:t}=e;return n.createElement("main",{className:" font-sans leading-normal tracking-normal text-gray-800"},n.createElement(o,null),t,n.createElement(r,null))}},9480:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return s},default:function(){return i}});var n=a(7294),l=a(3478),r=a(7782);const c=" https://public.herotofu.com/v1/ee330890-566d-11ee-844c-3ff971b55902";var o=()=>{const{0:e,1:t}=(0,n.useState)(!1);return e?n.createElement(n.Fragment,null,n.createElement("div",{className:"text-2xl"},"Thank you!"),n.createElement("div",{className:"text-md"},"We'll be in touch soon.")):n.createElement("form",{action:c,onSubmit:e=>{e.preventDefault();const a=e.target.elements,n={};for(let t=0;t<a.length;t++)a[t].name&&(n[a[t].name]=a[t].value);fetch(c,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>{if(!e.ok)throw new Error("Form response was not ok");t(!0)})).catch((t=>{e.target.submit()}))},method:"POST"},n.createElement("div",{className:"pt-0 mb-3"},n.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",required:!0})),n.createElement("div",{className:"pt-0 mb-3"},n.createElement("input",{type:"email",placeholder:"Email",name:"email",className:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",required:!0})),n.createElement("div",{className:"pt-0 mb-3"},n.createElement("textarea",{placeholder:"Message",name:"message",className:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",required:!0})),n.createElement("div",{className:"pt-0 pt-3 mb-3"},n.createElement("button",{className:"transition-colors duration-300 ease-in-out bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full",type:"submit"},n.createElement(r.Trans,null,"send"))))};var i=()=>n.createElement(l.Z,null,n.createElement("div",{className:"container max-w-2xl mx-auto p-4 py-8"},n.createElement("h3",{className:" mb-5 mainTitle"},n.createElement(r.Trans,null,"contact me")),n.createElement(o,null)));const s=()=>n.createElement("title",null,"Contact")}}]);
//# sourceMappingURL=component---src-pages-contact-js-3453fa2e84832598e5d1.js.map