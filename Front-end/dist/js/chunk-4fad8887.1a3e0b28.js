(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fad8887"],{"25f0":function(t,e,n){"use strict";var a=n("e330"),r=n("5e77").PROPER,i=n("6eeb"),o=n("825a"),s=n("3a9b"),c=n("577e"),u=n("d039"),l=n("ad6d"),d="toString",p=RegExp.prototype,f=p[d],b=a(l),g=u((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),h=r&&f.name!=d;(g||h)&&i(RegExp.prototype,d,(function(){var t=o(this),e=c(t.source),n=t.flags,a=c(void 0===n&&s(p,t)&&!("flags"in p)?b(t):n);return"/"+e+"/"+a}),{unsafe:!0})},"78b0":function(t,e,n){t.exports=n.p+"img/no-data.fdaa3a64.png"},9190:function(t,e,n){},be9b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"borrowingMarket"},[a("RainbowPanel",{staticClass:"market",scopedSlots:t._u([{key:"name",fn:function(){return[t._v(" Token Market ")]},proxy:!0},{key:"content",fn:function(){return[t._l(t.camArr,(function(e,n){return a("div",{key:n},[a("TableItem",{attrs:{tableData:e,"operate-o-name":"Approve","operate-r-name":"buy"},on:{operateOClick:t.approve,operateRClick:function(e){t.buyDialog=!0,t.currentId=n+1}}})],1)})),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.camArr.length,expression:"camArr.length==0"}],staticClass:"no-data"},[a("img",{attrs:{src:n("78b0"),alt:""}})])]},proxy:!0}])}),a("RainbowPanel",{staticClass:"my-order",scopedSlots:t._u([{key:"name",fn:function(){return[t._v(" My Order ")]},proxy:!0}])}),a("el-dialog",{attrs:{title:"Borrow Message",visible:t.buyDialog,width:"400px"},on:{"update:visible":function(e){t.buyDialog=e}}},[a("div",{staticClass:"order"},[a("div",{staticClass:"price-box"},[a("span",[t._v("tokenId")]),a("strong",[t._v(" "+t._s(t.currentId))])]),a("div",{staticClass:"price-box"},[a("span",[t._v("buy value")]),a("div",{staticClass:"input-box"},[a("el-input",{staticClass:"input2",attrs:{size:"mini"},model:{value:t.buyValue,callback:function(e){t.buyValue=e},expression:"buyValue"}})],1)]),a("div",{staticClass:"operating"},[a("el-button",{staticClass:"button3",attrs:{size:"small"},on:{click:function(e){t.buyDialog=!1}}},[t._v("Cancel")]),a("el-button",{staticClass:"button1",attrs:{size:"small "},on:{click:t.buy}},[t._v("Submit")])],1)])])],1)},r=[],i=n("5530"),o=n("1da1"),s=(n("d3b7"),n("25f0"),n("159b"),n("96cf"),n("2f62")),c=n("718f"),u=n("8796"),l={name:"borrowingMarket",components:{TableItem:c["a"]},data:function(){return{currentId:null,buyDialog:!1,buyValue:0,currentPage:1,pagesize:5,currentPage2:1,pagesize2:5,tableData:[],camArr:[],buyForm:{}}},created:function(){this.initData()},methods:{handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t},handleSizeChange2:function(t){this.pagesize2=t},handleCurrentChange2:function(t){this.currentPage2=t},isLiquidation:function(t){return(new Date).getTime()-1e3*t.expireTime<0},initData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isConnected){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$store.dispatch("TokenExchangeMarket/listLength").then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(n),a=0;case 2:if(!(a<n)){e.next=8;break}return e.next=5,t.$store.dispatch("TokenExchangeMarket/list",a).then((function(e){t.tableData.push(e)}));case 5:a++,e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})))()},liquidation:function(t){var e=this;console.log(t),this.$store.dispatch("mortGageLoan/liquidation",t).then((function(t){console.log(t),e.$message.success("Successful liquidation")})).catch((function(t){console.log(t),e.$message.error("Liquidation failure"+t)}))},borrowAgain:function(t){var e=this;this.$store.dispatch("LoanMarket/repayment",t).then((function(t){console.log(t),e.$message.success("Successful re borrowing")})).catch((function(t){console.log(t),e.$message.error("Failed to borrow again"+t)}))},approve:function(){this.$store.dispatch("RBT/approve",{spender:u["a"].getContractAddress("TokenExchangeMarket"),amount:"10000000000000"})},buy:function(){this.$store.dispatch("TokenExchangeMarket/bidToken",{from:this.account,id:this.currentId.toString(),bid:this.buyValue.toString(),_types:u["a"].getContractAddress("RbtDeposit721")}).then((function(t){console.log(t),alert("Loan success")})).catch((function(t){console.log(t),alert(t)}))}},computed:Object(i["a"])({},Object(s["b"])(["isConnected","account"])),watch:{account:function(){this.initData()},tableData:function(){var t=[];this.tableData.forEach((function(e,n){var a={index:n+1,nameObj:{title:"TokenId",data:e.tokenId},infoArr:[{title:"amount",data:e.amount},{title:"ownerOf",data:e.ownerOf},{title:"tokenMetadata",data:e.tokenMetadata}],detailArr:[]};t.push(a)})),this.camArr=t}}},d=l,p=(n("ce89"),n("2877")),f=Object(p["a"])(d,a,r,!1,null,"b197932c",null);e["default"]=f.exports},ce89:function(t,e,n){"use strict";n("9190")}}]);
//# sourceMappingURL=chunk-4fad8887.1a3e0b28.js.map