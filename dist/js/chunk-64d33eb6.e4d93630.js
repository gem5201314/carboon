(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64d33eb6"],{"1cea":function(n,t,e){"use strict";e("a481");function o(n){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function r(n){return r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(n){return o(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":o(n)},r(n)}function i(n,t){if(!/^javas/.test(n)&&n){var e="object"===r(n)||t&&"string"===typeof n&&!/http/.test(n);e?"object"===r(n)&&!0===n.replace?t.replace(n):"BACK"===n?t.go(-1):t.push(n):window.location.href=n}}e.d(t,"a",function(){return i})},3022:function(n,t,e){(function(n,o){var r=/%[sdj%]/g;t.format=function(n){if(!C(n)){for(var t=[],e=0;e<arguments.length;e++)t.push(s(arguments[e]));return t.join(" ")}e=1;for(var o=arguments,i=o.length,a=String(n).replace(r,function(n){if("%%"===n)return"%";if(e>=i)return n;switch(n){case"%s":return String(o[e++]);case"%d":return Number(o[e++]);case"%j":try{return JSON.stringify(o[e++])}catch(n){return"[Circular]"}default:return n}}),l=o[e];e<i;l=o[++e])v(l)||!_(l)?a+=" "+l:a+=" "+s(l);return a},t.deprecate=function(e,r){if(k(n.process))return function(){return t.deprecate(e,r).apply(this,arguments)};if(!0===o.noDeprecation)return e;var i=!1;function a(){if(!i){if(o.throwDeprecation)throw new Error(r);o.traceDeprecation?console.trace(r):console.error(r),i=!0}return e.apply(this,arguments)}return a};var i,a={};function s(n,e){var o={seen:[],stylize:c};return arguments.length>=3&&(o.depth=arguments[2]),arguments.length>=4&&(o.colors=arguments[3]),x(e)?o.showHidden=e:e&&t._extend(o,e),k(o.showHidden)&&(o.showHidden=!1),k(o.depth)&&(o.depth=2),k(o.colors)&&(o.colors=!1),k(o.customInspect)&&(o.customInspect=!0),o.colors&&(o.stylize=l),u(o,n,o.depth)}function l(n,t){var e=s.styles[t];return e?"["+s.colors[e][0]+"m"+n+"["+s.colors[e][1]+"m":n}function c(n,t){return n}function d(n){var t={};return n.forEach(function(n,e){t[n]=!0}),t}function u(n,e,o){if(n.customInspect&&e&&$(e.inspect)&&e.inspect!==t.inspect&&(!e.constructor||e.constructor.prototype!==e)){var r=e.inspect(o,n);return C(r)||(r=u(n,r,o)),r}var i=f(n,e);if(i)return i;var a=Object.keys(e),s=d(a);if(n.showHidden&&(a=Object.getOwnPropertyNames(e)),S(e)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return p(e);if(0===a.length){if($(e)){var l=e.name?": "+e.name:"";return n.stylize("[Function"+l+"]","special")}if(N(e))return n.stylize(RegExp.prototype.toString.call(e),"regexp");if(I(e))return n.stylize(Date.prototype.toString.call(e),"date");if(S(e))return p(e)}var c,x="",v=!1,y=["{","}"];if(m(e)&&(v=!0,y=["[","]"]),$(e)){var w=e.name?": "+e.name:"";x=" [Function"+w+"]"}return N(e)&&(x=" "+RegExp.prototype.toString.call(e)),I(e)&&(x=" "+Date.prototype.toUTCString.call(e)),S(e)&&(x=" "+p(e)),0!==a.length||v&&0!=e.length?o<0?N(e)?n.stylize(RegExp.prototype.toString.call(e),"regexp"):n.stylize("[Object]","special"):(n.seen.push(e),c=v?h(n,e,o,s,a):a.map(function(t){return b(n,e,o,s,t,v)}),n.seen.pop(),g(c,x,y)):y[0]+x+y[1]}function f(n,t){if(k(t))return n.stylize("undefined","undefined");if(C(t)){var e="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return n.stylize(e,"string")}return w(t)?n.stylize(""+t,"number"):x(t)?n.stylize(""+t,"boolean"):v(t)?n.stylize("null","null"):void 0}function p(n){return"["+Error.prototype.toString.call(n)+"]"}function h(n,t,e,o,r){for(var i=[],a=0,s=t.length;a<s;++a)D(t,String(a))?i.push(b(n,t,e,o,String(a),!0)):i.push("");return r.forEach(function(r){r.match(/^\d+$/)||i.push(b(n,t,e,o,r,!0))}),i}function b(n,t,e,o,r,i){var a,s,l;if(l=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]},l.get?s=l.set?n.stylize("[Getter/Setter]","special"):n.stylize("[Getter]","special"):l.set&&(s=n.stylize("[Setter]","special")),D(o,r)||(a="["+r+"]"),s||(n.seen.indexOf(l.value)<0?(s=v(e)?u(n,l.value,null):u(n,l.value,e-1),s.indexOf("\n")>-1&&(s=i?s.split("\n").map(function(n){return"  "+n}).join("\n").substr(2):"\n"+s.split("\n").map(function(n){return"   "+n}).join("\n"))):s=n.stylize("[Circular]","special")),k(a)){if(i&&r.match(/^\d+$/))return s;a=JSON.stringify(""+r),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=n.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=n.stylize(a,"string"))}return a+": "+s}function g(n,t,e){var o=n.reduce(function(n,t){return 0,t.indexOf("\n")>=0&&0,n+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return o>60?e[0]+(""===t?"":t+"\n ")+" "+n.join(",\n  ")+" "+e[1]:e[0]+t+" "+n.join(", ")+" "+e[1]}function m(n){return Array.isArray(n)}function x(n){return"boolean"===typeof n}function v(n){return null===n}function y(n){return null==n}function w(n){return"number"===typeof n}function C(n){return"string"===typeof n}function z(n){return"symbol"===typeof n}function k(n){return void 0===n}function N(n){return _(n)&&"[object RegExp]"===E(n)}function _(n){return"object"===typeof n&&null!==n}function I(n){return _(n)&&"[object Date]"===E(n)}function S(n){return _(n)&&("[object Error]"===E(n)||n instanceof Error)}function $(n){return"function"===typeof n}function j(n){return null===n||"boolean"===typeof n||"number"===typeof n||"string"===typeof n||"symbol"===typeof n||"undefined"===typeof n}function E(n){return Object.prototype.toString.call(n)}function O(n){return n<10?"0"+n.toString(10):n.toString(10)}t.debuglog=function(n){if(k(i)&&(i=Object({NODE_ENV:"production",BASE_URL:"/"}).NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var e=o.pid;a[n]=function(){var o=t.format.apply(t,arguments);console.error("%s %d: %s",n,e,o)}}else a[n]=function(){};return a[n]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=m,t.isBoolean=x,t.isNull=v,t.isNullOrUndefined=y,t.isNumber=w,t.isString=C,t.isSymbol=z,t.isUndefined=k,t.isRegExp=N,t.isObject=_,t.isDate=I,t.isError=S,t.isFunction=$,t.isPrimitive=j,t.isBuffer=e("d60a");var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function B(){var n=new Date,t=[O(n.getHours()),O(n.getMinutes()),O(n.getSeconds())].join(":");return[n.getDate(),T[n.getMonth()],t].join(" ")}function D(n,t){return Object.prototype.hasOwnProperty.call(n,t)}t.log=function(){console.log("%s - %s",B(),t.format.apply(t,arguments))},t.inherits=e("3fb5"),t._extend=function(n,t){if(!t||!_(t))return n;var e=Object.keys(t),o=e.length;while(o--)n[e[o]]=t[e[o]];return n}}).call(this,e("c8ba"),e("4362"))},"386b":function(n,t,e){var o=e("5ca1"),r=e("79e5"),i=e("be13"),a=/"/g,s=function(n,t,e,o){var r=String(i(n)),s="<"+t;return""!==e&&(s+=" "+e+'="'+String(o).replace(a,"&quot;")+'"'),s+">"+r+"</"+t+">"};n.exports=function(n,t){var e={};e[n]=t(s),o(o.P+o.F*r(function(){var t=""[n]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",e)}},"3fb5":function(n,t){"function"===typeof Object.create?n.exports=function(n,t){n.super_=t,n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}})}:n.exports=function(n,t){n.super_=t;var e=function(){};e.prototype=t.prototype,n.prototype=new e,n.prototype.constructor=n}},4309:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n.list[data-v-8db4467e] {\n  background: #fff;\n  height: 100%;\n}\n.list .the-three[data-v-8db4467e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.list .the-three .item[data-v-8db4467e] {\n  width: 33%;\n  height: 13rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.list .the-three .item .top-show[data-v-8db4467e] {\n  width: 100%;\n  height: 2.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.list .the-three .item .top-show span[data-v-8db4467e] {\n  display: inline-block;\n}\n.list .the-three .item .top-show span h3[data-v-8db4467e] {\n  margin: 0;\n  font-size: 0.7rem;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n}\n.list .the-three .item .top-show span p[data-v-8db4467e] {\n  display: block;\n  padding: 0;\n  margin: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 1rem;\n  font-size: 0.6rem;\n  border-radius: 1rem;\n  height: 1rem;\n  text-align: center;\n  line-height: 1rem;\n  font-weight: 700;\n}\n.list .the-three .item .img-show[data-v-8db4467e] {\n  width: 100%;\n  height: 6rem;\n  border: 1px solid #000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.list .the-three .item .img-show img[data-v-8db4467e] {\n  width: 100%;\n  height: 100%;\n}\n.list .the-three .item .bottom-show[data-v-8db4467e] {\n  width: 100%;\n  height: 2rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.list .the-three .item .bottom-show h3[data-v-8db4467e] {\n  margin: 0;\n  font-size: 0.7rem;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  color: #000;\n}\n.list .the-three .item .bottom-show p[data-v-8db4467e] {\n  display: block;\n  padding: 0;\n  margin: 0;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 0.6rem;\n  height: 1rem;\n  text-align: center;\n  line-height: 1rem;\n  color: #693400;\n  font-weight: 700;\n}\n.list .after-div .after-content[data-v-8db4467e] {\n  width: 100%;\n}\n.list .after-div .after-content .after-item[data-v-8db4467e] {\n  width: 100%;\n  height: 5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 5px;\n}\n.list .after-div .after-content .after-item .left-div[data-v-8db4467e] {\n  width: 15%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.list .after-div .after-content .after-item .left-div p[data-v-8db4467e] {\n  margin: 0;\n  padding: 0;\n}\n.list .after-div .after-content .after-item .img-div[data-v-8db4467e] {\n  width: 25%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.list .after-div .after-content .after-item .img-div img[data-v-8db4467e] {\n  width: 100%;\n  height: 100%;\n}\n.list .after-div .after-content .after-item .text-div[data-v-8db4467e] {\n  width: 55%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 10px;\n  position: relative;\n}\n.list .after-div .after-content .after-item .text-div h3[data-v-8db4467e] {\n  margin-top: 0.1rem;\n  font-size: 0.6rem;\n  text-align: left;\n}\n.list .after-div .after-content .after-item .text-div h5[data-v-8db4467e] {\n  margin: 0;\n  padding: 0;\n  font-size: 0.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #909090;\n  text-align: left;\n  font-weight: 200;\n}\n.list .after-div .after-content .after-item .text-div .abs-div[data-v-8db4467e] {\n  position: absolute;\n  bottom: 0;\n}\n.list .after-div .after-content .after-item .text-div .abs-div span[data-v-8db4467e] {\n  padding-left: 0.3rem;\n  padding-right: 0.3rem;\n  text-align: center;\n  margin-right: 0.2rem;\n  font-size: 0.5rem;\n  float: left;\n  border: 1px solid #e6e2e2;\n  color: #909090;\n  border-radius: 50px;\n  margin-top: 0.5rem;\n}\n.weekRank[data-v-8db4467e] {\n  width: 100%;\n  height: 2rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.2rem;\n}\n.to-one p[data-v-8db4467e] {\n  background: #fdcc98;\n}\n.to-one h3[data-v-8db4467e] {\n  color: #fdcc98;\n}\n.to-two[data-v-8db4467e] {\n  padding-top: 1rem;\n}\n.to-two p[data-v-8db4467e] {\n  background: #e1dcda;\n}\n.to-two h3[data-v-8db4467e] {\n  color: #c3b7b6;\n}\n.to-three[data-v-8db4467e] {\n  padding-top: 1rem;\n}\n.to-three p[data-v-8db4467e] {\n  background: #e9c7b8;\n}\n.to-three h3[data-v-8db4467e] {\n  color: #e9c7b8;\n}\n",""])},5118:function(n,t,e){(function(n){var o="undefined"!==typeof n&&n||"undefined"!==typeof self&&self||window,r=Function.prototype.apply;function i(n,t){this._id=n,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(n){n&&n.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(n,t){clearTimeout(n._idleTimeoutId),n._idleTimeout=t},t.unenroll=function(n){clearTimeout(n._idleTimeoutId),n._idleTimeout=-1},t._unrefActive=t.active=function(n){clearTimeout(n._idleTimeoutId);var t=n._idleTimeout;t>=0&&(n._idleTimeoutId=setTimeout(function(){n._onTimeout&&n._onTimeout()},t))},e("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof n&&n.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof n&&n.clearImmediate||this&&this.clearImmediate}).call(this,e("c8ba"))},"52ff":function(n,t,e){"use strict";e.r(t);e("c5f6");var o=e("64da"),r=(o["b"],Number,{name:"button-tab",mixins:[o["b"]],props:{height:Number}}),i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-button-group"},[n._t("default")],2)},a=[],s=e("2455");function l(n){e("9229")}var c=!1,d=l,u=null,f=null,p=Object(s["a"])(r,i,a,c,d,u,f),h=p.exports,b=(o["a"],{name:"button-tab-item",mixins:[o["a"]],computed:{classes:function(){return{"vux-button-group-current":this.currentIndex===this.$parent.currentIndex,"vux-button-tab-item-first":0===this.currentIndex,"vux-button-tab-item-last":this.currentIndex===this.$parent.$children.length-1,"vux-button-tab-item-middle":this.currentIndex>0&&this.currentIndex!==this.$parent.$children.length-1}},style:function(){if(this.$parent.height)return{height:"".concat(this.$parent.height,"px"),lineHeight:"".concat(this.$parent.height,"px")}}}}),g=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a",{staticClass:"vux-button-tab-item",class:n.classes,style:n.style,attrs:{href:"javascript:"},on:{click:n.onItemClick}},[n._t("default")],2)},m=[],x=!1,v=null,y=null,w=null,C=Object(s["a"])(b,g,m,x,v,y,w),z=C.exports,k=(e("3022"),e("5118")),N={props:["rankData"],components:{ButtonTab:h,ButtonTabItem:z},data:function(){return{rank_one_three:[],rank_after_three:[]}},methods:{get_font_three:function(){this.rank_one_three=this.rankData.slice(0,3),this.rank_one_three=[this.rank_one_three[1],this.rank_one_three[0],this.rank_one_three[2]],this.rank_after_three=this.rankData.slice(3)},go_info:function(n){this.$router.push({name:"bookinfo",jquery:{id:123}})}},created:function(){},mounted:function(){var n=this;Object(k["setTimeout"])(function(){n.get_font_three()},500)}},_=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"list"}},[e("div",{staticClass:"list"},[n._t("weekRank"),n._v(" "),e("div",{staticClass:"the-three"},n._l(n.rank_one_three,function(t,o){return e("div",{key:o,class:1==o?"item to-one":3==o?"item to-three":"item to-two",on:{click:function(e){n.go_info(t)}}},[e("div",{staticClass:"top-show"},[e("span",{staticClass:"text"},[e("h3",[n._v("TOP")]),n._v(" "),e("p",[n._v(n._s(o))])])]),n._v(" "),e("div",{staticClass:"img-show"},[e("img",{attrs:{src:t["acrossPicUrl"]}})]),n._v(" "),e("div",{staticClass:"bottom-show"},[e("h3",[n._v(n._s(t["name"]))]),n._v(" "),e("p",[n._v(n._s(t["author"]))])])])})),n._v(" "),e("div",{staticClass:"after-div"},[e("div",{staticClass:"after-content"},n._l(n.rank_after_three,function(t,o){return e("div",{key:o,staticClass:"after-item",on:{click:function(e){n.go_info(t)}}},[e("div",{staticClass:"left-div"},[e("p",[n._v(n._s(o+3))])]),n._v(" "),e("div",{staticClass:"img-div"},[e("img",{attrs:{src:t["miPicUrl"]}})]),n._v(" "),e("div",{staticClass:"text-div"},[e("h3",[n._v(n._s(t["name"]))]),n._v(" "),e("h5",[n._v("更新到"+n._s(t["chapterCount"])+"话")]),n._v(" "),e("div",{staticClass:"abs-div"},n._l(t["labelNames"],function(t,o){return e("span",{key:o},[n._v(n._s(t))])}))])])}))])],2)])},I=[];function S(n){e("5e16")}var $=!1,j=S,E="data-v-8db4467e",O=null,T=Object(s["a"])(N,_,I,$,j,E,O);t["default"]=T.exports},"5e16":function(n,t,e){var o=e("4309");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=e("499e").default;r("4538bc07",o,!0,{})},6017:function(n,t,e){(function(n,t){(function(n,e){"use strict";if(!n.setImmediate){var o,r=1,i={},a=!1,s=n.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(n);l=l&&l.setTimeout?l:n,"[object process]"==={}.toString.call(n.process)?p():h()?b():n.MessageChannel?g():s&&"onreadystatechange"in s.createElement("script")?m():x(),l.setImmediate=c,l.clearImmediate=d}function c(n){"function"!==typeof n&&(n=new Function(""+n));for(var t=new Array(arguments.length-1),e=0;e<t.length;e++)t[e]=arguments[e+1];var a={callback:n,args:t};return i[r]=a,o(r),r++}function d(n){delete i[n]}function u(n){var t=n.callback,o=n.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(e,o);break}}function f(n){if(a)setTimeout(f,0,n);else{var t=i[n];if(t){a=!0;try{u(t)}finally{d(n),a=!1}}}}function p(){o=function(n){t.nextTick(function(){f(n)})}}function h(){if(n.postMessage&&!n.importScripts){var t=!0,e=n.onmessage;return n.onmessage=function(){t=!1},n.postMessage("","*"),n.onmessage=e,t}}function b(){var t="setImmediate$"+Math.random()+"$",e=function(e){e.source===n&&"string"===typeof e.data&&0===e.data.indexOf(t)&&f(+e.data.slice(t.length))};n.addEventListener?n.addEventListener("message",e,!1):n.attachEvent("onmessage",e),o=function(e){n.postMessage(t+e,"*")}}function g(){var n=new MessageChannel;n.port1.onmessage=function(n){var t=n.data;f(t)},o=function(t){n.port2.postMessage(t)}}function m(){var n=s.documentElement;o=function(t){var e=s.createElement("script");e.onreadystatechange=function(){f(t),e.onreadystatechange=null,n.removeChild(e),e=null},n.appendChild(e)}}function x(){o=function(n){setTimeout(f,0,n)}}})("undefined"===typeof self?"undefined"===typeof n?this:n:self)}).call(this,e("c8ba"),e("4362"))},"64da":function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return i});e("b54a"),e("c5f6");var o=e("1cea"),r={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var n=this.$children,t=0;t<n.length;t++)n[t].currentIndex=t,n[t].currentSelected&&(this.index=t)}}},props:{value:Number},watch:{currentIndex:function(n,t){t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!1),n>-1&&this.$children[n]&&(this.$children[n].currentSelected=!0),this.$emit("input",n),this.$emit("on-index-change",n,t)},index:function(n){this.currentIndex=n},value:function(n){this.index=n}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},i={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.updateIndex()})},methods:{onItemClick:function(n){var t=this;this.$parent.preventDefault?this.$parent.$emit("on-before-index-change",this.currentIndex):("undefined"!==typeof this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){t.$emit("on-item-click",t.currentIndex)})),!0===n&&Object(o["a"])(this.link,this.$router))}},watch:{currentSelected:function(n){n&&(this.$parent.index=this.currentIndex)},selected:function(n){this.currentSelected=n}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},9229:function(n,t,e){var o=e("ecc2");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=e("499e").default;r("c4734a12",o,!0,{})},b54a:function(n,t,e){"use strict";e("386b")("link",function(n){return function(t){return n(this,"a","href",t)}})},d60a:function(n,t){n.exports=function(n){return n&&"object"===typeof n&&"function"===typeof n.copy&&"function"===typeof n.fill&&"function"===typeof n.readUInt8}},ecc2:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content\'s padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-reddot,\n.vux-reddot-border,\n.vux-reddot-s {\n  position: relative;\n}\n.vux-reddot:after,\n.vux-reddot-border:after,\n.vux-reddot-s:after {\n  content: \'\';\n  position: absolute;\n  display: block;\n  width: 8px;\n  height: 8px;\n  background-color: #f74c31;\n  border-radius: 5px;\n  right: -3px;\n  top: -3px;\n  background-clip: padding-box;\n}\n.vux-reddot-border:before {\n  content: \'\';\n  position: absolute;\n  display: block;\n  width: 8px;\n  height: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  right: -4px;\n  top: -4px;\n  background-clip: padding-box;\n  padding: 1px;\n}\n.vux-reddot-s:after {\n  width: 6px;\n  height: 6px;\n  top: -5px;\n  right: -5px;\n}\n.vux-1px,\n.vux-1px-t,\n.vux-1px-b,\n.vux-1px-tb,\n.vux-1px-l,\n.vux-1px-r {\n  position: relative;\n}\n.vux-1px:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.vux-1px-t:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-b:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-l:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-1px-r:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-button-group {\n  -webkit-touch-callout: none;\n  display: box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vux-button-group > a.vux-button-tab-item-last {\n  border-top-right-radius: 32px;\n  border-bottom-right-radius: 32px;\n}\n.vux-button-group > a.vux-button-tab-item-last:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 1px;\n  border-right: 1px solid #04BE02;\n  border-top: 1px solid #04BE02;\n  border-bottom: 1px solid #04BE02;\n  border-left: none;\n  color: #04BE02;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  /* #2322 */\n  z-index: 1;\n  border-top-right-radius: 32px;\n  border-bottom-right-radius: 32px;\n}\n.vux-button-group > a.vux-button-tab-item-first {\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n}\n.vux-button-group > a.vux-button-tab-item-first:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #04BE02;\n  color: #04BE02;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n}\n.vux-button-group > a.vux-button-tab-item-middle:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 1px;\n  border-right: 1px solid #04BE02;\n  border-top: 1px solid #04BE02;\n  border-bottom: 1px solid #04BE02;\n  border-left: none;\n  color: #04BE02;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  /* #2322 */\n  z-index: 1;\n}\n.vux-button-group > a {\n  display: block;\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 30px;\n  padding: 0;\n  font-size: 14px;\n  line-height: 31px;\n  text-align: center;\n  color: #999;\n  white-space: nowrap;\n  background: #fdfdfd;\n  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);\n}\n.vux-button-group > a:after {\n  background-clip: padding-box;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.vux-button-group > a.vux-button-group-current {\n  color: #FFF;\n  background: #04BE02;\n}\n.vux-button-group > a.vux-button-group-current:disabled,\n.vux-button-group > a:disabled {\n  border-color: #CDCDCD;\n  background: #e5e5e5;\n  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);\n          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\n  color: #aaa;\n}\n',""])}}]);
//# sourceMappingURL=chunk-64d33eb6.e4d93630.js.map