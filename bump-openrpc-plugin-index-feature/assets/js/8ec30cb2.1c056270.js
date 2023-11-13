"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5709],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={description:"Learn about the Snaps execution environment.",sidebar_position:4},o="Snaps execution environment",s={unversionedId:"concepts/execution-environment",id:"concepts/execution-environment",title:"Snaps execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/concepts/execution-environment.md",sourceDirName:"concepts",slug:"/concepts/execution-environment",permalink:"/bump-openrpc-plugin-index-feature/snaps/concepts/execution-environment",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/execution-environment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about the Snaps execution environment.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Snaps user interface",permalink:"/bump-openrpc-plugin-index-feature/snaps/concepts/user-interface"},next:{title:"Snaps design guidelines",permalink:"/bump-openrpc-plugin-index-feature/snaps/concepts/design-guidelines"}},l={},p=[{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-execution-environment"},"Snaps execution environment"),(0,a.kt)("p",null,"Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,a.kt)("a",{parentName:"p",href:"#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),".\nThere's no DOM, no Node.js built-ins, and no platform-specific APIs other than MetaMask's ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet"),"\nglobal object.\nAlmost all standard JavaScript globals contained in\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"this list")," that\nare also in Node.js are available as normal.\nThis includes globals such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Math"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Reflect"),"."),(0,a.kt)("p",null,"The following globals are also available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"console")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"crypto")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fetch")," (with the\n",(0,a.kt)("a",{parentName:"li",href:"/bump-openrpc-plugin-index-feature/snaps/reference/permissions#endowmentnetwork-access"},(0,a.kt)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setTimeout")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"clearTimeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setInterval")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"clearInterval")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SubtleCrypto")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WebAssembly")," (with the\n",(0,a.kt)("a",{parentName:"li",href:"/bump-openrpc-plugin-index-feature/snaps/reference/permissions#endowmentwebassembly"},(0,a.kt)("inlineCode",{parentName:"a"},"endowment:webassembly"))," permission)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TextEncoder")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"TextDecoder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"atob")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"btoa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URL"))),(0,a.kt)("p",null,"The execution environment is instrumented in this way to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prevent Snaps from influencing any other running code, including MetaMask itself.\nThat is, prevent all Snaps from polluting the global environment and malicious Snaps from\nstealing the user's stuff."),(0,a.kt)("li",{parentName:"ol"},"Prevent Snaps from accessing sensitive JavaScript APIs (such as ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch"),") without permission."),(0,a.kt)("li",{parentName:"ol"},'Ensure that the execution environment is "fully virtualizable," that is, platform-independent.')),(0,a.kt)("p",null,"This allows you to safely execute Snaps anywhere, without the Snap needing to worry about where and\nhow it's executed."),(0,a.kt)("h2",{id:"secure-ecmascript-ses"},"Secure ECMAScript (SES)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/endojs/endo/tree/master/packages/ses"},"Secure ECMAScript (SES)"),", is a subset of\nthe JavaScript language designed to enable mutually suspicious programs to execute in the same\nJavaScript process (or more accurately, the same ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#realm"},"realm"),").\nYou can think of it as a more severe form of\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"strict mode"),"."))}m.isMDXComponent=!0}}]);