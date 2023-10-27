(self.webpackChunkblog=self.webpackChunkblog||[]).push([[593],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,n,r)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=n(c)===c&&r(c)!==c,i=s,s=r(c)===c&&n(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){"use strict";a.d(t,{L:function(){return p},M:function(){return k},P:function(){return w},S:function(){return D},_:function(){return i},a:function(){return s},b:function(){return u},g:function(){return d},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),l=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],g=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,m);return n.createElement(n.Fragment,null,n.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:o}=e,c=i(e,f);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=i(e,h);const o=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,s({},l,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,E);return t?n.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(b,s({},e)),n.createElement("noscript",null,n.createElement(b,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],L=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:l().object.isRequired,alt:C},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],I=new Set;let O,T;const M=function(e){let{as:t="div",image:r,style:l,backgroundColor:u,className:d,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=i(e,_);const{width:y,height:b,layout:v}=r,E=c(y,b,v),{style:w,className:k}=E,x=i(E,j),N=(0,n.useRef)(),L=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(L);if(T&&I.has(L))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(s({isLoading:!0,isLoaded:I.has(L),image:r},h)),I.has(L)||(t=requestAnimationFrame((()=>{N.current&&(n=i(N.current,L,I,l,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{I.has(L)&&T&&(N.current.innerHTML=T(s({isLoading:I.has(L),isLoaded:I.has(L),image:r},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},x,{style:s({},w,l,{backgroundColor:u}),className:k+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},P=(0,n.memo)((function(e){return e.image?(0,n.createElement)(M,e):null}));P.propTypes=S,P.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:r,__error:l}=t,o=i(t,R);return l&&console.warn(l),r?n.createElement(e,s({image:r},o)):(console.warn("Image not loaded",a),null)}}const q=A((function(e){let{as:t="div",className:a,class:r,style:l,image:o,loading:m="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=i(e,x);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),f=s({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:E,height:C,layout:S,images:_,placeholder:j,backgroundColor:I}=o,O=c(E,C,S),{style:T,className:M}=O,P=i(O,N),R={fallback:void 0,sources:[]};return _.fallback&&(R.fallback=s({},_.fallback,{srcSet:_.fallback.srcSet?L(_.fallback.srcSet):void 0})),_.sources&&(R.sources=_.sources.map((e=>s({},e,{srcSet:L(e.srcSet)})))),n.createElement(t,s({},P,{style:s({},T,l,{backgroundColor:h}),className:M+(a?" "+a:"")}),n.createElement(p,{layout:S,width:E,height:C},n.createElement(w,s({},d(j,!1,S,E,C,I,y,b))),n.createElement(k,s({"data-gatsby-image-ssr":"",className:g},v,u("eager"===m,!1,R,m,f)))))})),W=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),G={src:l().string.isRequired,alt:C,width:W,height:W,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=G;const D=A(P);D.displayName="StaticImage",D.propTypes=G},2562:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.Link=void 0;var r=n(a(434)),l=n(a(7071)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=r?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(n,l,s):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a(7294)),i=a(9402),o=a(1883),c=a(7610),u=["language","to","onClick"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var m=s.default.forwardRef((function(e,t){var a=e.language,n=e.to,d=e.onClick,m=(0,l.default)(e,u),g=(0,s.useContext)(i.I18nextContext),p=a||g.language,f=""+function(e){return g.generateDefaultLanguagePage||e!==g.defaultLanguage?"/"+e:""}(p)+n;return s.default.createElement(o.Link,(0,r.default)({},m,{to:f,innerRef:t,hrefLang:p,onClick:function(e){a&&localStorage.setItem(c.LANGUAGE_KEY,a),d&&d(e)}}))}));t.Link=m},531:function(e,t,a){"use strict";t.__esModule=!0;var n=a(1072);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||(t[e]=n[e]))}));var r=a(9402);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var l=a(8112);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||(t[e]=l[e]))}));var s=a(2562);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||(t[e]=s[e]))}))},8112:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.useI18next=void 0;var r=n(a(434)),l=a(1072),s=a(7294),i=a(1883),o=a(9402),c=a(7610);t.useI18next=function(e,t){var a=(0,l.useTranslation)(e,t),n=a.i18n,u=a.t,d=a.ready,m=(0,s.useContext)(o.I18nextContext),g=m.routed,p=m.defaultLanguage,f=m.generateDefaultLanguagePage,h=function(e){return f||e!==p?"/"+e:""};return(0,r.default)({},m,{i18n:n,t:u,ready:d,navigate:function(e,t){var a=h(m.language),n=g?""+a+e:""+e;return(0,i.navigate)(n,t)},changeLanguage:function(e,t,a){var n=""+h(e)+(t||function(e){if(!g)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(c.LANGUAGE_KEY,e),(0,i.navigate)(n,a)}})}},7782:function(e,t,a){e.exports=a(531)},3478:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294),r=a(7782);var l=function(){return n.createElement("footer",{className:""},n.createElement("div",{className:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},n.createElement("hr",{className:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"text-center mb-3"},n.createElement("a",{target:"_blank",href:"https://github.com/mkleung",className:"text-teal-500 hover:underline mx-3"},"Github"),n.createElement("a",{target:"_blank",href:"https://www.instagram.com/morningmike/",className:"text-teal-500 hover:underline mx-3"},"Instagram"),n.createElement("a",{target:"_blank",href:"https://twitter.com/mikelottawa",className:"text-teal-500 hover:underline mx-3"},"Twitter")),n.createElement("div",{className:"text-center mb-3"},n.createElement("p",{className:"mb-5 text-xs font-light"},n.createElement(r.Trans,null,"Made using Gatsby"))))))};function s(){const[e,t]=n.useState(function(){if("undefined"!=typeof window){return window.localStorage.getItem("theme")||"light"}}());return n.useEffect((()=>{"dark"===e?document.body.classList.add("dark"):document.body.classList.remove("dark"),window.localStorage.setItem("theme",e)}),[e]),n.createElement("div",{className:"global-toggle-switch"},n.createElement("span",{onClick:()=>t("dark"===e?"light":"dark")},"dark"===e?n.createElement("span",null,"☀️"):n.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",class:"fade-in text-xl",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"}))))}a(1883);var i=e=>{let{siteTitle:t,navLocation:a}=e;const{0:l,1:i}=(0,n.useState)(!1),{languages:o,originalPath:c}=(0,r.useI18next)();return n.createElement("div",{className:" max-w-screen-xl flex items-center justify-between  py-4  mx-auto p-4"},n.createElement(r.Link,{to:"/"},n.createElement("h1",{className:"text-2xl font-semibold\t"})),n.createElement("nav",null,n.createElement("section",{className:"MOBILE-MENU flex lg:hidden"},n.createElement("div",{className:"HAMBURGER-ICON space-y-2",onClick:()=>i((e=>!e))},n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),n.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"})),n.createElement("div",{className:l?"showMenuNav":"hideMenuNav"},n.createElement("div",{className:"absolute top-0 right-0 px-4 py-4",onClick:()=>i(!1)},n.createElement("svg",{className:"h-8 w-8 text-gray-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))),n.createElement("ul",{className:" flex flex-col items-center justify-between min-h-[250px]"},n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(r.Link,{to:"/about"},"About")),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(r.Link,{to:"/projects"},"Projects")),n.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},n.createElement(r.Link,{to:"/contact"},"Contact"))))),n.createElement("ul",{className:"navbar hidden font-medium space-x-8 lg:flex"},n.createElement("li",null,n.createElement(r.Link,{to:"/",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},n.createElement(r.Trans,null,"home"))),n.createElement("li",null,n.createElement(r.Link,{to:"/about",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},n.createElement(r.Trans,null,"about"))),n.createElement("li",null,n.createElement(r.Link,{to:"/projects",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},n.createElement(r.Trans,null,"projects"))),n.createElement("li",null,n.createElement(r.Link,{to:"/contact",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},n.createElement(r.Trans,null,"contact"))),o.map((e=>n.createElement("li",{key:e},n.createElement(r.Link,{className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 ",to:c,language:e},e)))),n.createElement("li",{className:"darkCheckContainer"},n.createElement(s,null)))),n.createElement("style",null,"\n      .hideMenuNav {\n        display: none;\n      }\n      .showMenuNav {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100vh;\n        top: 0;\n        left: 0;\n        background: white;\n        z-index: 10;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n      }\n    "))};var o=e=>{let{children:t}=e;return n.createElement("main",{className:" font-sans leading-normal tracking-normal text-gray-800"},n.createElement(i,null),t,n.createElement(l,null))}}}]);
//# sourceMappingURL=cabfd722cbd9ab7fa0bcfdddd3e8483fc78a444b-c19572b87537343eb54a.js.map