"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1660],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=p(n),u=r,d=y["".concat(s,".").concat(u)]||y[u]||m[u]||o;return n?a.createElement(d,c(c({ref:t},l),{},{components:n})):a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={sidebar_position:2,description:"Learn about the contract factory in Unity.",tags:["Unity SDK"]},c="Contract factory",i={unversionedId:"how-to/use-sdk/gaming/unity/smart-contracts/contract-factory",id:"how-to/use-sdk/gaming/unity/smart-contracts/contract-factory",title:"Contract factory",description:"Learn about the contract factory in Unity.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory",permalink:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory.md",tags:[{label:"Unity SDK",permalink:"/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn about the contract factory in Unity.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Contract interface",permalink:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"},next:{title:"Contract proxy class",permalink:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class"}},s={},p=[{value:"Contract factory types",id:"contract-factory-types",level:2},{value:"Impromptu contract factory",id:"impromptu-contract-factory",level:3},{value:"Backed type contract factory",id:"backed-type-contract-factory",level:3},{value:"Set the contract factory",id:"set-the-contract-factory",level:2}],l={toc:p},y="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"contract-factory"},"Contract factory"),(0,r.yg)("p",null,"When ",(0,r.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/"},"interacting with smart contracts in Unity"),", the contract factory is responsible for\ncreating the ",(0,r.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class"},"contract proxy class")," with the given\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"},"contract interface")," type ",(0,r.yg)("inlineCode",{parentName:"p"},"T"),"."),(0,r.yg)("h2",{id:"contract-factory-types"},"Contract factory types"),(0,r.yg)("h3",{id:"impromptu-contract-factory"},"Impromptu contract factory"),(0,r.yg)("p",null,"The impromptu contract factory uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"Impromptu")," library to return a new instance of ",(0,r.yg)("inlineCode",{parentName:"p"},"Contract"),"\nthat behaves likes the given interface type ",(0,r.yg)("inlineCode",{parentName:"p"},"T"),".\nSince the contract is a dynamic object, all method invocations to the returned object of type ",(0,r.yg)("inlineCode",{parentName:"p"},"T"),"\nare automatically routed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Contract")," class."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The impromptu contract factory is only supported on Mono or in a runtime that has the CLR.\nThe IL2CPP runtime does not support this factory.\nUse the backed type contract factory if you need a more concrete type.")),(0,r.yg)("h3",{id:"backed-type-contract-factory"},"Backed type contract factory"),(0,r.yg)("p",null,"The backed type contract factory uses a concrete ",(0,r.yg)("inlineCode",{parentName:"p"},"class")," type that inherits the ",(0,r.yg)("inlineCode",{parentName:"p"},"Contract")," class and\nthe given interface type ",(0,r.yg)("inlineCode",{parentName:"p"},"T"),".\nTo use this factory, the given interface must declare the class attribute ",(0,r.yg)("inlineCode",{parentName:"p"},"BackedType"),"\nthat specifies which concrete ",(0,r.yg)("inlineCode",{parentName:"p"},"class")," type must be used when creating a new ",(0,r.yg)("inlineCode",{parentName:"p"},"Contract")," instance.\nThe declared ",(0,r.yg)("inlineCode",{parentName:"p"},"class")," must inherit from the given interface type ",(0,r.yg)("inlineCode",{parentName:"p"},"T"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'[BackedType(typeof(ERC20Backing))]\npublic interface ERC20 : IContract\n{\n  [EvmMethodInfo(Name = "decimals", View = true)]\n  [return: EvmParameterInfo(Type = "uint8")]\n  Task<BigInteger> Decimals();\n\n  // Define other interface methods.\n}\n')),(0,r.yg)("p",null,"Inside the backed ",(0,r.yg)("inlineCode",{parentName:"p"},"class"),", you must override all interface methods and either invoke custom logic or\nuse the ",(0,r.yg)("inlineCode",{parentName:"p"},"Contract")," class to automatically perform the correct logic based on the method data.\nYou can use ",(0,r.yg)("inlineCode",{parentName:"p"},"var method = System.Reflection.MethodBase.GetCurrentMethod();")," to get the current\nmethod being invoked, and then you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"base.InvokeMethod(MethodInfo method, object[] args)")," to\ninvoke the correct logic for the given ",(0,r.yg)("inlineCode",{parentName:"p"},"method")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"args"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'public class ERC20Backing : Contract, ERC20\n{\n  public string Address\n  {\n    get => base.Address;\n  }\n\n  [EvmMethodInfo(Name = "decimals", View = true)]\n  [return: EvmParameterInfo(Type = "uint8")]\n  public Task<BigInteger> Decimals()\n  {\n    var method = System.Reflection.MethodBase.GetCurrentMethod();\n    return (Task<BigInteger>) InvokeMethod(method, new object[] {  });\n  }\n\n  // Define other interface methods.\n}\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/#generate-contract-code"},"contract code generator")," automatically generates a backing\n",(0,r.yg)("inlineCode",{parentName:"p"},"class")," for each contract interface generated."),(0,r.yg)("p",null,"This contract factory is useful for when you need more concrete definitions of the contract\ninterface type ",(0,r.yg)("inlineCode",{parentName:"p"},"T"),".\nThis can be useful in runtimes where ",(0,r.yg)("inlineCode",{parentName:"p"},"dynamic")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"DynamicObject")," are not available (IL2CPP)."),(0,r.yg)("h2",{id:"set-the-contract-factory"},"Set the contract factory"),(0,r.yg)("p",null,"To set the current contract factory, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"Contract.ContractFactory"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"Contract.ContractFactory = new BackedTypeContractFactory();\n")),(0,r.yg)("p",null,"You don't need to do this, unless you create a custom contract factory.\nWe recommend just using the default contract factories for each runtime:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mono runtime - ",(0,r.yg)("a",{parentName:"li",href:"#impromptu-contract-factory"},"Impromptu contract factory")),(0,r.yg)("li",{parentName:"ul"},"IL2CPP runtime - ",(0,r.yg)("a",{parentName:"li",href:"#backed-type-contract-factory"},"Backed typed contract factory"))))}m.isMDXComponent=!0}}]);