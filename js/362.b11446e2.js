"use strict";(self["webpackChunkgame"]=self["webpackChunkgame"]||[]).push([[362,831,770],{7831:function(e,t,a){a.r(t),t["default"]=[{inputs:[{internalType:"address",name:"lockAddr",type:"address"},{internalType:"uint256",name:"lockDay",type:"uint256"}],name:"addLockTime",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"addr",type:"address"}],name:"Deploy",type:"event"},{inputs:[{internalType:"address",name:"addr",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"lockDay",type:"uint256"},{internalType:"bool",name:"isLine",type:"bool"},{internalType:"uint256",name:"releaseAmount",type:"uint256"},{internalType:"uint256",name:"releaseDays",type:"uint256"}],name:"deployLock",outputs:[],stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"addr",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"receiveERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"receiveETH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_feeprice",type:"uint256"},{internalType:"uint256",name:"_txPrice",type:"uint256"},{internalType:"uint256",name:"_callPay",type:"uint256"}],name:"setTxPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"subscribe",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"lockAddr",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"lockAddr",type:"address"},{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferETH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"lockAddr",type:"address"},{internalType:"address",name:"to",type:"address"}],name:"transferLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"lockAddr",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"unlockClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"},{inputs:[],name:"callFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"callPay",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"checkNowTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"checkTxPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"lockAddr",type:"address"}],name:"checkUnlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"getLockLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenAddr",type:"address"},{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"limit",type:"uint256"}],name:"getLockList",outputs:[{components:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"lockDay",type:"uint256"},{internalType:"uint256",name:"lockTime",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bool",name:"isLine",type:"bool"},{internalType:"uint256",name:"releaseAmount",type:"uint256"},{internalType:"uint256",name:"releaseDays",type:"uint256"},{internalType:"uint256",name:"lastClaim",type:"uint256"},{internalType:"address",name:"lockAddr",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"}],internalType:"struct TeafiAppLock.lockInfo[]",name:"items",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lockOwner",outputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"lockDay",type:"uint256"},{internalType:"uint256",name:"lockTime",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bool",name:"isLine",type:"bool"},{internalType:"uint256",name:"releaseAmount",type:"uint256"},{internalType:"uint256",name:"releaseDays",type:"uint256"},{internalType:"uint256",name:"lastClaim",type:"uint256"},{internalType:"address",name:"lockAddr",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"subscribeList",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}]},9770:function(e,t,a){a.r(t),t["default"]=[{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address",name:"routeAddr",type:"address"},{internalType:"address[]",name:"path",type:"address[]"}],name:"gotTax",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"uint256",name:"count",type:"uint256"},{internalType:"uint256",name:"slippage",type:"uint256"},{internalType:"bool",name:"checkTax",type:"bool"},{internalType:"address",name:"routeAddr",type:"address"},{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"address[]",name:"path",type:"address[]"}],name:"manyTokensBuy",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],name:"manyTransferETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],name:"manyTransferToken",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address",name:"routeAddr",type:"address"},{internalType:"address payable",name:"to",type:"address"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"uint256",name:"count",type:"uint256"}],name:"normalSwap",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"receiveERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"receiveETH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_addr",type:"address"}],name:"setRoute",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address",name:"routeAddr",type:"address"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256",name:"deserved",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"routeAddr",type:"address"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getPools",outputs:[{internalType:"address",name:"token0",type:"address"},{internalType:"address",name:"token1",type:"address"},{internalType:"uint112",name:"reserve0",type:"uint112"},{internalType:"uint112",name:"reserve1",type:"uint112"},{internalType:"uint32",name:"blockTimestampLast",type:"uint32"},{internalType:"uint256",name:"totalSupply",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"teafiApp",outputs:[{internalType:"contract TeafiAppLock",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"uniswapV2Factory",outputs:[{internalType:"contract IUniswapV2Factory",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"uniswapV2Router",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}]},5362:function(e,t,a){a.d(t,{Z:function(){return M}});var n=a(5101),i=({blockchain:e,address:t,api:a,params:i,provider:s,value:p,gasLimit:r,gwei:d})=>(0,n.Z)({blockchain:e,address:t,api:a,method:"manyTokensBuy",params:i,cache:5e3,provider:s,gasPrice:d,gasLimit:r,value:p}),s=({blockchain:e,address:t,api:a,params:i,provider:s,value:p,gasLimit:r,gwei:d})=>(0,n.Z)({blockchain:e,address:t,api:a,method:"normalSwap",params:i,cache:5e3,provider:s,gasPrice:d,gasLimit:r,value:p}),p=a(6129),r=({blockchain:e,address:t,api:a,params:n,provider:i,gasLimit:s,gwei:r})=>(0,p.Z)({blockchain:e,address:t,api:a,method:"gotTax",params:n,cache:5e3,provider:i,gasPrice:r,gasLimit:s}),d=({blockchain:e,address:t,method:a,params:n=[],api:i})=>(0,p.Z)({blockchain:e,address:t,api:i,method:a,params:n,cache:5e5}),u=a(6761),l=a(2459),y=a(570),o=a(5665),c=a(9770),m=a(7831),h=a(936);class T{constructor({blockchain:e,address:t,gasLimit:a,gwei:n,provider:i}){this.blockchain=e,o.Z.evm.includes(this.blockchain)?this.address=l.Kn(t):o.Z.solana.includes(this.blockchain)&&(this.address=t),this.gasLimit=a,this.gwei=n?y.vz(n?.toString(),9):y.vz(u.Z.findByName(this.blockchain).gwei,9),this.provider=i,this.callfee=y.vz(u.Z.findByName(this.blockchain).callFee,18),this.checkTxPrice=y.vz(u.Z.findByName(this.blockchain).checkTxPrice,18),this.callPay=y.vz(u.Z.findByName(this.blockchain).callPay,18),this.teafiAddress=null,this.call("callFee").then((e=>{this.callfee=e})),this.call("checkTxPrice").then((e=>{this.checkTxPrice=e})),this.call("callPay").then((e=>{this.callPay=e}))}async call(e){if(o.Z.evm.includes(this.blockchain))return this.teafiAddress||(this.teafiAddress=await d({blockchain:this.blockchain,address:this.address,api:c["default"],method:"teafiApp"})),await d({blockchain:this.blockchain,address:this.teafiAddress,api:m["default"],method:e})}async getPools(e,t){if(o.Z.evm.includes(this.blockchain))return await d({blockchain:this.blockchain,address:this.address,api:c["default"],method:"getPools",params:[e,t]})}async manyTokensBuy(e,t,a,n,s,p,r,d,l){if(this.callfee||(this.callfee=await this.callFee()),o.Z.evm.includes(this.blockchain)){let o=y.vz("0");o=o.add(this.callfee);let m=u.Z.findByName(this.blockchain).wrapped;if((0,h.YG)(d[0],m.address)){let t=e.mul(a).mul(r.length);o=o.add(t)}return s&&(o=o.add(this.callfee)),await i({blockchain:this.blockchain,address:this.address,api:c["default"],params:[e,t,a,n,s,p,r,d],provider:l||this.provider,gasLimit:this.gasLimit,gwei:this.gwei,value:o})}}async normalSwap(e,t,a,n,i,p){if(this.callfee||(this.callfee=await this.callFee()),o.Z.evm.includes(this.blockchain)){let r=y.vz("0");return r=r.add(this.callfee),await s({blockchain:this.blockchain,address:this.address,api:c["default"],params:[e,t,a,n,i],provider:p||this.provider,gasLimit:this.gasLimit,gwei:this.gwei,value:r})}}async gotTax(e,t,a,n){if(o.Z.evm.includes(this.blockchain)){let i=y.vz("0");return await r({blockchain:this.blockchain,address:this.address,api:c["default"],params:[e,t,a],provider:n||this.provider,gasLimit:this.gasLimit,gwei:this.gwei,value:i})}}}var b=T,k=({blockchain:e,address:t,api:a,method:n,params:i,provider:s,gasLimit:r,gwei:d})=>(0,p.Z)({blockchain:e,address:t,api:a,method:n,params:i,cache:5e3,provider:s,gasPrice:d,gasLimit:r}),f=({blockchain:e,address:t,api:a,method:i,params:s,provider:p,value:r,gasLimit:d,gwei:u})=>(0,n.Z)({blockchain:e,address:t,api:a,method:i,params:s,cache:5e3,provider:p,gasPrice:u,gasLimit:d,value:r}),v=a(5751);class w{constructor({blockchain:e,address:t,type:a,gasLimit:n,gwei:i,provider:s}){this.blockchain=e,o.Z.evm.includes(this.blockchain)?this.address=l.Kn(t):o.Z.solana.includes(this.blockchain)&&(this.address=t),this.gasLimit=n,this.gwei=i?y.vz(i?.toString(),9):y.vz(u.Z.findByName(this.blockchain).gwei,9),this.provider=s,this.type=a}async getParams(e,t=[]){if(o.Z.evm.includes(this.blockchain)){let a={blockchain:this.blockchain,address:this.address,api:{},method:e,params:t,provider:this.provider,gasLimit:this.gasLimit,gwei:this.gwei};switch(this.type){case"stock":return a.api=v["default"],await k(a);case"lock":return a.api=m["default"],await k(a);default:}}}async callParams(e,t=[]){if(o.Z.evm.includes(this.blockchain)){let a={blockchain:this.blockchain,address:this.address,api:{},method:e,params:t,provider:this.provider,gasLimit:this.gasLimit,gwei:this.gwei};switch(this.type){case"stock":return a.api=v["default"],await f(a);case"lock":return a.api=m["default"],await f(a);default:}}}async payParams(e,t=[],a){if(o.Z.evm.includes(this.blockchain)){let n={blockchain:this.blockchain,address:this.address,api:{},method:e,params:t,provider:this.provider,gasLimit:this.gasLimit,gwei:this.gwei,value:a};switch(this.type){case"stock":return n.api=v["default"],await f(n);case"lock":return n.api=m["default"],await f(n);default:}}}}var g=w,M={Factory:b,Call:g}}}]);