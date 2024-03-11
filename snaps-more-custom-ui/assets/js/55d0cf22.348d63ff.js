"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(65488),o=n(85162);const u={description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},i="Create an account management Snap",c={unversionedId:"features/custom-evm-accounts/create-account-snap",id:"features/custom-evm-accounts/create-account-snap",title:"Create an account management Snap",description:"Get started by creating an account management Snap.",source:"@site/snaps/features/custom-evm-accounts/create-account-snap.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/create-account-snap",permalink:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/create-account-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/create-account-snap.md",tags:[{label:"Keyring API",permalink:"/snaps-more-custom-ui/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Custom EVM accounts",permalink:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/"},next:{title:"Create a companion dapp",permalink:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/create-companion-dapp"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Add permissions",id:"2-add-permissions",level:3},{value:"3. Implement the Account Management API",id:"3-implement-the-account-management-api",level:3},{value:"4. Handle requests submitted by MetaMask",id:"4-handle-requests-submitted-by-metamask",level:3},{value:"5. Notify MetaMask about events",id:"5-notify-metamask-about-events",level:3},{value:"6. Expose the Account Management API",id:"6-expose-the-account-management-api",level:3},{value:"7. Create a companion dapp",id:"7-create-a-companion-dapp",level:3},{value:"Example",id:"example",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-account-management-snap"},"Create an account management Snap"),(0,r.kt)("p",null,"Create an account management Snap to connect to custom EVM accounts."),(0,r.kt)("admonition",{title:"see also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/security"},"Account management Snap security guidelines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/snaps-more-custom-ui/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set up a Snap.\nSee the ",(0,r.kt)("a",{parentName:"li",href:"/snaps-more-custom-ui/snaps/get-started/quickstart"},"Snaps quickstart")," and ",(0,r.kt)("a",{parentName:"li",href:"/snaps-more-custom-ui/snaps/how-to/publish-a-snap"},"how to develop a Snap"),"."),(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/security"},"account management Snap security guidelines"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/keyring-api"))," module in your\nproject directory using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.kt)("h3",{id:"2-add-permissions"},"2. Add permissions"),(0,r.kt)("p",null,"Specify the following ",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/how-to/request-permissions"},"permissions")," in your Snap manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": [\n      "https://<dapp domain>"\n    ]\n  },\n  "endowment:rpc": {\n    "dapps": true\n  },\n  "snap_manageAccounts": {},\n  "snap_manageState": {}\n},\n')),(0,r.kt)("p",null,"Add a list of dapp URLs allowed to call Keyring API methods on your Snap using the\n",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/reference/permissions#endowmentkeyring"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:keyring"))," permission."),(0,r.kt)("h3",{id:"3-implement-the-account-management-api"},"3. Implement the Account Management API"),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/reference/keyring-api/account-management/"},"Account Management API")," in your Snap.\nMake sure to ",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/security#limit-the-methods-exposed-to-dapps"},"limit the methods exposed to dapps"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class MySnapKeyring implements Keyring {\n  // Implement the required methods here...\n}\n")),(0,r.kt)("h3",{id:"4-handle-requests-submitted-by-metamask"},"4. Handle requests submitted by MetaMask"),(0,r.kt)("p",null,"MetaMask submits EVM requests from dapps using the\n",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/reference/keyring-api/account-management/#keyring_submitrequest"},(0,r.kt)("inlineCode",{parentName:"a"},"keyring_submitRequest")),"\nmethod of the Keyring API.\nSee the EVM methods for ",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/reference/keyring-api/chain-methods#eoa-methods"},"externally owned accounts"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/reference/keyring-api/chain-methods#erc-4337-methods"},"ERC-4337 accounts"),"."),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign")," request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "d6e23af6-4bea-48dd-aeb0-7d3c30ea67f9",\n  "scope": "",\n  "account": "69438371-bef3-4957-9f91-c3f22c1d75f3",\n  "request": {\n    "method": "personal_sign",\n    "params": [\n      "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n      "0x5874174dcf1ab6F7Efd8496f4f09404CD1c5bA84"\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"The request includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - The unique identifier for the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope")," - The CAIP-2 chain ID of the selected chain.\nCurrently, this property is always an empty string.\nYour Snap should use the chain ID present in the request object instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account")," - The ID of the account that should handle the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request")," - The request object.")),(0,r.kt)("p",null,"Your Snap must respond with either a synchronous or asynchronous result:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Synchronous",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"return { pending: false, result };\n"))),(0,r.kt)(o.Z,{value:"Asynchronous",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"return { pending: true, redirect: { message, url } };\n")),(0,r.kt)("p",null,"The redirect message and URL are displayed to the user to help them continue the transaction flow."))),(0,r.kt)("h3",{id:"5-notify-metamask-about-events"},"5. Notify MetaMask about events"),(0,r.kt)("p",null,"Notify MetaMask when ",(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/reference/keyring-api/account-management/events"},"Account Management API events"),"\ntake place, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"emitSnapKeyringEvent()")," helper function."),(0,r.kt)("p",null,"For example, when an account is created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n    emitSnapKeyringEvent(snap, KeyringEvent.AccountCreated, { account });\n    // Update your Snap's state...\n} catch (error) {\n    // Handle the error...\n}\n")),(0,r.kt)("p",null,"MetaMask returns an error if the account already exists or the account object is invalid."),(0,r.kt)("h3",{id:"6-expose-the-account-management-api"},"6. Expose the Account Management API"),(0,r.kt)("p",null,"Create an ",(0,r.kt)("inlineCode",{parentName:"p"},"onKeyringRequest")," entry point handler method to expose the Account Management API methods\nto MetaMask and your dapp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  // Your custom logic here...\n  return handleKeyringRequest(keyring, request);\n};\n")),(0,r.kt)("h3",{id:"7-create-a-companion-dapp"},"7. Create a companion dapp"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/snaps-more-custom-ui/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create a companion dapp")," to provide a user interface for your account\nmanagement Snap, enabling them to create and interact with custom EVM accounts."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/snap"},"example account management Snap source code"),"\nfor more information."))}f.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),u=n(70989),i=n(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function l(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:l}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=l[n].value;a!==u&&(m(t),i(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:d},o,{className:(0,s.Z)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":u===t})}),n??t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,u.Y)(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",c.tabList)},r.createElement(l,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>m});var a=n(67294),r=n(16550),s=n(91980),o=n(67392),u=n(50012);function i(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??i(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function l(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),u=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(o.location.search);t.set(u,e),o.replace({...o.location,search:t.toString()})}),[u,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=c(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!l({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[m,d]=p({queryString:n,groupId:r}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=m??f;return l({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!l({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,s]),tabValues:s}}}}]);