(self.webpackChunkblog=self.webpackChunkblog||[]).push([[126],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),o=new RegExp(s.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];s&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,o=l,l=!0,i++):l&&o&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,o=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},6132:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0,t.default=void 0;var n=r(a(6115)),s=r(a(7867)),l=r(a(8416)),o=r(a(7294)),i=r(a(5697)),c=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,(0,l.default)((0,n.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return o.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(o.default.Component);c.propTypes={children:i.default.func.isRequired};var u=c;t.default=u},3071:function(e,t,a){"use strict";var r=a(4836)(a(6132));t.L=r.default},8032:function(e,t,a){"use strict";a.d(t,{L:function(){return g},M:function(){return E},P:function(){return x},S:function(){return Q},_:function(){return o},a:function(){return l},b:function(){return u},g:function(){return d},h:function(){return i}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,o,i){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,m);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:i}=e,c=o(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,h);const i=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,l({},s,t,{sizes:i,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:i})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(b,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(b,l({},e)),r.createElement("noscript",null,r.createElement(b,l({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),A=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:A},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],T=new Set;let j,O;const R=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=o(e,L);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:x,className:E}=w,k=o(w,I),N=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const A=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(S);if(O&&T.has(S))return;let t,r;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;N.current&&(N.current.innerHTML=a(l({isLoading:!0,isLoaded:T.has(S),image:n},h)),T.has(S)||(t=requestAnimationFrame((()=>{N.current&&(r=o(N.current,S,T,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{T.has(S)&&O&&(N.current.innerHTML=O(l({isLoading:T.has(S),isLoaded:T.has(S),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},k,{style:l({},x,s,{backgroundColor:u}),className:E+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));P.propTypes=C,P.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:n,__error:s}=t,i=o(t,z);return s&&console.warn(s),n?r.createElement(e,l({image:n},i)):(console.warn("Image not loaded",a),null)}}const U=M((function(e){let{as:t="div",className:a,class:n,style:s,image:i,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=o(e,k);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=l({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:A,layout:C,images:L,placeholder:I,backgroundColor:T}=i,j=c(w,A,C),{style:O,className:R}=j,P=o(j,N),z={fallback:void 0,sources:[]};return L.fallback&&(z.fallback=l({},L.fallback,{srcSet:L.fallback.srcSet?S(L.fallback.srcSet):void 0})),L.sources&&(z.sources=L.sources.map((e=>l({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,l({},P,{style:l({},O,s,{backgroundColor:h}),className:R+(a?" "+a:"")}),r.createElement(g,{layout:C,width:w,height:A},r.createElement(x,l({},d(I,!1,C,w,A,T,y,b))),r.createElement(E,l({"data-gatsby-image-ssr":"",className:p},v,u("eager"===m,!1,z,m,f)))))})),q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:A,width:q,height:q,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};U.displayName="StaticImage",U.propTypes=W;const Q=M(P);Q.displayName="StaticImage",Q.propTypes=W},6447:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7294),n=a(8032);var s=function(){return r.createElement("footer",{className:""},r.createElement("div",{className:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},r.createElement("hr",{className:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),r.createElement("div",{className:"grid v-screen place-items-center"},r.createElement("div",{className:"text-sm"},r.createElement("p",{className:"mb-5"},"Made using Gatsby "),r.createElement(n.S,{src:"../images/gatsby.PNG",placeholder:"blurred",layout:"fixed",height:20,className:"mx-auto rounded-full",alt:"developer",__imageData:a(7161)})))))},l=a(4160),o=a(3071);var i=e=>{let{siteTitle:t,navLocation:a}=e;return r.createElement("nav",{className:" border-gray-200 "},r.createElement("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},r.createElement("a",{href:"/"},r.createElement("h1",{className:"text-2xl font-semibold\t"},"Michael Leung")),r.createElement("button",{"data-collapse-toggle":"navbar-default",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":"false"},r.createElement("span",{className:"sr-only"},"Open main menu"),r.createElement("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},r.createElement("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"}))),r.createElement("div",{className:" w-full md:block md:w-auto",id:"navbar-default"},r.createElement("ul",{className:"navbar font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0"},r.createElement("li",null,r.createElement(l.rU,{to:"/about",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},"About")),r.createElement("li",null,r.createElement(l.rU,{to:"/projects",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900 md:p-0 hover:text-teal-500"},"Projects")),r.createElement("li",null,r.createElement(l.rU,{to:"/contact",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900 md:p-0 hover:text-teal-500"},"Contact")),r.createElement("li",{className:"darkCheckContainer"},r.createElement(o.L,null,(e=>{let{theme:t,toggleTheme:a}=e;return r.createElement("label",null,r.createElement("input",{id:"darkCheck",type:"checkbox",onChange:e=>a(e.target.checked?"dark":"light"),checked:"dark"===t}),r.createElement("label",{for:"darkCheck"}))})))))))};var c=e=>{let{children:t}=e;return r.createElement("main",{className:" font-sans leading-normal tracking-normal text-gray-800"},r.createElement(i,null),t,r.createElement(s,null))}},8416:function(e,t,a){var r=a(4062);e.exports=function(e,t,a){return(t=r(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,a){var r=a(8698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,a){var r=a(8698).default,n=a(5036);e.exports=function(e){var t=n(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(a){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7161:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEGElEQVR42n1VC1OUZRT+/kIzzTRNt9FJxbKStLRyrOmepZU1iIALyGVJ0NAIlNAm0oZRIHbZu7C4uCyKgHJHQWhxApSLDLYQCIpyiUGGBBkuuyxP57yfSzhpZ+bs9+275zzvc64rgWRuzs0P2JIuIWCZGsEvarFjWTp2LH+I0vnOl3QIWK5GWUar8HPf92eR+GP41l00lnUjNaIUIS8bYIytgvVIHcyHapH1479qPlQDS6Id6t3ldKlO2DVf6IX9jANN53vgcrplQD7km4NWarFzlQ63Ou/IN7vnsVg83x0N/fCnSAKeV8NviQp+S1WI/fgkJsdnIWUm1OBYaDEUKzXITvwN7XV9mJ6cxdjwPZgOVMNALIxx93V/FfQxF0RqmFFTZQ+u1t5E/Gc2xH5kJT8nJMUKDcK9DRSqDpcKOxaY9LQNC7aKFekIpMsCvTQIfkEL32d/RVLQOWE3Py8zPhJQiH3vWjA+OgUpmJzUeyowOjiBqXuzmCcwTXQF9r1nwa51GYh47fgDqlxrQtRbZhz41CaU2cl2JsRvsckMOQwWBr3eOkSGOSKnyjUmhL9q/I+GrTaIoniUv4d5G8W7ANTurRSAZsrn548fRQSxYH0YGKtyjXHBZrEdv0ucp598zqA6px3FxmbkpzUi5v1syqleOD4K9FEqsRNT3vxYkgBlSfjiFPypJZRr/ydkIrJYudkFoMeImSZ8eQqqqHK01txAfUkXQl4xPMCUL+A8HfYrQDfl+s+mQXReGaDnEH4v7sJuKpbEydy17jhiPsiWHQj4NjX2UO+YONuzwYxvXperyxpIzZ8cVgznjAuz0y44SVlGBsbx7cYsuSiaaLkoWTRqPk+nEkAGkgLPirNqWzu2PnFMDpfTQwS4Rfa+Y0HUm5kUqh59HSOYGJsSl0t8cDSkCL3twyhQNSIlvARRb2Rg/yYrhTOI85Y2mqQiGi3rQoVZQ1fr8cOWXKQoS0S4jeXXCZAY8gYJogn46slkXMy9JlhxH25fkgafZ1LFUmBJiyzD10+lyIUiQGZ9TndF/Jbom49tNEE8UVJtnoNm2C4AavP+EAYNpd04nVxPjEzCuEB1GaWmFlSeaCP2mYLZRds1FOmakJfSgO8/PInot0+gwnxV3jZt9j5sey4N9vyOhc1yu2sUod7yRPjTNmmu6hXnzPAwzS5LgfoyfMmPmcV9YhWjKwB5c/AK4qr+vD0fB7eeFjvvzsAESowtUHhpEb85F78ozqLPMYKW6huC+Xc0ALzy6go7MdI/LiovAB31/eRgE6HEbcoRmyWOijB5d1qEIbb0Kj1CqSf/uvk3Woit/1K1CPMg9S5X2bOlJM/LzLQTLpdb3MIsufMj18tbxNPU/M49GUldoPBKJ/bNAsg5M0d/A/Iq+wcfEksrser82AAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/f3ff7e809e96a48d641991a6d3a92709/ca121/gatsby.png","srcSet":"/static/f3ff7e809e96a48d641991a6d3a92709/ca121/gatsby.png 20w,\\n/static/f3ff7e809e96a48d641991a6d3a92709/f31ef/gatsby.png 40w","sizes":"20px"},"sources":[{"srcSet":"/static/f3ff7e809e96a48d641991a6d3a92709/264f2/gatsby.webp 20w,\\n/static/f3ff7e809e96a48d641991a6d3a92709/e73fe/gatsby.webp 40w","type":"image/webp","sizes":"20px"}]},"width":20,"height":20}')}}]);
//# sourceMappingURL=3d15e1eff8bd1c8081e1872b321536cef320afd0-f733bd3ce977c07969a3.js.map