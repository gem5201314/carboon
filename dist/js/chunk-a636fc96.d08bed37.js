(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a636fc96"],{"07bd":function(n,t,e){"use strict";e.r(t);e("c5f6");var i=e("64da"),o=(i["b"],Number,String,String,String,String,Boolean,Function,String,Boolean,Number,String,{name:"tab",mixins:[i["b"]],mounted:function(){var n=this;this.$nextTick(function(){setTimeout(function(){n.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4},barPosition:{type:String,default:"bottom",validator:function(n){return-1!==["bottom","top"].indexOf(n)}}},computed:{barLeft:function(){if(this.hasReady){var n=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return"".concat(this.currentIndex*(100/n),"%")}},barRight:function(){if(this.hasReady){var n=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return"".concat((n-this.currentIndex-1)*(100/n),"%")}},innerBarStyle:function(){return{width:"function"===typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var n={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?n.backgroundColor="transparent":n.backgroundColor=this.barActiveColor||this.activeColor,n},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(n,t){this.direction=n>t?"forward":"backward",this.$emit("on-index-change",n,t),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var n=this;if(this.scrollable&&this.$children&&this.$children.length){var t=this.$children[this.currentIndex].$el,e=0,i=function i(){var o=15,a=n.$refs.nav;a.scrollLeft+=(t.offsetLeft-(a.offsetWidth-t.offsetWidth)/2-a.scrollLeft)/o,++e<o&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}}}}),a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-tab-wrap",class:"top"===n.barPosition?"vux-tab-bar-top":""},[e("div",{staticClass:"vux-tab-container"},[e("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!n.animate},{scrollable:n.scrollable}]},[n._t("default"),n._v(" "),n.animate?e("div",{staticClass:"vux-tab-ink-bar",class:n.barClass,style:n.barStyle},[n.customBarWidth?e("span",{staticClass:"vux-tab-bar-inner",style:n.innerBarStyle}):n._e()]):n._e()],2)])])},r=[],l=e("2455");function c(n){e("39bc")}var d=!1,s=c,u=null,h=null,b=Object(l["a"])(o,a,r,d,s,u,h),f=b.exports,p=(i["a"],String,Boolean,String,String,String,{name:"tab-item",mixins:[i["a"]],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),m=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-tab-item",class:[n.currentSelected?n.activeClass:"",{"vux-tab-selected":n.currentSelected,"vux-tab-disabled":n.disabled}],style:n.style,on:{click:n.onItemClick}},[n._t("default"),n._v(" "),"undefined"!==typeof n.badgeLabel&&""!==n.badgeLabel?e("span",{staticClass:"vux-tab-item-badge",style:{background:n.badgeBackground,color:n.badgeColor}},[n._v("\n  "+n._s(n.badgeLabel))]):n._e()],2)},g=[],x=!1,v=null,y=null,C=null,z=Object(l["a"])(p,m,g,x,v,y,C),k=z.exports,w={components:{Tab:f,TabItem:k,MyInfo:function(n){return e.e("chunk-fd39c484").then(function(){var t=[e("b06f")];n.apply(null,t)}.bind(this)).catch(e.oe)},MySelect:function(n){return e.e("chunk-16385966").then(function(){var t=[e("b68e")];n.apply(null,t)}.bind(this)).catch(e.oe)},MyHead:function(n){return e.e("chunk-5fa9ad10").then(function(){var t=[e("fde6")];n.apply(null,t)}.bind(this)).catch(e.oe)}},data:function(){return{current_tab:"info",dataHead:{},selectData:[{time:"2018-04-25",dis:"第1话 爱穿丝袜的女人，到底有多诱惑？",looks:"500",id:"1",imgurl:"http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"},{time:"2018-04-25",dis:"第1话 爱穿丝袜的女人，到底有多诱惑？",looks:"500",id:"1",imgurl:"http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"},{time:"2018-04-25",dis:"第1话 爱穿丝袜的女人，到底有多诱惑？",looks:"500",id:"1",imgurl:"http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"},{time:"2018-04-25",dis:"第1话 爱穿丝袜的女人，到底有多诱惑？",looks:"500",id:"1",imgurl:"http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"},{time:"2018-04-25",dis:"第1话 爱穿丝袜的女人，到底有多诱惑？",looks:"500",id:"1",imgurl:"http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"}]}},methods:{tab_select:function(n){var t=this;this.current_tab=n,this.selectData=[];var e={id:1114,pageSize:10,pageNo:1,sort:0};this.$HTTP.bookinfo_http_select_data(e,function(n){t.selectData=n["list"]})},get_book_info:function(){var n=this,t={id:1114};this.$HTTP.bookinfo_http_data(t,function(t){n.dataHead=t["cartoon"]})}},created:function(){this.get_book_info()}},N=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"index"},[e("div",[e("div",{staticClass:"head"},[e("MyHead",{attrs:{dataHead:n.dataHead}})],1),n._v(" "),e("div",{staticClass:"main-body"},[e("div",[e("tab",{attrs:{"bar-active-color":"#fd7d49","active-color":"#fd7d49"},on:{"on-item-click":n.tab_select}},[e("tab-item",{attrs:{selected:""},on:{"on-item-click":function(t){n.tab_select("info")}}},[n._v("详情")]),n._v(" "),e("tab-item",{on:{"on-item-click":function(t){n.tab_select("select")}}},[n._v("选集")])],1),n._v(" "),e("MySelect",{directives:[{name:"show",rawName:"v-show",value:"select"==n.current_tab,expression:"current_tab=='select'"}],attrs:{selectData:n.selectData}}),n._v(" "),e("MyInfo",{directives:[{name:"show",rawName:"v-show",value:"info"==n.current_tab,expression:"current_tab=='info'"}]})],1)])])])},S=[];function $(n){e("3a14")}var _=!1,B=$,I="data-v-52e2bf20",T=null,W=Object(l["a"])(w,N,S,_,B,I,T);t["default"]=W.exports},"1cea":function(n,t,e){"use strict";e("a481");function i(n){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}function o(n){return o="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(n){return i(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":i(n)},o(n)}function a(n,t){if(!/^javas/.test(n)&&n){var e="object"===o(n)||t&&"string"===typeof n&&!/http/.test(n);e?"object"===o(n)&&!0===n.replace?t.replace(n):"BACK"===n?t.go(-1):t.push(n):window.location.href=n}}e.d(t,"a",function(){return a})},"386b":function(n,t,e){var i=e("5ca1"),o=e("79e5"),a=e("be13"),r=/"/g,l=function(n,t,e,i){var o=String(a(n)),l="<"+t;return""!==e&&(l+=" "+e+'="'+String(i).replace(r,"&quot;")+'"'),l+">"+o+"</"+t+">"};n.exports=function(n,t){var e={};e[n]=t(l),i(i.P+i.F*o(function(){var t=""[n]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",e)}},"39bc":function(n,t,e){var i=e("f837");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("499e").default;o("ae138868",i,!0,{})},"3a14":function(n,t,e){var i=e("784a");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("499e").default;o("1c36cd46",i,!0,{})},"64da":function(n,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"a",function(){return a});e("b54a"),e("c5f6");var i=e("1cea"),o={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var n=this.$children,t=0;t<n.length;t++)n[t].currentIndex=t,n[t].currentSelected&&(this.index=t)}}},props:{value:Number},watch:{currentIndex:function(n,t){t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!1),n>-1&&this.$children[n]&&(this.$children[n].currentSelected=!0),this.$emit("input",n),this.$emit("on-index-change",n,t)},index:function(n){this.currentIndex=n},value:function(n){this.index=n}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},a={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.updateIndex()})},methods:{onItemClick:function(n){var t=this;this.$parent.preventDefault?this.$parent.$emit("on-before-index-change",this.currentIndex):("undefined"!==typeof this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){t.$emit("on-item-click",t.currentIndex)})),!0===n&&Object(i["a"])(this.link,this.$router))}},watch:{currentSelected:function(n){n&&(this.$parent.index=this.currentIndex)},selected:function(n){this.currentSelected=n}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},"784a":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n.index[data-v-52e2bf20] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: #f2f5f5;\n}\n",""])},b54a:function(n,t,e){"use strict";e("386b")("link",function(n){return function(t){return n(this,"a","href",t)}})},f837:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-tab-ink-bar {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #04BE02;\n  text-align: center;\n}\n.vux-tab-ink-bar-transition-forward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n}\n.vux-tab-ink-bar-transition-backward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab-bar-top .vux-tab-ink-bar {\n  top: 0;\n}\n.vux-tab {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #fff;\n  height: 44px;\n  position: relative;\n}\n.vux-tab button {\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.vux-tab .vux-tab-item {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: -webkit-gradient(linear, left top, left bottom, from(#e5e5e5), color-stop(#e5e5e5), to(rgba(229, 229, 229, 0))) bottom left no-repeat;\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background-size: 100% 1px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 44px;\n  color: #666;\n}\n.vux-tab .vux-tab-item.vux-tab-selected {\n  color: #04BE02;\n  border-bottom: 3px solid #04BE02;\n}\n.vux-tab-bar-top .vux-tab .vux-tab-item {\n  background: -webkit-gradient(linear, left top, left bottom, from(#e5e5e5), color-stop(#e5e5e5), to(rgba(229, 229, 229, 0))) top left no-repeat;\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) top left no-repeat;\n  background-size: 100% 1px;\n}\n.vux-tab-bar-top .vux-tab .vux-tab-item.vux-tab-selected {\n  border-bottom: none;\n  border-top: 3px solid #04BE02;\n}\n.vux-tab .vux-tab-item.vux-tab-disabled {\n  color: #ddd;\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {\n  background: 0 0;\n}\n/** when=prop:custom-bar-width **/\n.vux-tab-bar-inner {\n  display: block;\n  background-color: #04BE02;\n  margin: auto;\n  height: 100%;\n  -webkit-transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab-item-badge {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  height: 18px;\n  min-width: 18px;\n  padding: 0 4px;\n  border-radius: 30px;\n  margin: auto 0 auto 4px;\n  line-height: 18px;\n  font-size: 11px;\n  background-clip: padding-box;\n  vertical-align: middle;\n}\n.vux-tab-wrap {\n  position: relative;\n  padding-top: 44px;\n}\n.vux-tab-container {\n  height: 44px;\n  top: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  position: absolute;\n}\n.scrollable {\n  overflow-y: hidden;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-bottom: 17px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.scrollable::-webkit-scrollbar {\n  display: none;\n}\n.scrollable .vux-tab-ink-bar {\n  bottom: 17px;\n  position: absolute;\n}\n.scrollable .vux-tab-item {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 22%;\n          flex: 0 0 22%;\n}\n",""])}}]);
//# sourceMappingURL=chunk-a636fc96.d08bed37.js.map