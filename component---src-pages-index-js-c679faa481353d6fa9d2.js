"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return x},P:function(){return w},S:function(){return q},_:function(){return l},a:function(){return i},b:function(){return A},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function A(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const A=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return A}const u=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=l(e,u);return r.createElement(r.Fragment,null,r.createElement(g,i({},a)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,p);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=l(e,E);return t?r.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const v=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],N=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},B={image:s().object.isRequired,alt:C},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],S=new Set;let T,Q;const I=function(e){let{as:t="div",image:n,style:s,backgroundColor:A,className:d,class:u,onStartLoad:g,onLoad:m,onError:p}=e,h=l(e,j);const{width:f,height:y,layout:b}=n,E=c(f,y,b),{style:w,className:x}=E,v=l(E,L),k=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,y);return(0,r.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return Q=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(N);if(Q&&S.has(N))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:S.has(N),image:n},h)),S.has(N)||(t=requestAnimationFrame((()=>{k.current&&(r=l(k.current,N,S,s,g,m,p))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{S.has(N)&&Q&&(k.current.innerHTML=Q(i({isLoading:S.has(N),isLoaded:S.has(N),image:n},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},v,{style:i({},w,s,{backgroundColor:A}),className:x+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));R.propTypes=B,R.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,M);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const D=P((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:u="lazy",imgClassName:g,imgStyle:p,backgroundColor:h,objectFit:f,objectPosition:y}=e,b=l(e,v);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=i({objectFit:f,objectPosition:y,backgroundColor:h},p);const{width:E,height:C,layout:B,images:j,placeholder:L,backgroundColor:S}=o,T=c(E,C,B),{style:Q,className:I}=T,R=l(T,k),M={fallback:void 0,sources:[]};return j.fallback&&(M.fallback=i({},j.fallback,{srcSet:j.fallback.srcSet?N(j.fallback.srcSet):void 0})),j.sources&&(M.sources=j.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,i({},R,{style:i({},Q,s,{backgroundColor:h}),className:I+(a?" "+a:"")}),r.createElement(m,{layout:B,width:E,height:C},r.createElement(w,i({},d(L,!1,B,E,C,S,f,y))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:g},b,A("eager"===u,!1,M,u,p)))))})),O=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},Y=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:C,width:O,height:O,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!Y.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};D.displayName="StaticImage",D.propTypes=W;const q=P(R);q.displayName="StaticImage",q.propTypes=W},8049:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i},default:function(){return s}});var r=a(7294),n=a(8032);a(4160),a.p;var s=()=>r.createElement("main",{className:"bg-white font-sans leading-normal tracking-normal text-gray-800"},r.createElement("div",{className:"container mx-auto"},r.createElement("header",{className:"px-5 py-4 flex justify-between items-center"},r.createElement("h1",{className:"text-2xl font-semibold"},"Michael Leung"),r.createElement("nav",{className:"flex"},r.createElement("a",{href:"/about",className:"block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white"},"About"),r.createElement("a",{href:"/portfolio",className:"block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white"},"Portfolio"),r.createElement("a",{href:"/contact",className:"block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white"},"Contact")))),r.createElement("div",{className:"container mx-auto py-8"},r.createElement("div",{className:"mx-auto max-w-sm "},r.createElement(n.S,{src:"../images/mike.JPG",placeholder:"blurred",layout:"fixed",height:100,className:"mx-auto rounded-full mb-5",alt:"developer",__imageData:a(5052)}),r.createElement("div",{className:"text-center"},r.createElement("a",{href:"https://mikeleung.ca",class:"text-teal-500 hover:text-teal-800 mx-2"},"Website"),r.createElement("a",{href:"https://twitter.com/",class:"text-teal-500 hover:text-teal-800 mx-2"},"Twitter"),r.createElement("a",{href:"https://github.com/mkleung",class:"text-teal-500 hover:text-teal-800 mx-2"},"Github")),r.createElement("p",{className:"py-4 text-gray-700"},"My name is Michael Leung, a full stack developer who loves to craft and maintain code that improves the life of people."))));const i=()=>r.createElement("title",null,"Home Page")},5052:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAUBAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwH/2gAMAwEAAhADEAAAAacihzh12CEnaZSaLw//xAAbEAACAgMBAAAAAAAAAAAAAAACAwESAAQTJP/aAAgBAQABBQJ8nhA5ErO63id+ZTihqt216GsoA7jFx//EABoRAAICAwAAAAAAAAAAAAAAAAABAhARITH/2gAIAQMBAT8BS1UOMyf/xAAZEQEAAgMAAAAAAAAAAAAAAAABACECEBH/2gAIAQIBAT8BW9ZFk4T/xAAgEAACAgEDBQAAAAAAAAAAAAAAAQIRIRJRYQMTMkFx/9oACAEBAAY/AlGDq/Z3I9SyMtzyfBmT5yRWxorCdDkacP6f/8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFRQf/aAAgBAQABPyHm50vwZwyPbiJJNy7AL1Thr0nTqO4jfBzMAnufV3GK6XxP0b//2gAMAwEAAgADAAAAELQ4v//EABgRAQEBAQEAAAAAAAAAAAAAAAEAETFx/9oACAEDAQE/EDeJMck+ULL/xAAYEQEBAQEBAAAAAAAAAAAAAAABABExUf/aAAgBAgEBPxBDqHSLH2duX//EABwQAQADAAMBAQAAAAAAAAAAAAEAESExQWFRgf/aAAgBAQABPxBCKtHaFcetwge7CW7exxIjQDT59IT3gADBZVbpe3AMLCw0N0dHFZmwWqojyVUkVNFaPQWTep4evX5C9k4hTznif//Z"},"images":{"fallback":{"src":"/static/ac7aa498f0e77d6b4c04582be541dc11/ad30a/mike.jpg","srcSet":"/static/ac7aa498f0e77d6b4c04582be541dc11/ad30a/mike.jpg 90w,\\n/static/ac7aa498f0e77d6b4c04582be541dc11/93c06/mike.jpg 180w","sizes":"90px"},"sources":[{"srcSet":"/static/ac7aa498f0e77d6b4c04582be541dc11/92a78/mike.webp 90w,\\n/static/ac7aa498f0e77d6b4c04582be541dc11/a4004/mike.webp 180w","type":"image/webp","sizes":"90px"}]},"width":90,"height":100}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c679faa481353d6fa9d2.js.map