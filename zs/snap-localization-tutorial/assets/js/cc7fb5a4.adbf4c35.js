"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3520],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(k,s(s({ref:t},c),{},{components:a})):r.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_label:"Other web frameworks",sidebar_position:3,description:"Set up the SDK in other web frameworks.",tags:["JavaScript SDK"]},s="Use MetaMask SDK with other web frameworks",i={unversionedId:"how-to/connect/set-up-sdk/javascript/other-web-frameworks",id:"how-to/connect/set-up-sdk/javascript/other-web-frameworks",title:"Use MetaMask SDK with other web frameworks",description:"Set up the SDK in other web frameworks.",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/other-web-frameworks",permalink:"/zs/snap-localization-tutorial/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks.md",tags:[{label:"JavaScript SDK",permalink:"/zs/snap-localization-tutorial/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Other web frameworks",sidebar_position:3,description:"Set up the SDK in other web frameworks.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Pure JavaScript",permalink:"/zs/snap-localization-tutorial/wallet/how-to/connect/set-up-sdk/javascript/pure-js"},next:{title:"React Native and Expo",permalink:"/zs/snap-localization-tutorial/wallet/how-to/connect/set-up-sdk/javascript/react-native"}},l={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-other-web-frameworks"},"Use MetaMask SDK with other web frameworks"),(0,n.kt)("p",null,"Import ",(0,n.kt)("a",{parentName:"p",href:"/zs/snap-localization-tutorial/wallet/concepts/sdk/"},"MetaMask SDK")," into your web dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for other web frameworks has the ",(0,n.kt)("a",{parentName:"p",href:"/zs/snap-localization-tutorial/wallet/#prerequisites"},"same prerequisites")," as for\nstandard JavaScript."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,n.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n")),(0,n.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,n.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MetaMaskSDK } from '@metamask/sdk';\n")),(0,n.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,n.kt)("p",null,"Instantiate the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/zs/snap-localization-tutorial/wallet/reference/sdk-js-options"},"options"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'const MMSDK = new MetaMaskSDK(\n  dappMetadata: {\n    name: "Example JavaScript Dapp",\n    url: window.location.href,\n  }\n  // Other options\n);\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n')),(0,n.kt)("admonition",{title:"Important SDK options",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/zs/snap-localization-tutorial/wallet/reference/sdk-js-options#dappmetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/zs/snap-localization-tutorial/wallet/reference/sdk-js-options#modals"},(0,n.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,n.kt)("a",{parentName:"li",href:"/zs/snap-localization-tutorial/wallet/how-to/display/custom-modals"},"customize the logic and UI of\nthe displayed modals"),"."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/zs/snap-localization-tutorial/wallet/reference/sdk-js-options#infuraapikey"},(0,n.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,n.kt)("a",{parentName:"li",href:"/zs/snap-localization-tutorial/wallet/how-to/use-3rd-party-integrations/js-infura-api"},"make read-only RPC requests")," from your dapp."))),(0,n.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,n.kt)("p",null,"Use the SDK by calling any ",(0,n.kt)("a",{parentName:"p",href:"/zs/snap-localization-tutorial/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/zs/snap-localization-tutorial/wallet/reference/provider-api#ethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.request({ method: 'eth_requestAccounts', params: [] });\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"You can copy the full JavaScript example to get started:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"import { MetaMaskSDK } from '@metamask/sdk';\n\nconst MMSDK = new MetaMaskSDK(\n  dappMetadata: {\n    name: \"Example JavaScript Dapp\",\n    url: window.location.href,\n  }\n  // Other options\n);\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n\nethereum.request({ method: 'eth_requestAccounts', params: [] });\n")),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for more information."))}m.isMDXComponent=!0}}]);