"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,c(c({ref:t},l),{},{components:n})):a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2,sidebar_label:"Events",tags:["Keyring API"]},c="Account Management API events",s={unversionedId:"reference/keyring-api/account-management/events",id:"reference/keyring-api/account-management/events",title:"Account Management API events",description:"Account management Snaps can notify MetaMask of the",source:"@site/snaps/reference/keyring-api/account-management/events.md",sourceDirName:"reference/keyring-api/account-management",slug:"/reference/keyring-api/account-management/events",permalink:"/snaps-more-custom-ui/snaps/reference/keyring-api/account-management/events",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/account-management/events.md",tags:[{label:"Keyring API",permalink:"/snaps-more-custom-ui/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Events",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Objects",permalink:"/snaps-more-custom-ui/snaps/reference/keyring-api/account-management/objects"},next:{title:"Chain Methods API",permalink:"/snaps-more-custom-ui/snaps/reference/keyring-api/chain-methods"}},i={},p=[{value:"<code>AccountCreated</code>",id:"accountcreated",level:3},{value:"Example",id:"example",level:4},{value:"<code>AccountUpdated</code>",id:"accountupdated",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>AccountDeleted</code>",id:"accountdeleted",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>RequestApproved</code>",id:"requestapproved",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>RequestRejected</code>",id:"requestrejected",level:3},{value:"Example",id:"example-4",level:4}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-management-api-events"},"Account Management API events"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/"},"Account management Snaps")," can notify MetaMask of the\nfollowing ",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/reference/keyring-api/account-management/"},"Account Management API")," events."),(0,r.kt)("h3",{id:"accountcreated"},(0,r.kt)("inlineCode",{parentName:"h3"},"AccountCreated")),(0,r.kt)("p",null,"An account is created.\nMetaMask returns an error if the account already exists or the account object is invalid."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n    emitSnapKeyringEvent(snap, KeyringEvent.AccountCreated, { account });\n    // Update your Snap's state...\n} catch (error) {\n    // Handle the error...\n}\n")),(0,r.kt)("h3",{id:"accountupdated"},(0,r.kt)("inlineCode",{parentName:"h3"},"AccountUpdated")),(0,r.kt)("p",null,"An account is updated.\nMetaMask returns an error if one of the following is true:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The account does not exist."),(0,r.kt)("li",{parentName:"ul"},"The account object is invalid."),(0,r.kt)("li",{parentName:"ul"},"The account address is updated.")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n    emitSnapKeyringEvent(snap, KeyringEvent.AccountUpdated, { account });\n    // Update your Snap's state...\n} catch (error) {\n    // Handle the error...\n}\n")),(0,r.kt)("h3",{id:"accountdeleted"},(0,r.kt)("inlineCode",{parentName:"h3"},"AccountDeleted")),(0,r.kt)("p",null,"An account is deleted.\nThe delete event is idempotent, so it is safe to emit even if the account does not exist."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n    emitSnapKeyringEvent(snap, KeyringEvent.AccountDeleted, {\n        id: account.id,\n    });\n    // Update your Snap's state...\n} catch (error) {\n    // Handle the error...\n}\n")),(0,r.kt)("h3",{id:"requestapproved"},(0,r.kt)("inlineCode",{parentName:"h3"},"RequestApproved")),(0,r.kt)("p",null,"A request is approved.\nMetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that\n",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow"},"handle requests asynchronously"),"."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n    emitSnapKeyringEvent(snap, KeyringEvent.RequestApproved, {\n        id: request.id,\n        result,\n    });\n    // Update your Snap's state...\n} catch (error) {\n    // Handle the error...\n}\n")),(0,r.kt)("h3",{id:"requestrejected"},(0,r.kt)("inlineCode",{parentName:"h3"},"RequestRejected")),(0,r.kt)("p",null,"A request is rejected.\nMetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that\n",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow"},"handle requests asynchronously"),"."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n    emitSnapKeyringEvent(snap, KeyringEvent.RequestRejected, {\n        id: request.id,\n    });\n    // Update your Snap's state...\n} catch (error) {\n    // Handle the error...\n}\n")))}d.isMDXComponent=!0}}]);