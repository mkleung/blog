(self.webpackChunkblog=self.webpackChunkblog||[]).push([[126],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,o=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,a,n)=>{let s=!1,o=!1,l=!1;for(let i=0;i<e.length;i++){const c=e[i];s&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,l=o,o=!0,i++):o&&l&&r.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),l=o,o=!1,s=!0):(s=a(c)===c&&n(c)!==c,l=o,o=n(c)===c&&a(c)!==c)}return e})(e,s,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,i.lastIndex=0,e.replace(l,((e,r)=>t(r))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},6132:function(e,t,r){"use strict";var a=r(4836);t.__esModule=!0,t.default=void 0;var n=a(r(6115)),s=a(r(7867)),o=a(r(8416)),l=a(r(7294)),i=a(r(5697)),c=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,(0,o.default)((0,n.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return l.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(l.default.Component);c.propTypes={children:i.default.func.isRequired};var d=c;t.default=d},3071:function(e,t,r){"use strict";var a=r(4836)(r(6132));t.L=a.default},8032:function(e,t,r){"use strict";r.d(t,{L:function(){return g},M:function(){return E},P:function(){return x},S:function(){return Q},_:function(){return l},a:function(){return o},b:function(){return d},g:function(){return u},h:function(){return i}});var a=r(7294),n=(r(3204),r(5697)),s=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t.indexOf(r=s[a])>=0||(n[r]=e[r]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,s,l,i){const c={};s&&(c.backgroundColor=s,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),i&&(c.objectPosition=i);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=l(e,m);return a.createElement(a.Fragment,null,a.createElement(p,o({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:n,alt:s="",shouldLoad:i}=e,c=l(e,f);return a.createElement("img",o({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,alt:s}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,s=l(e,h);const i=s.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,o({},s,t,{sizes:i,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:s}=e;return a.createElement("source",{key:t+"-"+s+"-"+r,type:s,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:i})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,r=l(e,w);return t?a.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const E=function(e){return a.createElement(a.Fragment,null,a.createElement(b,o({},e)),a.createElement("noscript",null,a.createElement(b,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),A=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?s().string.apply(s(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:A},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],T=new Set;let j,O;const R=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=l(e,L);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:x,className:E}=w,k=l(w,I),N=(0,a.useRef)(),S=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const A=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(v,y,b);return(0,a.useEffect)((()=>{j||(j=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(S);if(O&&T.has(S))return;let t,a;return j.then((e=>{let{renderImageToString:r,swapPlaceholderImage:l}=e;N.current&&(N.current.innerHTML=r(o({isLoading:!0,isLoaded:T.has(S),image:n},h)),T.has(S)||(t=requestAnimationFrame((()=>{N.current&&(a=l(N.current,S,T,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{T.has(S)&&O&&(N.current.innerHTML=O(o({isLoading:T.has(S),isLoaded:T.has(S),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,o({},k,{style:o({},x,s,{backgroundColor:d}),className:E+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},P=(0,a.memo)((function(e){return e.image?(0,a.createElement)(R,e):null}));P.propTypes=C,P.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:r,__imageData:n,__error:s}=t,i=l(t,z);return s&&console.warn(s),n?a.createElement(e,o({image:n},i)):(console.warn("Image not loaded",r),null)}}const U=M((function(e){let{as:t="div",className:r,class:n,style:s,image:i,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=l(e,k);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),f=o({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:A,layout:C,images:L,placeholder:I,backgroundColor:T}=i,j=c(w,A,C),{style:O,className:R}=j,P=l(j,N),z={fallback:void 0,sources:[]};return L.fallback&&(z.fallback=o({},L.fallback,{srcSet:L.fallback.srcSet?S(L.fallback.srcSet):void 0})),L.sources&&(z.sources=L.sources.map((e=>o({},e,{srcSet:S(e.srcSet)})))),a.createElement(t,o({},P,{style:o({},O,s,{backgroundColor:h}),className:R+(r?" "+r:"")}),a.createElement(g,{layout:C,width:w,height:A},a.createElement(x,o({},u(I,!1,C,w,A,T,y,b))),a.createElement(E,o({"data-gatsby-image-ssr":"",className:p},v,d("eager"===m,!1,z,m,f)))))})),q=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:A,width:q,height:q,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};U.displayName="StaticImage",U.propTypes=W;const Q=M(P);Q.displayName="StaticImage",Q.propTypes=W},6447:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a=r(7294),n=r(8032);var s=function(){return a.createElement("footer",{className:""},a.createElement("div",{className:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},a.createElement("hr",{className:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),a.createElement("div",{className:"grid v-screen place-items-center"},a.createElement("div",{className:"text-sm"},a.createElement("p",{className:"mb-5"},"Made using Gatsby "),a.createElement(n.S,{src:"../images/gatsby.PNG",placeholder:"blurred",layout:"fixed",height:20,className:"mx-auto rounded-full",alt:"developer",__imageData:r(7161)})))))},o=r(4160),l=r(3071);var i=e=>{let{siteTitle:t,navLocation:r}=e;return a.createElement("nav",{className:" border-gray-200 "},a.createElement("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},a.createElement("a",{href:"/"},a.createElement("h1",{className:"text-2xl font-semibold\t"},"Michael Leung")),a.createElement("button",{"data-collapse-toggle":"navbar-default",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":"false"},a.createElement("span",{className:"sr-only"},"Open main menu"),a.createElement("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},a.createElement("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"}))),a.createElement("div",{className:" w-full md:block md:w-auto",id:"navbar-default"},a.createElement("ul",{className:"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0"},a.createElement("li",null,a.createElement(o.rU,{to:"/about",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},"About")),a.createElement("li",null,a.createElement(o.rU,{to:"/projects",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},"Projects")),a.createElement("li",null,a.createElement(o.rU,{to:"/contact",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},"Contact")),a.createElement("li",{className:"darkCheckContainer"},a.createElement(l.L,null,(e=>{let{theme:t,toggleTheme:r}=e;return a.createElement("label",null,a.createElement("input",{id:"darkCheck",type:"checkbox",onChange:e=>r(e.target.checked?"dark":"light"),checked:"dark"===t}),a.createElement("label",{for:"darkCheck"}))})))))))};var c=e=>{let{children:t}=e;return a.createElement("main",{className:" font-sans leading-normal tracking-normal text-gray-800"},a.createElement(i,null),t,a.createElement(s,null))}},8416:function(e,t,r){var a=r(4062);e.exports=function(e,t,r){return(t=a(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var a=r(8698).default;e.exports=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var a=r(8698).default,n=r(5036);e.exports=function(e){var t=n(e,"string");return"symbol"===a(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7161:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEGElEQVR42n1VC1OUZRT+/kIzzTRNt9FJxbKStLRyrOmepZU1iIALyGVJ0NAIlNAm0oZRIHbZu7C4uCyKgHJHQWhxApSLDLYQCIpyiUGGBBkuuyxP57yfSzhpZ+bs9+275zzvc64rgWRuzs0P2JIuIWCZGsEvarFjWTp2LH+I0vnOl3QIWK5GWUar8HPf92eR+GP41l00lnUjNaIUIS8bYIytgvVIHcyHapH1479qPlQDS6Id6t3ldKlO2DVf6IX9jANN53vgcrplQD7km4NWarFzlQ63Ou/IN7vnsVg83x0N/fCnSAKeV8NviQp+S1WI/fgkJsdnIWUm1OBYaDEUKzXITvwN7XV9mJ6cxdjwPZgOVMNALIxx93V/FfQxF0RqmFFTZQ+u1t5E/Gc2xH5kJT8nJMUKDcK9DRSqDpcKOxaY9LQNC7aKFekIpMsCvTQIfkEL32d/RVLQOWE3Py8zPhJQiH3vWjA+OgUpmJzUeyowOjiBqXuzmCcwTXQF9r1nwa51GYh47fgDqlxrQtRbZhz41CaU2cl2JsRvsckMOQwWBr3eOkSGOSKnyjUmhL9q/I+GrTaIoniUv4d5G8W7ANTurRSAZsrn548fRQSxYH0YGKtyjXHBZrEdv0ucp598zqA6px3FxmbkpzUi5v1syqleOD4K9FEqsRNT3vxYkgBlSfjiFPypJZRr/ydkIrJYudkFoMeImSZ8eQqqqHK01txAfUkXQl4xPMCUL+A8HfYrQDfl+s+mQXReGaDnEH4v7sJuKpbEydy17jhiPsiWHQj4NjX2UO+YONuzwYxvXperyxpIzZ8cVgznjAuz0y44SVlGBsbx7cYsuSiaaLkoWTRqPk+nEkAGkgLPirNqWzu2PnFMDpfTQwS4Rfa+Y0HUm5kUqh59HSOYGJsSl0t8cDSkCL3twyhQNSIlvARRb2Rg/yYrhTOI85Y2mqQiGi3rQoVZQ1fr8cOWXKQoS0S4jeXXCZAY8gYJogn46slkXMy9JlhxH25fkgafZ1LFUmBJiyzD10+lyIUiQGZ9TndF/Jbom49tNEE8UVJtnoNm2C4AavP+EAYNpd04nVxPjEzCuEB1GaWmFlSeaCP2mYLZRds1FOmakJfSgO8/PInot0+gwnxV3jZt9j5sey4N9vyOhc1yu2sUod7yRPjTNmmu6hXnzPAwzS5LgfoyfMmPmcV9YhWjKwB5c/AK4qr+vD0fB7eeFjvvzsAESowtUHhpEb85F78ozqLPMYKW6huC+Xc0ALzy6go7MdI/LiovAB31/eRgE6HEbcoRmyWOijB5d1qEIbb0Kj1CqSf/uvk3Woit/1K1CPMg9S5X2bOlJM/LzLQTLpdb3MIsufMj18tbxNPU/M49GUldoPBKJ/bNAsg5M0d/A/Iq+wcfEksrser82AAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/f3ff7e809e96a48d641991a6d3a92709/ca121/gatsby.png","srcSet":"/static/f3ff7e809e96a48d641991a6d3a92709/ca121/gatsby.png 20w,\\n/static/f3ff7e809e96a48d641991a6d3a92709/f31ef/gatsby.png 40w","sizes":"20px"},"sources":[{"srcSet":"/static/f3ff7e809e96a48d641991a6d3a92709/264f2/gatsby.webp 20w,\\n/static/f3ff7e809e96a48d641991a6d3a92709/e73fe/gatsby.webp 40w","type":"image/webp","sizes":"20px"}]},"width":20,"height":20}')}}]);
//# sourceMappingURL=3d15e1eff8bd1c8081e1872b321536cef320afd0-883c44f2057a7898df80.js.map