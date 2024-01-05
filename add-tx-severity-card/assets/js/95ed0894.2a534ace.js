"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Introduction"},i="Integrate your dapp with the MetaMask wallet",s={unversionedId:"index",id:"index",title:"Introduction",description:"Integrate your dapp with MetaMask to interact with your dapp users' Ethereum accounts.",source:"@site/wallet/index.md",sourceDirName:".",slug:"/",permalink:"/add-tx-severity-card/wallet/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/index.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"How to",permalink:"/add-tx-severity-card/wallet/how-to"}},l={},p=[{value:"New to dapp development?",id:"new-to-dapp-development",level:2},{value:"Want to use advanced features?",id:"want-to-use-advanced-features",level:2},{value:"Questions?",id:"questions",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrate-your-dapp-with-the-metamask-wallet"},"Integrate your dapp with the MetaMask wallet"),(0,r.kt)("p",null,"Integrate your dapp with MetaMask to interact with your dapp users' Ethereum accounts.\nYou can enable users to connect to their MetaMask wallets from the following dapp platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/add-tx-severity-card/wallet/how-to/connect/set-up-sdk/javascript/"},"Web dapps")," on desktop and mobile browsers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/add-tx-severity-card/wallet/how-to/connect/set-up-sdk/javascript/"},"Desktop")," and\n",(0,r.kt)("a",{parentName:"li",href:"/add-tx-severity-card/wallet/how-to/connect/set-up-sdk/mobile/"},"mobile")," dapps"),(0,r.kt)("li",{parentName:"ul"},"Games built on platforms such as ",(0,r.kt)("a",{parentName:"li",href:"/add-tx-severity-card/wallet/how-to/connect/set-up-sdk/gaming/unity"},"Unity"))),(0,r.kt)("admonition",{title:"Integrate using MetaMask SDK",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/add-tx-severity-card/wallet/how-to/connect/set-up-sdk/"},"Set up MetaMask SDK")," to start integrating your dapp with MetaMask.\n",(0,r.kt)("a",{parentName:"p",href:"/add-tx-severity-card/wallet/concepts/sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\nconnection from your dapp to the MetaMask browser extension and MetaMask Mobile."),(0,r.kt)("p",{parentName:"admonition"},"With the SDK installed, your dapp can use the ",(0,r.kt)("a",{parentName:"p",href:"/add-tx-severity-card/wallet/concepts/apis"},"MetaMask Ethereum provider API"),"\nto request users' Ethereum accounts, read data from blockchains the user is connected to, suggest\nthat the user sign messages and transactions, and more.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This documentation assumes intermediate knowledge of JavaScript, HTML, and CSS."),(0,r.kt)("li",{parentName:"ul"},"To learn how to extend the functionality of MetaMask, visit the\n",(0,r.kt)("a",{parentName:"li",href:"../snaps"},"MetaMask Snaps developer documentation"),"."))),(0,r.kt)("h2",{id:"new-to-dapp-development"},"New to dapp development?"),(0,r.kt)("p",null,"If you're new to dapp development or want to refresh your knowledge, we recommend starting with the\nfollowing guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to/get-started-building"},"Get started building a dapp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to/connect"},"Connect to MetaMask"))),(0,r.kt)("p",null,"For an end-to-end example, you can also follow the\n",(0,r.kt)("a",{parentName:"p",href:"/add-tx-severity-card/wallet/tutorials/react-dapp-local-state"},"Create a simple React dapp")," tutorial."),(0,r.kt)("h2",{id:"want-to-use-advanced-features"},"Want to use advanced features?"),(0,r.kt)("p",null,"If you're a developer looking to optimize your dapp for MetaMask, you can\n",(0,r.kt)("a",{parentName:"p",href:"how-to/connect"},"connect to MetaMask")," from an existing dapp and implement MetaMask-specific\nfunctions, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to/sign-data"},"Sign data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to/display"},"Display tokens, contract methods, and icons in MetaMask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/add-tx-severity-card/wallet/how-to/interact-with-smart-contracts/"},"Interact with smart contracts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/add-tx-severity-card/wallet/how-to/access-provider"},"Access a user's MetaMask provider"))),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have questions about integrating your dapp with MetaMask, you can interact with the MetaMask\nteam and community on the MetaMask channels on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"Consensys Discord"),"."))}u.isMDXComponent=!0}}]);