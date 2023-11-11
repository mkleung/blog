"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[723],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,i=l,l=!0,o++):l&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return k},P:function(){return w},S:function(){return F},_:function(){return i},a:function(){return l},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(g,l({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,y);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var E;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,v);return t?r.createElement(b,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,l({},e)),r.createElement("noscript",null,r.createElement(b,l({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],A=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],j=new Set;let R,O;const T=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:g,onLoad:p,onError:y}=e,h=i(e,S);const{width:f,height:b,layout:E}=n,v=c(f,b,E),{style:w,className:k}=v,x=i(v,I),N=(0,r.useRef)(),A=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,f,b);return(0,r.useEffect)((()=>{R||(R=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(A);if(O&&j.has(A))return;let t,r;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(l({isLoading:!0,isLoaded:j.has(A),image:n},h)),j.has(A)||(t=requestAnimationFrame((()=>{N.current&&(r=i(N.current,A,j,s,g,p,y))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(A)&&O&&(N.current.innerHTML=O(l({isLoading:j.has(A),isLoaded:j.has(A),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},x,{style:l({},w,s,{backgroundColor:d}),className:k+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},z=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));z.propTypes=C,z.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function U(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=i(t,P);return s&&console.warn(s),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const M=U((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:m="lazy",imgClassName:g,imgStyle:y,backgroundColor:h,objectFit:f,objectPosition:b}=e,E=i(e,x);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),y=l({objectFit:f,objectPosition:b,backgroundColor:h},y);const{width:v,height:L,layout:C,images:S,placeholder:I,backgroundColor:j}=o,R=c(v,L,C),{style:O,className:T}=R,z=i(R,N),P={fallback:void 0,sources:[]};return S.fallback&&(P.fallback=l({},S.fallback,{srcSet:S.fallback.srcSet?A(S.fallback.srcSet):void 0})),S.sources&&(P.sources=S.sources.map((e=>l({},e,{srcSet:A(e.srcSet)})))),r.createElement(t,l({},z,{style:l({},O,s,{backgroundColor:h}),className:T+(a?" "+a:"")}),r.createElement(p,{layout:C,width:v,height:L},r.createElement(w,l({},u(I,!1,C,v,L,j,f,b))),r.createElement(k,l({"data-gatsby-image-ssr":"",className:g},E,d("eager"===m,!1,P,m,y)))))})),q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),Q={src:s().string.isRequired,alt:L,width:q,height:q,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=Q;const F=U(z);F.displayName="StaticImage",F.propTypes=Q},8561:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(8032);var s=function(){return r.createElement("footer",{className:""},r.createElement("div",{className:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},r.createElement("hr",{className:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),r.createElement("div",{className:"grid v-screen place-items-center"},r.createElement("div",{className:"text-sm"},r.createElement("p",{className:"mb-5"},"Made using Gatsby and hosted on github"),r.createElement(n.S,{src:"../images/gatsby.PNG",placeholder:"blurred",layout:"fixed",height:20,className:"mx-auto rounded-full",alt:"developer",__imageData:a(7161)})))))},l=a(1883);function i(){const[e,t]=r.useState(function(){if("undefined"!=typeof window){return window.localStorage.getItem("theme")||"light"}}());return r.useEffect((()=>{"dark"===e?document.body.classList.add("dark"):document.body.classList.remove("dark"),window.localStorage.setItem("theme",e)}),[e]),r.createElement("div",{className:"global-toggle-switch"},r.createElement("span",{onClick:()=>t("dark"===e?"light":"dark")},"dark"===e?r.createElement("span",null,"☀️"):r.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",class:"fade-in text-xl",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"}))))}var o=e=>{let{siteTitle:t,navLocation:a}=e;const{0:n,1:s}=(0,r.useState)(!1);return r.createElement("div",{className:" max-w-screen-xl flex items-center justify-between  py-4  mx-auto p-4"},r.createElement(l.Link,{to:"/"},r.createElement("h1",{className:"text-2xl font-semibold\t"},"Michael Leung")),r.createElement("nav",null,r.createElement("section",{className:"MOBILE-MENU flex lg:hidden"},r.createElement("div",{className:"HAMBURGER-ICON space-y-2",onClick:()=>s((e=>!e))},r.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),r.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),r.createElement("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"})),r.createElement("div",{className:n?"showMenuNav":"hideMenuNav"},r.createElement("div",{className:"absolute top-0 right-0 px-4 py-4",onClick:()=>s(!1)},r.createElement("svg",{className:"h-8 w-8 text-gray-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))),r.createElement("ul",{className:" flex flex-col items-center justify-between min-h-[250px]"},r.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},r.createElement(l.Link,{to:"/about"},"About")),r.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},r.createElement(l.Link,{to:"/projects"},"Projects")),r.createElement("li",{className:"border-b border-gray-400 my-8 uppercase"},r.createElement(l.Link,{to:"/contact"},"Contact"))))),r.createElement("ul",{className:"navbar hidden font-medium space-x-8 lg:flex"},r.createElement("li",null,r.createElement(l.Link,{to:"/about",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},"About")),r.createElement("li",null,r.createElement(l.Link,{to:"/projects",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},"Projects")),r.createElement("li",null,r.createElement(l.Link,{to:"/contact",activeClassName:"active",className:"block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 "},"Contact")),r.createElement("li",null),r.createElement("li",{className:"darkCheckContainer"},r.createElement(i,null)))),r.createElement("style",null,"\n      .hideMenuNav {\n        display: none;\n      }\n      .showMenuNav {\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100vh;\n        top: 0;\n        left: 0;\n        background: white;\n        z-index: 10;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n      }\n    "))};var c=e=>{let{children:t}=e;return r.createElement("main",{className:" font-sans leading-normal tracking-normal text-gray-800"},r.createElement(o,null),t,r.createElement(s,null))}},7161:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEGElEQVR42n1VC1OUZRT+/kIzzTRNt9FJxbKStLRyrOmepZU1iIALyGVJ0NAIlNAm0oZRIHbZu7C4uCyKgHJHQWhxApSLDLYQCIpyiUGGBBkuuyxP57yfSzhpZ+bs9+275zzvc64rgWRuzs0P2JIuIWCZGsEvarFjWTp2LH+I0vnOl3QIWK5GWUar8HPf92eR+GP41l00lnUjNaIUIS8bYIytgvVIHcyHapH1479qPlQDS6Id6t3ldKlO2DVf6IX9jANN53vgcrplQD7km4NWarFzlQ63Ou/IN7vnsVg83x0N/fCnSAKeV8NviQp+S1WI/fgkJsdnIWUm1OBYaDEUKzXITvwN7XV9mJ6cxdjwPZgOVMNALIxx93V/FfQxF0RqmFFTZQ+u1t5E/Gc2xH5kJT8nJMUKDcK9DRSqDpcKOxaY9LQNC7aKFekIpMsCvTQIfkEL32d/RVLQOWE3Py8zPhJQiH3vWjA+OgUpmJzUeyowOjiBqXuzmCcwTXQF9r1nwa51GYh47fgDqlxrQtRbZhz41CaU2cl2JsRvsckMOQwWBr3eOkSGOSKnyjUmhL9q/I+GrTaIoniUv4d5G8W7ANTurRSAZsrn548fRQSxYH0YGKtyjXHBZrEdv0ucp598zqA6px3FxmbkpzUi5v1syqleOD4K9FEqsRNT3vxYkgBlSfjiFPypJZRr/ydkIrJYudkFoMeImSZ8eQqqqHK01txAfUkXQl4xPMCUL+A8HfYrQDfl+s+mQXReGaDnEH4v7sJuKpbEydy17jhiPsiWHQj4NjX2UO+YONuzwYxvXperyxpIzZ8cVgznjAuz0y44SVlGBsbx7cYsuSiaaLkoWTRqPk+nEkAGkgLPirNqWzu2PnFMDpfTQwS4Rfa+Y0HUm5kUqh59HSOYGJsSl0t8cDSkCL3twyhQNSIlvARRb2Rg/yYrhTOI85Y2mqQiGi3rQoVZQ1fr8cOWXKQoS0S4jeXXCZAY8gYJogn46slkXMy9JlhxH25fkgafZ1LFUmBJiyzD10+lyIUiQGZ9TndF/Jbom49tNEE8UVJtnoNm2C4AavP+EAYNpd04nVxPjEzCuEB1GaWmFlSeaCP2mYLZRds1FOmakJfSgO8/PInot0+gwnxV3jZt9j5sey4N9vyOhc1yu2sUod7yRPjTNmmu6hXnzPAwzS5LgfoyfMmPmcV9YhWjKwB5c/AK4qr+vD0fB7eeFjvvzsAESowtUHhpEb85F78ozqLPMYKW6huC+Xc0ALzy6go7MdI/LiovAB31/eRgE6HEbcoRmyWOijB5d1qEIbb0Kj1CqSf/uvk3Woit/1K1CPMg9S5X2bOlJM/LzLQTLpdb3MIsufMj18tbxNPU/M49GUldoPBKJ/bNAsg5M0d/A/Iq+wcfEksrser82AAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/f3ff7e809e96a48d641991a6d3a92709/ca121/gatsby.png","srcSet":"/static/f3ff7e809e96a48d641991a6d3a92709/ca121/gatsby.png 20w,\\n/static/f3ff7e809e96a48d641991a6d3a92709/f31ef/gatsby.png 40w","sizes":"20px"},"sources":[{"srcSet":"/static/f3ff7e809e96a48d641991a6d3a92709/264f2/gatsby.webp 20w,\\n/static/f3ff7e809e96a48d641991a6d3a92709/e73fe/gatsby.webp 40w","type":"image/webp","sizes":"20px"}]},"width":20,"height":20}')}}]);
//# sourceMappingURL=7677eddcc6764a4381937316860d0ec2b1404cee-a6f27e1f5885732c6686.js.map