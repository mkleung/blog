(self.webpackChunkblog=self.webpackChunkblog||[]).push([[672],{2562:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.Link=void 0;var l=n(a(434)),r=n(a(7071)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(n,r,c):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(7294)),s=a(9402),o=a(1883),i=a(7610),u=["language","to","onClick"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}var d=c.default.forwardRef((function(e,t){var a=e.language,n=e.to,m=e.onClick,d=(0,r.default)(e,u),f=(0,c.useContext)(s.I18nextContext),g=a||f.language,E=""+function(e){return f.generateDefaultLanguagePage||e!==f.defaultLanguage?"/"+e:""}(g)+n;return c.default.createElement(o.Link,(0,l.default)({},d,{to:E,innerRef:t,hrefLang:g,onClick:function(e){a&&localStorage.setItem(i.LANGUAGE_KEY,a),m&&m(e)}}))}));t.Link=d},531:function(e,t,a){"use strict";t.__esModule=!0;var n=a(1072);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||(t[e]=n[e]))}));var l=a(9402);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||(t[e]=l[e]))}));var r=a(8112);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var c=a(2562);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||(t[e]=c[e]))}))},8112:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.useI18next=void 0;var l=n(a(434)),r=a(1072),c=a(7294),s=a(1883),o=a(9402),i=a(7610);t.useI18next=function(e,t){var a=(0,r.useTranslation)(e,t),n=a.i18n,u=a.t,m=a.ready,d=(0,c.useContext)(o.I18nextContext),f=d.routed,g=d.defaultLanguage,E=d.generateDefaultLanguagePage,p=function(e){return E||e!==g?"/"+e:""};return(0,l.default)({},d,{i18n:n,t:u,ready:m,navigate:function(e,t){var a=p(d.language),n=f?""+a+e:""+e;return(0,s.navigate)(n,t)},changeLanguage:function(e,t,a){var n=""+p(e)+(t||function(e){if(!f)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(i.LANGUAGE_KEY,e),(0,s.navigate)(n,a)}})}},7782:function(e,t,a){e.exports=a(531)},3478:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294),l=a(7782);var r=function(){return n.createElement("footer",{className:""},n.createElement("div",{className:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},n.createElement("hr",{className:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"text-center mb-3"},n.createElement("a",{target:"_blank",href:"https://github.com/mkleung",className:"text-teal-500 hover:underline mx-3"},"Github"),n.createElement("a",{target:"_blank",href:"https://www.instagram.com/morningmike/",className:"text-teal-500 hover:underline mx-3"},"Instagram"),n.createElement("a",{target:"_blank",href:"https://twitter.com/mikelottawa",className:"text-teal-500 hover:underline mx-3"},"Twitter")),n.createElement("div",{className:"text-center mb-3"},n.createElement("p",{className:"mb-5 text-xs font-light"},n.createElement(l.Trans,null,"Made using Gatsby"))))))};function c(){const[e,t]=n.useState(function(){if("undefined"!=typeof window){return window.localStorage.getItem("theme")||"light"}}());return n.useEffect((()=>{"dark"===e?document.body.classList.add("dark"):document.body.classList.remove("dark"),window.localStorage.setItem("theme",e)}),[e]),n.createElement("div",{className:"global-toggle-switch"},n.createElement("span",{onClick:()=>t("dark"===e?"light":"dark")},"dark"===e?n.createElement("span",null,"☀️"):n.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",class:"fade-in text-xl",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"}))))}var s=e=>{let{siteTitle:t,navLocation:a}=e;const{0:r,1:s}=(0,n.useState)(!1),{languages:o,changeLanguage:i}=(0,l.useI18next)(),u=n.useContext(l.I18nextContext);return n.createElement("div",{className:" max-w-screen-xl flex items-center justify-between  py-4  mx-auto p-4"},n.createElement(l.Link,{to:"/"},n.createElement("h1",{className:"text-2xl font-semibold\t"})),n.createElement("nav",null,n.createElement("section",{className:"MOBILE-MENU flex lg:hidden"},n.createElement("div",{className:"HAMBURGER-ICON space-y-2",onClick:()=>s((e=>!e))},n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"})),n.createElement("div",{className:r?"showMenuNav":"hideMenuNav"},n.createElement("div",{className:"absolute top-0 right-0 px-4 py-4",onClick:()=>s(!1)},n.createElement("svg",{className:"h-8 w-8 text-gray-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))),n.createElement("ul",{className:" flex flex-col items-center justify-between min-h-[250px]"},n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/about"},n.createElement(l.Trans,null,"about"))),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/projects"},n.createElement(l.Trans,null,"projects"))),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(l.Link,{to:"/contact"},n.createElement(l.Trans,null,"contact")))))),n.createElement("ul",{className:"navbar hidden font-medium space-x-8 lg:flex"},n.createElement("li",null,n.createElement(l.Link,{to:"/",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},n.createElement(l.Trans,null,"home"))),n.createElement("li",null,n.createElement(l.Link,{to:"/about",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},n.createElement(l.Trans,null,"about"))),n.createElement("li",null,n.createElement(l.Link,{to:"/projects",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},n.createElement(l.Trans,null,"projects"))),n.createElement("li",null,n.createElement(l.Link,{to:"/contact",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},n.createElement(l.Trans,null,"contact"))),"fr"==u.language?n.createElement("li",{key:"en"},n.createElement("a",{className:"language-switcher",href:"#",onClick:e=>{e.preventDefault(),i("en")}},"EN")):n.createElement("li",{key:"en"},n.createElement("a",{className:"language-switcher",href:"#",onClick:e=>{e.preventDefault(),i("fr")}},"FR")),n.createElement("li",{className:"darkCheckContainer"},n.createElement(c,null)))),n.createElement("style",null,"\n      .hideMenuNav {\n        display: none;\n      }\n      .showMenuNav {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100vh;\n        top: 0;\n        left: 0;\n        background: white;\n        z-index: 10;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n      }\n    "))};var o=e=>{let{children:t}=e;return n.createElement("main",{className:" font-sans leading-normal tracking-normal text-gray-800"},n.createElement(s,null),t,n.createElement(r,null))}},206:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return c}});var n=a(7294),l=a(3478),r=a(7782);t.default=()=>{const{t:e}=(0,r.useTranslation)();return n.createElement(l.Z,null,n.createElement("div",{className:"container max-w-2xl mx-auto  grid grid-cols-3 p-4 gap-4 mt-28"},n.createElement("div",{className:"col-span-2\t "},n.createElement("main",null,n.createElement("h1",null,n.createElement(r.Trans,null,"Welcome to my Gatsby site!")),n.createElement("p",null,n.createElement(r.Trans,null,"My name is Shanika")),n.createElement("p",null,n.createElement(r.Trans,null,"My profession is SSE")),n.createElement("p",null,n.createElement(r.Trans,null,"My Birthday is 1990/10/10")),n.createElement("p",null,e("message"))))))};const c=()=>n.createElement("title",null,"Michael Leung - Test")}}]);
//# sourceMappingURL=component---src-pages-test-js-e1c98f4c7767f1d38347.js.map