"use strict";(self["webpackChunkgame"]=self["webpackChunkgame"]||[]).push([[55],{6120:function(e,t,s){s.d(t,{Z:function(){return y}});var i=s(6440),l=s(1040);const o={class:"flex-column-start tokens-content"},r={class:"flex-h__1 tokens-list"},c=["onClick"],a={class:"flex-1"},n={key:0,class:"token-list__item-title"},d={key:1,class:"token-list__item-title"},u={key:2,class:"token-list__item-title"},p=(0,i._)("div",{class:"MB-30"},null,-1);function w(e,t,s,w,m,h){const f=(0,i.up)("Close"),g=(0,i.up)("el-icon"),k=(0,i.up)("Check"),_=(0,i.up)("el-empty"),y=(0,i.up)("el-dialog");return(0,i.wg)(),(0,i.j4)(y,{modelValue:m.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=e=>m.dialogVisible=e),title:e.$t("history")+e.t("record"),width:"420px","custom-class":"tokens"},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.history,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)(["tokens-list__item pointer flex-row-start align-center pointer",{"text-red":0==e.status}]),key:t,onClick:t=>h.selectHandler(e)},[(0,i._)("div",a,["trade"==e.action?((0,i.wg)(),(0,i.iD)("div",n,(0,l.zw)(e.action)+" "+(0,l.zw)(e.item1.price)+" "+(0,l.zw)(e.item1.symbol)+" for "+(0,l.zw)(e.item2.price)+" "+(0,l.zw)(e.item2.symbol),1)):"approve"==e.action?((0,i.wg)(),(0,i.iD)("div",d,(0,l.zw)(e.action)+" "+(0,l.zw)(e.item1.price)+" "+(0,l.zw)(e.item1.symbol),1)):((0,i.wg)(),(0,i.iD)("div",u,(0,l.zw)(e.action)+" "+(0,l.zw)(e.item1.price)+" "+(0,l.zw)(e.item1.symbol)+" for "+(0,l.zw)(e.item2.price)+" "+(0,l.zw)(e.item2.symbol),1))]),0==e.status?((0,i.wg)(),(0,i.j4)(g,{key:0,size:30,color:"red",class:"ML-10"},{default:(0,i.w5)((()=>[(0,i.Wm)(f)])),_:1})):((0,i.wg)(),(0,i.j4)(g,{key:1,size:30,color:"#fff",class:"ML-10"},{default:(0,i.w5)((()=>[(0,i.Wm)(k)])),_:1}))],10,c)))),128))]),p,m.history.length<=0?((0,i.wg)(),(0,i.j4)(_,{key:0,description:"Empty History"})):(0,i.kq)("",!0)])])),_:1},8,["modelValue","title"])}var m=s(1279),h=s(936),f=s(9756),g={name:"History",data(){return{utils:m,getBit:h.qD,dialogVisible:!1,history:[]}},computed:{...(0,f.Se)(["currentNetwork"])},methods:{open(){this.dialogVisible=!0;let e=this.currentNetwork.chains+"swapHistory"+window.wallet?.getByAccount()?.address.toLowerCase();const t=localStorage.getItem(e);this.history=t?JSON.parse(t):[],this.history=this.history.reverse()},pushItem(e){void 0==this.history&&(this.history={}),this.history.push(e);let t=this.currentNetwork.chains+"swapHistory"+window.wallet?.getByAccount()?.address.toLowerCase();localStorage.setItem(t,JSON.stringify(this.history))},selectHandler(e){window.open(this.currentNetwork.Explorer[0]+`/tx/${e.tx.hash}`)}}},k=s(7650);const _=(0,k.Z)(g,[["render",w]]);var y=_},8709:function(e,t,s){s.d(t,{Z:function(){return z}});var i=s(6440),l=s(1254),o=s(1040);const r={class:"flex-column-start rpc-content"},c={key:0,class:"flex-row-start rpc-add"},a=["placeholder"],n={class:"flex-h__1 rpc-list"},d=["onClick"],u={class:"token-list__item-title flex-1"},p={class:"token-list__item-desc"},w={key:2,class:"text-red"},m=["onClick"],h=["onClick"];function f(e,t,s,f,g,k){const _=(0,i.up)("el-button"),y=(0,i.up)("Check"),v=(0,i.up)("el-icon"),b=(0,i.up)("Close"),x=(0,i.up)("el-dialog");return(0,i.wg)(),(0,i.j4)(x,{modelValue:g.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=e=>g.dialogVisible=e),title:e.$t("switch")+e.t("node"),width:"620px","custom-class":"rpc"},{default:(0,i.w5)((()=>[(0,i._)("div",r,[3==g.connectType?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.wy)((0,i._)("input",{type:"text",placeholder:e.t("pleaseEnter")+e.t("custom")+e.t("network"),class:"rpc-add__input flex-1","onUpdate:modelValue":t[0]||(t[0]=e=>g.rpcTxt=e)},null,8,a),[[l.nr,g.rpcTxt]]),(0,i.Wm)(_,{class:"rpc-add__use",disabled:!g.rpcTxt,onClick:k.addHandler},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.t("add")),1)])),_:1},8,["disabled","onClick"]),(0,i.Wm)(_,{class:"rpc-add__use",onClick:k.refreshHandler},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.t("refresh")),1)])),_:1},8,["onClick"])])):(0,i.kq)("",!0),(0,i._)("div",n,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.rpcList,((t,s)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)(["rpc-list__item pointer flex-row-start align-center pointer",{active:t.rpc==e.currentRpc&&3==g.connectType}]),key:s,onClick:e=>k.selectHandler(t)},[(0,i._)("div",u,(0,o.zw)(t.rpc),1),(0,i._)("div",p,[0==t.state?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)(" Loading... ")],64)):1==t.state?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)((0,o.zw)(e.t("network")+e.t("delay"))+"："+(0,o.zw)(t.speed)+"ms ",1)],64)):(0,i.kq)("",!0),-1==t.state?((0,i.wg)(),(0,i.iD)("span",w," Error ")):(0,i.kq)("",!0)]),t.rpc==e.currentRpc&&3==g.connectType?((0,i.wg)(),(0,i.j4)(v,{key:0,color:"#f4ba0a",size:"22",class:"ML-10"},{default:(0,i.w5)((()=>[(0,i.Wm)(y)])),_:1})):(0,i.kq)("",!0),3!=g.connectType?((0,i.wg)(),(0,i.iD)("div",{key:1,class:"token-list__item-copy",onClick:(0,l.iM)((e=>k.copyHandler(t.rpc)),["stop"])},(0,o.zw)(e.t("copy")),9,m)):1==t.state&&t.rpc!=e.currentRpc?((0,i.wg)(),(0,i.iD)("div",{key:2,class:"token-list__item-copy",onClick:e=>k.selectHandler(t)},(0,o.zw)(e.t("switch")),9,h)):(0,i.kq)("",!0),t.isAdd?((0,i.wg)(),(0,i.j4)(v,{key:3,color:"#fff",class:"ML-10",onClick:e=>k.removeRpc(s)},{default:(0,i.w5)((()=>[(0,i.Wm)(b)])),_:2},1032,["onClick"])):(0,i.kq)("",!0)],10,d)))),128))])])])),_:1},8,["modelValue","title"])}var g=s(9756),k=s(9239),_=s(5546),y=s(299),v=s.n(y),b=s(6494);const{t:x}=b["default"].global;var C={name:"History",data(){return{dialogVisible:!1,connectType:"",rpcTxt:"",rpcList:[]}},computed:{...(0,g.Se)(["currentNetwork","currentRpc","connectState"])},methods:{...(0,g.nv)(["setCurrentRpc"]),getNetwordSpeed(e){const t=(new Date).valueOf(),s=this.rpcList.findIndex((t=>t.rpc===e));v().post(e,{jsonrpc:"2.0",method:"web3_clientVersion",params:[],id:67}).then((e=>{this.rpcList[s].state=1})).catch((e=>{this.rpcList[s].state=-1})).finally((()=>{const e=(new Date).valueOf();this.rpcList[s].speed=e-t}))},removeRpc(e){this.rpcList.splice(e,1),localStorage.setItem("rpcList"+this.currentNetwork.chains,JSON.stringify(this.rpcList))},refreshHandler(){const e=localStorage.getItem("rpcList"+this.currentNetwork.chains)?JSON.parse(localStorage.getItem("rpcList"+this.currentNetwork.chains)):this.currentNetwork.Rpcs;this.rpcList=e.map((e=>({rpc:e.rpc||e,speed:0,state:0}))),this.rpcList.forEach((e=>{this.getNetwordSpeed(e.rpc)}))},addHandler(){const e=this.rpcList.find((e=>e.rpc===this.rpcTxt));e?(0,_.bM)({type:"error",title:"Error",message:x("swap.exists")}):(this.rpcList.unshift({rpc:this.rpcTxt,speed:0,state:0,isAdd:!0}),this.getNetwordSpeed(this.rpcTxt),(0,_.bM)({type:"success",title:"Success",message:x("swap.rpcAddSuccess")}),this.rpcTxt="",localStorage.setItem("rpcList"+this.currentNetwork.chains,JSON.stringify(this.rpcList)))},open(e){this.dialogVisible=!0,this.connectType=this.connectState;const t=localStorage.getItem("rpcList"+this.currentNetwork.chains)?JSON.parse(localStorage.getItem("rpcList"+this.currentNetwork.chains)):this.currentNetwork.Rpcs;this.rpcList=t.map((e=>({rpc:e.rpc||e,speed:0,state:0}))),this.rpcList.forEach((e=>{this.getNetwordSpeed(e.rpc)}))},copyHandler(e){(0,k.Z)(e),(0,_.bM)({type:"success",title:"复制成功",message:x("swap.rpcCopySuccess")})},selectHandler(e){3==this.connectType&&1==e.state&&(this.setCurrentRpc(e.rpc),window.wallet.switchRpc(e.rpc),(0,_.bM)({type:"success",title:"Success",message:x("swap.switchSuccess")}))}}},L=s(7650);const V=(0,L.Z)(C,[["render",f]]);var z=V},9011:function(e,t,s){s.d(t,{Z:function(){return O}});var i=s(6440),l=s(1040);const o={class:"flex-column-start tokens-content"},r={class:"flex-h__1 tokens-list"},c={class:"tokens-list__item flex-row-start align-center"},a={class:"flex-1"},n={class:"token-list__item-title"},d={class:"flex-row-start"},u={class:"tokens-list__item flex-row-start align-center"},p={class:"flex-1"},w={class:"token-list__item-title"},m={class:"flex-row-start"},h={key:0,class:"flex-row-between align-center ML-25 MB-10 MT-10"},f={class:"flex-row-start"},g={class:"flex-1"},k={class:"token-list__item-title"},_={class:"flex-row-between ML-30 MR-30 MB-10"};function y(e,t,s,y,v,b){const x=(0,i.up)("QuestionFilled"),C=(0,i.up)("el-icon"),L=(0,i.up)("el-tooltip"),V=(0,i.up)("el-switch"),z=(0,i.up)("el-button"),N=(0,i.up)("el-dialog"),D=(0,i.up)("DexList");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(N,{modelValue:v.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=e=>v.dialogVisible=e),title:e.$t("setting.title"),width:"420px","custom-class":"tokens","before-close":b.handleClose},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",r,[(0,i._)("div",c,[(0,i._)("div",a,[(0,i._)("div",n,[(0,i._)("div",d,[(0,i.Uk)((0,l.zw)(e.t("setting.autoRoute"))+" ",1),(0,i.Wm)(L,{class:"box-item",effect:"light",content:e.t("tips.AutoRoute"),placement:"bottom"},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{class:"ML-5"},{default:(0,i.w5)((()=>[(0,i.Wm)(x)])),_:1})])),_:1},8,["content"])])])]),(0,i.Wm)(V,{modelValue:e.currentConfig.autoRoute,"onUpdate:modelValue":t[0]||(t[0]=t=>e.currentConfig.autoRoute=t),class:"ml-2 ML-15"},null,8,["modelValue"])]),(0,i._)("div",u,[(0,i._)("div",p,[(0,i._)("div",w,[(0,i._)("div",m,[(0,i.Uk)((0,l.zw)(e.t("professional")+e.t("mode"))+" ",1),(0,i.Wm)(L,{class:"box-item",effect:"light",content:e.t("tips.Professional"),placement:"bottom"},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{class:"ML-5"},{default:(0,i.w5)((()=>[(0,i.Wm)(x)])),_:1})])),_:1},8,["content"])])])]),(0,i.Wm)(V,{modelValue:e.currentConfig.professional,"onUpdate:modelValue":t[1]||(t[1]=t=>e.currentConfig.professional=t),class:"ml-2 ML-15"},null,8,["modelValue"])]),0==e.currentConfig.autoRoute?((0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("div",f,[(0,i._)("div",g,[(0,i._)("div",k,(0,l.zw)(e.t("current")+e.t("dex"))+" "+(0,l.zw)(e.currentConfig?.dex?.symbol),1)]),(0,i._)("div",_,[(0,i.Wm)(z,{onClick:b.openDex,type:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.t("select")+e.t("dex")),1)])),_:1},8,["onClick"])])])])):(0,i.kq)("",!0)])])])),_:1},8,["modelValue","title","before-close"]),(0,i.Wm)(D,{ref:"dexList"},null,512)],64)}const v={class:"flex-column-start rpc-content"},b={class:"flex-h__1 rpc-list"},x=["onClick"],C={class:"token-list__item-title flex-1"},L=(0,i._)("div",{class:"token-list__item-desc"},null,-1),V=["onClick"];function z(e,t,s,o,r,c){const a=(0,i.up)("Check"),n=(0,i.up)("el-icon"),d=(0,i.up)("el-dialog");return(0,i.wg)(),(0,i.j4)(d,{modelValue:r.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=e=>r.dialogVisible=e),title:e.t("switch")+e.t("dex"),width:"620px","custom-class":"rpc"},{default:(0,i.w5)((()=>[(0,i._)("div",v,[(0,i._)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.dexList,((t,s)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)(["rpc-list__item pointer flex-row-start align-center pointer",{active:t.address.toLowerCase()==r.currentDex?.toLowerCase()}]),key:s,onClick:e=>c.selectHandler(t)},[(0,i._)("div",C,(0,l.zw)(t.symbol),1),L,t.address==r.currentDex?((0,i.wg)(),(0,i.j4)(n,{key:0,color:"#46F40A",size:"22",class:"ML-10"},{default:(0,i.w5)((()=>[(0,i.Wm)(a)])),_:1})):(0,i.kq)("",!0),t.address.toLowerCase()!=r.currentDex?.toLowerCase()?((0,i.wg)(),(0,i.iD)("div",{key:1,class:"token-list__item-copy",onClick:e=>c.selectHandler(t)},(0,l.zw)(e.t("switch")),9,V)):(0,i.kq)("",!0)],10,x)))),128))])])])),_:1},8,["modelValue","title"])}var N=s(9756),D=s(9239),S=s(5546),j=(s(299),s(6494));const{t:H}=j["default"].global;var M={name:"History",data(){return{dialogVisible:!1,connectType:"",rpcTxt:"",dexList:[],currentDex:""}},computed:{...(0,N.Se)(["currentNetwork","currentConfig"])},methods:{...(0,N.nv)(["setConfig"]),open(e){this.dialogVisible=!0,this.currentDex=e;let t=this.currentNetwork.Dex;this.dexList=t},copyHandler(e){(0,D.Z)(e),(0,S.bM)({type:"success",title:"复制成功",message:H("swap.rpcCopySuccess")})},selectHandler(e){this.currentConfig.dex=e,this.setConfig(this.currentConfig),this.dialogVisible=!1}}},W=s(7650);const T=(0,W.Z)(M,[["render",z]]);var q=T,R={name:"Setting",data(){return{dialogVisible:!1}},components:{DexList:q},computed:{...(0,N.Se)(["currentNetwork","currentConfig"])},methods:{...(0,N.nv)(["setConfig"]),open(){this.dialogVisible=!0},getDex(){let e=this.currentNetwork.Dex,t=this.currentConfig.dex;return e.find((e=>e.address.toLowerCase()==t.address.toLowerCase()))},handleClose(e){this.setConfig(this.currentConfig),e()},openDex(){this.$refs.dexList.open(this.currentConfig?.dex?.address)}}};const U=(0,W.Z)(R,[["render",y]]);var O=U},6008:function(e,t,s){s.d(t,{Z:function(){return w}});var i=s(6440);const l={class:"layout"},o={class:"layout-inner radius-box"},r={class:"container"},c={class:"dashboard-page"};function a(e,t,s,a,n,d){const u=(0,i.up)("el-tab-pane"),p=(0,i.up)("el-tabs");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",o,[(0,i._)("div",r,[(0,i._)("div",c,[(0,i.Wm)(p,{class:"dashboard-item",modelValue:n.activeItem,"onUpdate:modelValue":t[0]||(t[0]=e=>n.activeItem=e),onTabClick:d.tabChange},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{label:e.$t("tradeNav.trade"),name:"trade",lazy:""},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(i.Ob,null,[((0,i.wg)(),(0,i.j4)((0,i.LL)(s.trade),{ref:"trade"},null,512))],1024))])),_:1},8,["label"]),n.isProject?((0,i.wg)(),(0,i.j4)(u,{key:0,label:e.$t("tradeNav.auto"),name:"autotrade",lazy:""},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)((0,i.LL)(s.autotrade),{ref:"autotrade"},null,512))])),_:1},8,["label"])):(0,i.kq)("",!0),n.isProject?((0,i.wg)(),(0,i.j4)(u,{key:1,label:e.$t("tradeNav.liquidity"),name:"liquidity",lazy:""},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)((0,i.LL)(s.liquidity),{ref:"liquidity"},null,512))])),_:1},8,["label"])):(0,i.kq)("",!0),(0,i.Wm)(u,{label:e.$t("tradeNav.lock"),name:"lock",lazy:""},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)((0,i.LL)(s.lock),{ref:"lock"},null,512))])),_:1},8,["label"])])),_:1},8,["modelValue","onTabClick"])])])])])}var n=s(9756),d={props:{tabChange:{type:Function,default:null},trade:{type:Object},liquidity:{type:Object,default:null},lock:{type:Object,default:null},autotrade:{type:Object,default:null},activeName:{type:Object}},data(){return{activeItem:this.activeName,isProject:!1}},mounted(){this.isProject="teafi_app"==window._project},components:{},computed:{...(0,n.Se)(["currentNetwork","networkList"])},methods:{tabChange(e,t){switch(e.props.name){case"trade":this.$router.push({path:"/trade/"+this.currentNetwork.chains});break;default:this.$router.push({path:"/"+e.props.name});break}document.title=e.props.label}}},u=s(7650);const p=(0,u.Z)(d,[["render",a]]);var w=p}}]);