(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20f67cf2"],{"0500":function(t,n,a){var e=a("50d1");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("499e").default;i("51cd3757",e,!0,{})},4363:function(t,n,a){"use strict";a.r(n);var e={components:{MyList:function(t){return a.e("chunk-64d33eb6").then(function(){var n=[a("52ff")];t.apply(null,n)}.bind(this)).catch(a.oe)}},data:function(){return{current_nav_data:"4",nav_list:[{text:"女生榜",id:"4"},{text:"男生榜",id:"5"},{text:"人气榜",id:"3"},{text:"新作榜",id:"2"},{text:"追更榜",id:"20"}],rankData:[]}},methods:{nav_click:function(t){this.current_nav_data=t["id"],this.get_data()},get_data:function(){var t=this,n={type:this.current_nav_data};this.$HTTP.ranking_http_rank(n,function(n){t.rankData=n["cartoonList"]})}},created:function(){this.get_data()}},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"index"},[a("div",{staticClass:"head-div"},[a("div",{staticClass:"content"},t._l(t.nav_list,function(n,e){return a("div",{key:e,class:t.current_nav_data==n["id"]?"item item-active":"item",on:{click:function(a){t.nav_click(n)}}},[a("span",[t._v(t._s(n["text"]))])])}))]),t._v(" "),a("div",{staticClass:"main-content"},[a("MyList",{attrs:{rankData:t.rankData}})],1)])},c=[],d=a("2455");function o(t){a("0500")}var r=!1,s=o,l="data-v-8e1bc338",f=null,u=Object(d["a"])(e,i,c,r,s,l,f);n["default"]=u.exports},"50d1":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,"\n.index[data-v-8e1bc338] {\n  height: 100%;\n}\n.head-div[data-v-8e1bc338] {\n  height: 2rem;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fd7d49;\n}\n.head-div .content[data-v-8e1bc338] {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.head-div .content .item[data-v-8e1bc338] {\n  height: 1rem;\n  color: #fff;\n  font-size: 0.58rem;\n  text-align: center;\n}\n.item-active[data-v-8e1bc338] {\n  border-bottom: 2px solid #fff;\n}\n.main-content[data-v-8e1bc338] {\n  height: 100%;\n  background: #fd7d49;\n  padding: 7px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: auto;\n}\n",""])}}]);
//# sourceMappingURL=chunk-20f67cf2.f29abc8e.js.map