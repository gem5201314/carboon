(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b01050"],{"42e6":function(a,t,e){var n=e("c23f");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=e("499e").default;i("a9623a74",n,!0,{})},c23f:function(a,t,e){t=a.exports=e("2350")(!1),t.push([a.i,"\n.index[data-v-8d3da286] {\n  height: 100%;\n  overflow: auto;\n}\n.index .head[data-v-8d3da286] {\n  position: relative;\n}\n.index .head .search-div[data-v-8d3da286] {\n  width: 100%;\n  height: 1rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 2rem;\n  margin-top: 0.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  text-align: right;\n  padding-right: 1rem;\n}\n",""])},ded0:function(a,t,e){"use strict";e.r(t);var n=e("36b6"),i=(n["a"],{components:{Swiper:n["a"],MyNav:function(a){return e.e("chunk-add3c502").then(function(){var t=[e("7db3")];a.apply(null,t)}.bind(this)).catch(e.oe)},MyTitle:function(a){return e.e("chunk-7190ba5e").then(function(){var t=[e("c23c")];a.apply(null,t)}.bind(this)).catch(e.oe)},MyPalace1:function(a){return e.e("chunk-2c61bf04").then(function(){var t=[e("7ee2")];a.apply(null,t)}.bind(this)).catch(e.oe)},MyPalace2:function(a){return e.e("chunk-666667ae").then(function(){var t=[e("e643")];a.apply(null,t)}.bind(this)).catch(e.oe)},MyPalace3:function(a){return e.e("chunk-f6d2b4b0").then(function(){var t=[e("f412")];a.apply(null,t)}.bind(this)).catch(e.oe)},MyAlert:function(a){return e.e("chunk-09c304e4").then(function(){var t=[e("062d")];a.apply(null,t)}.bind(this)).catch(e.oe)}},data:function(){return{alert_show:!0,data_list:[{url:"",img:"http://img.super-dreamers.com/xqmall/images/94baa5e8-2d48-4bf4-939e-dad2ed38361f.jpg@75Q",title:"这是杨幂",fallbackImg:"@/assets/public-img/1.jpg",id:""}],dataMyPalace1:[{name:"我要你杨幂",imgurl:"http://img.super-dreamers.com/xqmall/images/42adfb91-4663-4b8e-9306-a9821bc48294.jpg@75Q",update:"231"},{name:"我要你杨幂",imgurl:"http://img.super-dreamers.com/xqmall/images/42adfb91-4663-4b8e-9306-a9821bc48294.jpg@75Q",update:"231"},{name:"我要你杨幂",imgurl:"http://img.super-dreamers.com/xqmall/images/42adfb91-4663-4b8e-9306-a9821bc48294.jpg@75Q",update:"231"},{name:"我要你杨幂",imgurl:"http://img.super-dreamers.com/xqmall/images/42adfb91-4663-4b8e-9306-a9821bc48294.jpg@75Q",update:"231"}],nav_list:[{icon:"girl",title:"女生榜",router:""},{icon:"boy",title:"男生榜",router:""},{icon:"hot",title:"人气榜",router:""},{icon:"news",title:"新作榜",router:""},{icon:"run",title:"追更榜",router:""}],palace_show_data:{hotRecommends:[],newCartoons:[],todayRecommends:[],realityCartoons:[]}}},methods:{set_alert:function(){this.alert_show=!1},search_router:function(){this.$router.push({name:"search"})},get_index_data:function(){var a=this,t={emulateJSON:!0};this.$HTTP.homepage_http_index(t,function(t){a.palace_show_data=t["indexBean"],a.data_list=[],t["indexBean"]["adVos"].map(function(t,e){a.data_list.push({img:t["miPicUrl"],id:t["id"]})})})}},created:function(){this.get_index_data()}}),r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"index",on:{click:a.set_alert}},[e("div",{staticClass:"head"},[e("Swiper",{attrs:{list:a.data_list,height:"200px"}}),a._v(" "),e("div",{staticClass:"search-div",on:{click:a.search_router}},[e("icon",{attrs:{name:"search",width:"20",height:"20"}})],1)],1),a._v(" "),e("MyNav",{attrs:{nav_list:a.nav_list}}),a._v(" "),e("MyTitle",{attrs:{centerTextData:"新推荐动词"}}),a._v(" "),e("MyPalace2",{attrs:{dataMyPalace2:a.palace_show_data["todayRecommends"]}}),a._v(" "),e("MyTitle",{attrs:{centerTextData:"激情荡漾"}}),a._v(" "),e("MyPalace3",{attrs:{dataMyPalace3:a.palace_show_data["newCartoons"]}}),a._v(" "),e("MyTitle",{attrs:{centerTextData:"精品完结"}}),a._v(" "),e("MyPalace2",{attrs:{dataMyPalace2:a.palace_show_data["hotRecommends"]}}),a._v(" "),e("MyTitle",{attrs:{centerTextData:"真人漫画"}}),a._v(" "),e("MyPalace3",{attrs:{dataMyPalace3:a.palace_show_data["realityCartoons"]}}),a._v(" "),e("MyTitle",{attrs:{centerTextData:"精品完结"}}),a._v(" "),e("MyPalace1",{attrs:{dataMyPalace1:a.dataMyPalace1}}),a._v(" "),a.alert_show?e("MyAlert",{on:{click:a.set_alert}}):a._e()],1)},c=[],o=e("2455");function l(a){e("42e6")}var s=!1,d=l,u="data-v-8d3da286",h=null,p=Object(o["a"])(i,r,c,s,d,u,h);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-49b01050.f6978143.js.map