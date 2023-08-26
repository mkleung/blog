"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),l=new RegExp(n.source+s.source,"gu"),o=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,s)=>{let n=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];n&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),n=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,n=!0):(n=r(c)===c&&s(c)!==c,l=i,i=s(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return E},P:function(){return x},S:function(){return H},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),s=(a(3204),a(5697)),n=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,s){return void 0===s&&(s={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function u(e,t,a,r,s,n,l,o){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],g=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(g,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:s,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=l(e,f);const o=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},n,t,{sizes:o,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},b.displayName="Picture",b.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,a=l(e,w);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};x.displayName="Placeholder",x.propTypes={fallback:s.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],N=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:n().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],I=new Set;let O,R;const _=function(e){let{as:t="div",image:s,style:n,backgroundColor:d,className:u,class:m,onStartLoad:g,onLoad:p,onError:h}=e,f=l(e,T);const{width:y,height:b,layout:v}=s,w=c(y,b,v),{style:x,className:E}=w,k=l(w,j),L=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);m&&(u=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(N);if(R&&I.has(N))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:I.has(N),image:s},f)),I.has(N)||(t=requestAnimationFrame((()=>{L.current&&(r=l(L.current,N,I,n,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{I.has(N)&&R&&(L.current.innerHTML=R(i({isLoading:I.has(N),isLoaded:I.has(N),image:s},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[s]),(0,r.createElement)(t,i({},k,{style:i({},x,n,{backgroundColor:d}),className:E+(u?" "+u:""),ref:L,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));q.propTypes=S,q.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:s,__error:n}=t,o=l(t,P);return n&&console.warn(n),s?r.createElement(e,i({image:s},o)):(console.warn("Image not loaded",a),null)}}const z=A((function(e){let{as:t="div",className:a,class:s,style:n,image:o,loading:m="lazy",imgClassName:g,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=l(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),h=i({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:w,height:C,layout:S,images:T,placeholder:j,backgroundColor:I}=o,O=c(w,C,S),{style:R,className:_}=O,q=l(O,L),P={fallback:void 0,sources:[]};return T.fallback&&(P.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?N(T.fallback.srcSet):void 0})),T.sources&&(P.sources=T.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,i({},q,{style:i({},R,n,{backgroundColor:f}),className:_+(a?" "+a:"")}),r.createElement(p,{layout:S,width:w,height:C},r.createElement(x,i({},u(j,!1,S,w,C,I,y,b))),r.createElement(E,i({"data-gatsby-image-ssr":"",className:g},v,d("eager"===m,!1,P,m,h)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:n().string.isRequired,alt:C,width:M,height:M,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=F;const H=A(q);H.displayName="StaticImage",H.propTypes=F},6558:function(e,t,a){a.r(t),a.d(t,{Head:function(){return n}});var r=a(7294),s=a(8032);t.default=()=>r.createElement("main",{className:"bg-white font-sans leading-normal tracking-normal text-gray-800"},r.createElement("div",{className:"container mx-auto"},r.createElement("header",{className:"px-5 py-4 flex justify-between items-center"},r.createElement("h1",{className:"text-2xl font-semibold"},"Michael Leung"),r.createElement("nav",{className:"flex"},r.createElement("a",{href:"/about",className:"block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white"},"About"),r.createElement("a",{href:"/portfolio",className:"block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white"},"Portfolio"),r.createElement("a",{href:"/contact",className:"block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white"},"Contact")))),r.createElement("div",{className:"container mx-auto py-8"},r.createElement("div",{className:"mx-auto max-w-sm "},r.createElement(s.S,{src:"../images/mike.jpg",layout:"fixed",height:100,className:"mx-auto rounded-full mb-5",alt:"developer",__imageData:a(4354)}),r.createElement("div",{className:"text-center"},r.createElement("a",{href:"https://mikeleung.ca",class:"text-teal-500 hover:text-teal-800 mx-2"},"Website"),r.createElement("a",{href:"https://twitter.com/",class:"text-teal-500 hover:text-teal-800 mx-2"},"Twitter"),r.createElement("a",{href:"https://github.com/mkleung",class:"text-teal-500 hover:text-teal-800 mx-2"},"Github")),r.createElement("p",{className:"py-4 text-gray-700"},"My name is Michael Leung, a full stack developer who loves to craft and maintain code that improves the life of people."))));const n=()=>r.createElement("title",null,"Home Page")},4354:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/blog/static/ac7aa498f0e77d6b4c04582be541dc11/ad30a/mike.jpg","srcSet":"/blog/static/ac7aa498f0e77d6b4c04582be541dc11/ad30a/mike.jpg 90w,\\n/blog/static/ac7aa498f0e77d6b4c04582be541dc11/93c06/mike.jpg 180w","sizes":"90px"},"sources":[{"srcSet":"/blog/static/ac7aa498f0e77d6b4c04582be541dc11/92a78/mike.webp 90w,\\n/blog/static/ac7aa498f0e77d6b4c04582be541dc11/a4004/mike.webp 180w","type":"image/webp","sizes":"90px"}]},"width":90,"height":100}')}}]);
//# sourceMappingURL=component---src-pages-index-js-ee6f3bf363483ad327c0.js.map