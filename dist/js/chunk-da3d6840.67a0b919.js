(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da3d6840"],{"83b8":function(t,n,i){"use strict";i.r(n);var e=i("9d32"),o=(e["a"],{props:["isEdit","historyData"],components:{CheckIcon:e["a"]},data:function(){return{}},methods:{get_book_info:function(t){this.isEdit||this.$router.push({name:"bookinfo",query:{id:123}})}},created:function(){}}),d=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"myhistory"}},[i("div",{staticClass:"myhistory"},[i("div",{staticClass:"content"},t._l(t.historyData,function(n,e){return i("div",{key:e,staticClass:"item",on:{click:function(i){t.get_book_info(n)}}},[t.isEdit?i("div",{staticClass:"check-div"},[i("CheckIcon",{attrs:{value:n["checked"],type:"plain"},on:{"update:value":function(i){t.$set(n,"checked",i)}}})],1):t._e(),t._v(" "),i("div",{staticClass:"left-div"},[i("img",{attrs:{src:n["imgurl"]}})]),t._v(" "),i("div",{staticClass:"right-div"},[i("h4",[t._v(t._s(n["title"]))]),t._v(" "),i("h5",[t._v("更新到"+t._s(n["update"])+"话")]),t._v(" "),i("p",[t._v("续看"+t._s(n["look"])+"话")])])])}))])])},a=[],s=i("2455");function c(t){i("8c2c")}var r=!1,l=c,h="data-v-106663dc",p=null,m=Object(s["a"])(o,d,a,r,l,h,p);n["default"]=m.exports},"8c2c":function(t,n,i){var e=i("9cf1");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("499e").default;o("10399141",e,!0,{})},"9cf1":function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,"\n.myhistory .content[data-v-106663dc] {\n  width: 100%;\n  background-color: #fff;\n}\n.myhistory .content .item[data-v-106663dc] {\n  width: 100%;\n  height: 4rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px;\n}\n.myhistory .content .item .check-div[data-v-106663dc] {\n  width: 15%;\n  min-width: 55px;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.myhistory .content .item .left-div[data-v-106663dc] {\n  width: 30%;\n  min-width: 111px;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.myhistory .content .item .left-div img[data-v-106663dc] {\n  width: 100%;\n  height: 100%;\n}\n.myhistory .content .item .right-div[data-v-106663dc] {\n  width: 55%;\n  height: 100%px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 10px;\n  padding-top: 5px;\n  position: relative;\n}\n.myhistory .content .item .right-div h4[data-v-106663dc] {\n  margin: 0;\n  padding: 0;\n  font-size: 0.6rem;\n  color: #333;\n  text-align: left;\n}\n.myhistory .content .item .right-div h5[data-v-106663dc] {\n  margin: 0;\n  padding: 0;\n  color: #909090;\n  font-size: 0.45rem;\n  text-align: left;\n  margin-top: 0.2rem;\n}\n.myhistory .content .item .right-div p[data-v-106663dc] {\n  margin: 0;\n  padding: 0;\n  color: #fd7d49;\n  font-size: 0.5rem;\n  text-align: left;\n  bottom: 0px;\n  position: absolute;\n}\n",""])}}]);
//# sourceMappingURL=chunk-da3d6840.67a0b919.js.map