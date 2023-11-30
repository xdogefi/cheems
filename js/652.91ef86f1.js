"use strict";(self["webpackChunkgame"]=self["webpackChunkgame"]||[]).push([[652],{1652:function(e,n,t){t.r(n),n["default"]=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"addr",type:"address"}],name:"Deploy",type:"event"},{inputs:[{internalType:"address",name:"tokenAddr",type:"address"},{internalType:"uint256",name:"raiseType",type:"uint256"},{internalType:"uint256",name:"totalUsdt",type:"uint256"},{internalType:"uint256",name:"maxUsdt",type:"uint256"},{internalType:"uint256",name:"maxAmount",type:"uint256"},{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"risk",type:"uint256"},{internalType:"uint256",name:"decimals",type:"uint256"}],name:"deployRaiseFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"addr",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"receiveERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"receiveETH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"raiseFundsAddr",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"sendRaiseFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"raiseFundsAddr",type:"address"},{internalType:"bool",name:"flag",type:"bool"}],name:"setRaiseFundsClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"raiseFundsAddr",type:"address"},{internalType:"string",name:"uri",type:"string"}],name:"setRaiseFundsUri",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"raiseFundsAddr",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"raiseFundsAddr",type:"address"},{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferETH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"limit",type:"uint256"}],name:"getRaiseList",outputs:[{components:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"raiseAddr",type:"address"},{internalType:"uint256",name:"raiseType",type:"uint256"},{internalType:"uint256",name:"totalUsdt",type:"uint256"},{internalType:"uint256",name:"maxUsdt",type:"uint256"},{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"maxAmount",type:"uint256"},{internalType:"uint256",name:"alreadyAmount",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"decimals",type:"uint256"},{internalType:"uint256",name:"risk",type:"uint256"},{internalType:"string",name:"baseURI",type:"string"},{internalType:"bool",name:"isClaim",type:"bool"}],internalType:"struct TeafiAppRaiseFunds.raiseInfo[]",name:"items",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"raiseMeta",outputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"raiseAddr",type:"address"},{internalType:"uint256",name:"raiseType",type:"uint256"},{internalType:"uint256",name:"totalUsdt",type:"uint256"},{internalType:"uint256",name:"maxUsdt",type:"uint256"},{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"maxAmount",type:"uint256"},{internalType:"uint256",name:"alreadyAmount",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"decimals",type:"uint256"},{internalType:"uint256",name:"risk",type:"uint256"},{internalType:"string",name:"baseURI",type:"string"},{internalType:"bool",name:"isClaim",type:"bool"}],stateMutability:"view",type:"function"}]}}]);