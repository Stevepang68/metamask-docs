(()=>{"use strict";var e,a,f,c,d,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var f=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,t),f.loaded=!0,f.exports}t.m=b,e=[],t.O=(a,f,c,d)=>{if(!f){var b=1/0;for(n=0;n<e.length;n++){f=e[n][0],c=e[n][1],d=e[n][2];for(var r=!0,o=0;o<f.length;o++)(!1&d||b>=d)&&Object.keys(t.O).every((e=>t.O[e](f[o])))?f.splice(o--,1):(r=!1,d<b&&(b=d));if(r){e.splice(n--,1);var l=c();void 0!==l&&(a=l)}}return a}d=d||0;for(var n=e.length;n>0&&e[n-1][2]>d;n--)e[n]=e[n-1];e[n]=[f,c,d]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);t.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var r=2&c&&e;"object"==typeof r&&!~a.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(d,b),d},t.d=(e,a)=>{for(var f in a)t.o(a,f)&&!t.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,f)=>(t.f[f](e,a),a)),[])),t.u=e=>"assets/js/"+({40:"8145e54e",53:"935f2afb",59:"e1aa5429",157:"652081cc",167:"486ba757",239:"e2319a8f",260:"3e112a3e",261:"reactPlayerKaltura",291:"ab3b18fd",359:"85fc5ba9",368:"41f5386a",479:"82c9c8ff",582:"ef8d09aa",690:"47fa8f02",795:"63b87658",825:"03c51261",1145:"40d431ee",1234:"669925fe",1267:"60510e3e",1321:"d2baf1b2",1338:"a892f941",1402:"3ee3d2fe",1511:"682638a2",1624:"eb2b80f1",1764:"17a18c8c",1783:"0c4e21de",1835:"bdecca60",1962:"9420e93e",2044:"aee6d0cb",2088:"c29e371a",2121:"reactPlayerFacebook",2164:"c66e041d",2176:"b6db0fd4",2250:"4ecdda4a",2257:"95c87532",2274:"4efa9f2e",2305:"14bc7481",2325:"6e004e16",2330:"52198f09",2350:"18e5589a",2472:"ce634f1e",2546:"reactPlayerStreamable",2583:"2a5de1af",2660:"37285b91",2741:"c3be8443",2744:"f4fa537f",2794:"577b8b2a",2797:"a2353af7",2922:"416e56d6",2928:"d2011f4f",3054:"68c12626",3109:"54f1853a",3115:"97c42b41",3140:"d3bb2b22",3237:"1df93b7f",3238:"f07d381f",3261:"38834551",3264:"8329f30e",3316:"d5f74ffe",3371:"55d0cf22",3381:"030193d7",3634:"f6d13bb3",3660:"df3ffe2a",3743:"reactPlayerVimeo",3751:"3720c009",3791:"b223888a",3805:"91efdb01",4121:"55960ee5",4140:"501c7dd0",4151:"ff576332",4192:"037997aa",4257:"9cea254b",4283:"c66adc2f",4332:"1d0adbbf",4439:"reactPlayerYouTube",4442:"ba7d2542",4467:"177a052f",4514:"0db58064",4657:"b099eb42",4667:"reactPlayerMixcloud",4750:"3e786943",4832:"f8a3ce18",4842:"3ae10ab4",4880:"fbd1eabb",4957:"2150471b",5176:"f9fecb86",5216:"66ba7e9e",5412:"7d4adaa7",5448:"d1bc9957",5467:"4ef6a72a",5473:"f5000f06",5540:"e7bb210c",5576:"3d86cae6",5580:"fd49626c",5643:"19fab523",5712:"66d369c7",5812:"f0c90a0b",5891:"c23d85eb",5965:"2e39c2b3",6002:"6380b8b5",6011:"reactPlayerFilePlayer",6125:"reactPlayerSoundCloud",6147:"c455d87c",6216:"reactPlayerTwitch",6230:"91d80bc5",6336:"9947d6d2",6343:"ab4cafa2",6423:"77a46a80",6439:"c5e4f5c1",6453:"4a530d18",6506:"86fa29bc",6556:"2c1888ff",6595:"ab85252c",6655:"70334ba8",6718:"6721d267",6753:"ee067fe3",6754:"cfc76383",6897:"28c74fbd",7050:"11b7fc92",7266:"5e56b9d4",7318:"5625bc05",7340:"ce260bbc",7382:"d70a1ef5",7384:"d74ef9a1",7385:"537b678a",7401:"93fc7228",7440:"9edebb4e",7454:"fa715556",7502:"57e75615",7523:"f8f7b6b2",7531:"cb2c0fed",7596:"reactPlayerDailyMotion",7612:"72448035",7664:"reactPlayerPreview",7698:"31bfc0a5",7714:"839511b6",7918:"17896441",7920:"1a4e3797",8055:"reactPlayerWistia",8301:"4ad67257",8313:"286d8836",8371:"5a6432d3",8447:"d4b4a7ff",8467:"0b387740",8630:"abad3c49",8669:"56aa118c",8742:"6ebf937c",8756:"3925c87d",8778:"b91521d0",8819:"ba4cac81",8888:"reactPlayerVidyard",8899:"ac7fa00e",8930:"debbc54f",8931:"cf946124",8937:"2c7781db",8993:"78eb1577",9012:"f1a88e27",9048:"95fa971a",9057:"94590018",9304:"49f67c63",9329:"ab8b636d",9360:"453c9f5d",9514:"1be78505",9548:"fe7415f5",9681:"7dd3f6c4",9817:"14eb3368",9905:"502824f3",9924:"df203c0f",9980:"284a1a9e"}[e]||e)+"."+{40:"6e55a69d",53:"a56df60d",59:"c2835a10",157:"90d10489",167:"2ac2805b",239:"a39b2b5d",260:"dcbf349e",261:"091ed2a3",291:"6afb4f74",359:"cc80a35b",368:"2ea21032",479:"005ed4f3",582:"0ed31ebf",690:"0f3f7acf",795:"568f5c18",825:"227f652d",1145:"6db8a7f8",1234:"7b60c140",1267:"8a61e00f",1321:"83192ddb",1338:"7dbebebc",1402:"3987c07d",1426:"be64a7dc",1511:"b9f156a3",1624:"161693cc",1764:"0fcbbb30",1783:"82b2a149",1835:"85c2b7fd",1962:"f27af979",2044:"cfb06652",2088:"cecc6a70",2121:"697cc207",2164:"67d6a7fe",2176:"19deed91",2250:"2e253765",2257:"70aed793",2274:"78506d59",2305:"2dc19fd3",2325:"9bf365c6",2330:"9c6b17c2",2350:"7ff6f662",2472:"77389088",2546:"4582143a",2583:"267685e8",2660:"f78fea70",2741:"842e46e6",2744:"102a9ad4",2794:"c9840aef",2797:"6f08fb3b",2922:"14e35216",2928:"3c72eb27",3054:"693d7dd0",3109:"7199f7bf",3115:"eee5770d",3140:"cee5026f",3237:"a3eebb03",3238:"43a3c1f0",3261:"d7efd5fa",3264:"ec7f6ee2",3316:"d9fbee1e",3371:"348d63ff",3381:"b206dbd7",3634:"db4a3aec",3660:"02627652",3743:"42a0d9c0",3751:"df3385d2",3791:"9db9c9dd",3805:"235af072",4121:"65648593",4140:"63a54d9b",4151:"105b21ae",4192:"549c4ff3",4257:"25bd899f",4283:"988aa31e",4332:"d726ca12",4439:"a9b14741",4442:"f3052055",4467:"412b50ba",4514:"55153242",4657:"5455053c",4667:"3aafbc0c",4750:"38332421",4832:"7d140afb",4842:"4ac27733",4880:"7c221fa5",4957:"63f92c90",4972:"e49176b8",5176:"05330a46",5216:"44372c15",5412:"d9559c3c",5448:"1e872a0e",5467:"53e013b8",5473:"321794cf",5540:"3abb7348",5576:"c4c9224b",5580:"9b9595ce",5643:"77fac8b8",5712:"557d9a98",5812:"acc3679a",5891:"7b33fc1c",5965:"2dc1ced7",6002:"a49232fd",6011:"98545a61",6125:"bacff259",6147:"2a858f62",6216:"d718da62",6230:"4141de7e",6316:"d9003c37",6336:"14779153",6343:"9a06642c",6423:"7d7ada1f",6439:"d67f46e5",6453:"7c209579",6506:"b2e2e492",6556:"dcc5dcdd",6595:"6a98c131",6655:"3bfb991a",6718:"f25fdce4",6753:"b9053076",6754:"ce393a8d",6760:"8363329a",6897:"2f2d31ac",6945:"07888cb2",7050:"53a5b0cf",7266:"253b2dda",7318:"70519c9d",7340:"750dc5e6",7382:"207de3ff",7384:"e41cd148",7385:"c32ccd6f",7401:"99a0e587",7440:"0d9ec468",7454:"e6d7c1ca",7502:"9198ab73",7523:"c9315996",7531:"1c2b18c7",7596:"a49c1936",7612:"237dcaee",7664:"9db1cd05",7698:"5b23bc87",7714:"ca28d7e5",7724:"df7eb109",7918:"b15050d7",7920:"3b179cfe",8055:"508ea7c7",8301:"9e440910",8313:"771d9023",8371:"87888ab9",8447:"00365625",8467:"29f3f57f",8630:"f048efc2",8669:"d657d635",8685:"19ce8911",8742:"bfdd1d06",8756:"badcce28",8778:"bc670f60",8819:"bb0d9e1e",8888:"1189c126",8894:"814fc599",8899:"c60c19b3",8930:"73af10d2",8931:"d1b98847",8937:"fe463d17",8939:"eb87e055",8993:"5c7a4d41",9012:"3f23b3d8",9048:"25b78ec3",9057:"31dc2a18",9304:"c3798529",9329:"f59724b7",9360:"b92c1172",9487:"e0727ae8",9514:"bf7c0fe3",9548:"26c00770",9681:"503935aa",9701:"3bfec2d8",9817:"e0d24799",9905:"c02b0870",9924:"8cde9cdd",9980:"f2fab7eb",9984:"3e5c17e0"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="metamask-docs:",t.l=(e,a,f,b)=>{if(c[e])c[e].push(a);else{var r,o;if(void 0!==f)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+f){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",d+f),r.src=e),c[e]=[a];var u=(a,f)=>{r.onerror=r.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/snaps-more-custom-ui/",t.gca=function(e){return e={17896441:"7918",38834551:"3261",72448035:"7612",94590018:"9057","8145e54e":"40","935f2afb":"53",e1aa5429:"59","652081cc":"157","486ba757":"167",e2319a8f:"239","3e112a3e":"260",reactPlayerKaltura:"261",ab3b18fd:"291","85fc5ba9":"359","41f5386a":"368","82c9c8ff":"479",ef8d09aa:"582","47fa8f02":"690","63b87658":"795","03c51261":"825","40d431ee":"1145","669925fe":"1234","60510e3e":"1267",d2baf1b2:"1321",a892f941:"1338","3ee3d2fe":"1402","682638a2":"1511",eb2b80f1:"1624","17a18c8c":"1764","0c4e21de":"1783",bdecca60:"1835","9420e93e":"1962",aee6d0cb:"2044",c29e371a:"2088",reactPlayerFacebook:"2121",c66e041d:"2164",b6db0fd4:"2176","4ecdda4a":"2250","95c87532":"2257","4efa9f2e":"2274","14bc7481":"2305","6e004e16":"2325","52198f09":"2330","18e5589a":"2350",ce634f1e:"2472",reactPlayerStreamable:"2546","2a5de1af":"2583","37285b91":"2660",c3be8443:"2741",f4fa537f:"2744","577b8b2a":"2794",a2353af7:"2797","416e56d6":"2922",d2011f4f:"2928","68c12626":"3054","54f1853a":"3109","97c42b41":"3115",d3bb2b22:"3140","1df93b7f":"3237",f07d381f:"3238","8329f30e":"3264",d5f74ffe:"3316","55d0cf22":"3371","030193d7":"3381",f6d13bb3:"3634",df3ffe2a:"3660",reactPlayerVimeo:"3743","3720c009":"3751",b223888a:"3791","91efdb01":"3805","55960ee5":"4121","501c7dd0":"4140",ff576332:"4151","037997aa":"4192","9cea254b":"4257",c66adc2f:"4283","1d0adbbf":"4332",reactPlayerYouTube:"4439",ba7d2542:"4442","177a052f":"4467","0db58064":"4514",b099eb42:"4657",reactPlayerMixcloud:"4667","3e786943":"4750",f8a3ce18:"4832","3ae10ab4":"4842",fbd1eabb:"4880","2150471b":"4957",f9fecb86:"5176","66ba7e9e":"5216","7d4adaa7":"5412",d1bc9957:"5448","4ef6a72a":"5467",f5000f06:"5473",e7bb210c:"5540","3d86cae6":"5576",fd49626c:"5580","19fab523":"5643","66d369c7":"5712",f0c90a0b:"5812",c23d85eb:"5891","2e39c2b3":"5965","6380b8b5":"6002",reactPlayerFilePlayer:"6011",reactPlayerSoundCloud:"6125",c455d87c:"6147",reactPlayerTwitch:"6216","91d80bc5":"6230","9947d6d2":"6336",ab4cafa2:"6343","77a46a80":"6423",c5e4f5c1:"6439","4a530d18":"6453","86fa29bc":"6506","2c1888ff":"6556",ab85252c:"6595","70334ba8":"6655","6721d267":"6718",ee067fe3:"6753",cfc76383:"6754","28c74fbd":"6897","11b7fc92":"7050","5e56b9d4":"7266","5625bc05":"7318",ce260bbc:"7340",d70a1ef5:"7382",d74ef9a1:"7384","537b678a":"7385","93fc7228":"7401","9edebb4e":"7440",fa715556:"7454","57e75615":"7502",f8f7b6b2:"7523",cb2c0fed:"7531",reactPlayerDailyMotion:"7596",reactPlayerPreview:"7664","31bfc0a5":"7698","839511b6":"7714","1a4e3797":"7920",reactPlayerWistia:"8055","4ad67257":"8301","286d8836":"8313","5a6432d3":"8371",d4b4a7ff:"8447","0b387740":"8467",abad3c49:"8630","56aa118c":"8669","6ebf937c":"8742","3925c87d":"8756",b91521d0:"8778",ba4cac81:"8819",reactPlayerVidyard:"8888",ac7fa00e:"8899",debbc54f:"8930",cf946124:"8931","2c7781db":"8937","78eb1577":"8993",f1a88e27:"9012","95fa971a":"9048","49f67c63":"9304",ab8b636d:"9329","453c9f5d":"9360","1be78505":"9514",fe7415f5:"9548","7dd3f6c4":"9681","14eb3368":"9817","502824f3":"9905",df203c0f:"9924","284a1a9e":"9980"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,f)=>{var c=t.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var b=t.p+t.u(a),r=new Error;t.l(b,(f=>{if(t.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;r.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",r.name="ChunkLoadError",r.type=d,r.request=b,c[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,b=f[0],r=f[1],o=f[2],l=0;if(b.some((a=>0!==e[a]))){for(c in r)t.o(r,c)&&(t.m[c]=r[c]);if(o)var n=o(t)}for(a&&a(f);l<b.length;l++)d=b[l],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(n)},f=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();