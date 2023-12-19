"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[914],{69343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),s=(a(67294),a(3905)),r=a(56310);const o={description:"Get started quickly using the create-snap CLI.",sidebar_position:2},p="Snaps quickstart",i={unversionedId:"get-started/quickstart",id:"get-started/quickstart",title:"Snaps quickstart",description:"Get started quickly using the create-snap CLI.",source:"@site/snaps/get-started/quickstart.mdx",sourceDirName:"get-started",slug:"/get-started/quickstart",permalink:"/1055-flask/snaps/get-started/quickstart",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/quickstart.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Get started quickly using the create-snap CLI.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Install MetaMask Flask",permalink:"/1055-flask/snaps/get-started/install-flask"},next:{title:"How to",permalink:"/1055-flask/snaps/how-to"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Start the Snap",id:"start-the-snap",level:2},{value:"Connect to the Snap",id:"connect-to-the-snap",level:2},{value:"Customize the Snap",id:"customize-the-snap",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"snaps-quickstart"},"Snaps quickstart"),(0,s.kt)("p",null,"Get started creating your own Snap.\nUse the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")," CLI"),"\nto initialize a Snap monorepo project built with TypeScript and React.\nSee the following video demo:"),(0,s.kt)("p",{align:"center"},(0,s.kt)(r.Z,{url:"https://www.youtube.com/embed/qZRAryYwgdg?si=CeImIULgH3iD-FF0",mdxType:"ReactPlayer"})),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/1055-flask/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,s.kt)("admonition",{parentName:"li",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"MetaMask Snaps works with the latest LTS version of Node.js, but we recommend using the version specified in\nthe template's ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/template-snap-monorepo/blob/main/.nvmrc"},(0,s.kt)("inlineCode",{parentName:"a"},".nvmrc"))," file."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A text editor (for example, ",(0,s.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn")," version 3"))),(0,s.kt)("h2",{id:"create-the-project"},"Create the project"),(0,s.kt)("p",null,"Create a new Snap project using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")," CLI")," by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap your-snap-name\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap your-snap-name\n")),(0,s.kt)("p",null,"See the section ",(0,s.kt)("a",{parentName:"p",href:"/1055-flask/snaps/concepts/anatomy"},"Snaps anatomy")," to learn about the anatomy of your Snap project files."),(0,s.kt)("h2",{id:"start-the-snap"},"Start the Snap"),(0,s.kt)("p",null,"From the root of the newly created project, install the project dependencies using Yarn:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,s.kt)("p",null,"Start the development server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),(0,s.kt)("p",null,"You are now serving the Snap at ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8080/"},(0,s.kt)("inlineCode",{parentName:"a"},"http://localhost:8080"))," and its front-end at ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8000/"},(0,s.kt)("inlineCode",{parentName:"a"},"http://localhost:8000")),"."),(0,s.kt)("h2",{id:"connect-to-the-snap"},"Connect to the Snap"),(0,s.kt)("p",null,"On the front-end, select the ",(0,s.kt)("strong",{parentName:"p"},"Connect")," button and the MetaMask Flask extension pops up and\nrequires you to approve the Snap's permissions."),(0,s.kt)("p",null,"Once connected, select the ",(0,s.kt)("strong",{parentName:"p"},"Send message")," button to display a custom message within a confirmation\nscreen in MetaMask Flask."),(0,s.kt)("h2",{id:"customize-the-snap"},"Customize the Snap"),(0,s.kt)("p",null,"Open the project in a text editor.\nYou can customize your Snap by editing ",(0,s.kt)("inlineCode",{parentName:"p"},"index.ts")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"packages/snap/src")," folder."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"index.ts")," contains an example request that uses the\n",(0,s.kt)("a",{parentName:"p",href:"/1055-flask/snaps/reference/rpc-api#snapdialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," method to display a custom confirmation screen:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { OnRpcRequestHandler } from '@metamask/snaps-types';\nimport { getMessage } from './message';\n\nexport const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return snap.request({\n        method: 'snap_dialog',\n        params: {\n          type: 'Confirmation',\n          content: panel([\n            text(`Hello, **${origin}**!`),\n            text('This custom confirmation is just for display purposes.'),\n            text(\n              'But you can edit the Snap source code to make it do something, if you want to!',\n            ),\n          ]),\n        },\n      });\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,s.kt)("p",null,"Edit the text in any ",(0,s.kt)("inlineCode",{parentName:"p"},"text()")," component and select the ",(0,s.kt)("strong",{parentName:"p"},"Reconnect")," button\non the front-end to re-install the Snap."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"MetaMask Flask automatically re-installs locally hosted Snaps whenever it receives a connection request\nfor them.")),(0,s.kt)("p",null,"The next time you select the ",(0,s.kt)("strong",{parentName:"p"},"Send message")," button, you see the updated text in the confirmation screen."),(0,s.kt)("p",null,"You've now successfully connected, installed, interacted with, and customized your Snap!\nLearn more about ",(0,s.kt)("a",{parentName:"p",href:"/1055-flask/snaps/how-to/develop-a-snap"},"developing a Snap"),"."))}d.isMDXComponent=!0}}]);