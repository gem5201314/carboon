(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f42768d6"],{"1d25":function(t,n,i){"use strict";i.r(n);var e={data:function(){return{form_data:{user_tel:{value:"",left_icon:"s-phone",type:"tel",placeholder:"输入手机号"},user_proving:{value:"",left_icon:"s-proving",placeholder:"输入验证码"},user_password:{value:"",left_icon:"s-password",type:"password",placeholder:"请输入至少6位密码"}}}},methods:{reset_data:function(){var t={tel:"",proving:"",password:""};return t["tel"]=this.form_data["user_tel"]["value"],t["proving"]=this.form_data["user_proving"]["value"],t["password"]=this.form_data["user_password"]["value"],t},button_click:function(){console.log(this.reset_data())},router_login:function(){this.$store.commit({type:"set_show_component",data:"登录"})}},mounted:function(){}},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"mynopassword"},[i("div",{staticClass:"main"},[t._m(0),t._v(" "),i("div",{staticClass:"text-div"},[i("div",{staticClass:"head"},[i("p",{on:{click:t.router_login}},[i("icon",{attrs:{name:"return",width:"30",height:"30"}})],1)]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"input-div"},[i("BaiInput",{attrs:{inputData:t.form_data["user_tel"]}})],1),t._v(" "),i("div",{staticClass:"input-div"},[i("BaiInput",{attrs:{inputData:t.form_data["user_proving"]}},[i("div",{staticClass:"proving",attrs:{slot:"right"},slot:"right"},[i("BaiProving",{attrs:{regValue:t.form_data["user_tel"]["value"]}})],1)])],1),t._v(" "),i("div",{staticClass:"input-div"},[i("BaiInput",{attrs:{inputData:t.form_data["user_password"]}})],1),t._v(" "),i("div",{staticClass:"input-div"},[i("BaiButton",{attrs:{text:"重置密码"},on:{"click-button":t.button_click}})],1)]),t._v(" "),i("div",{staticClass:"bottom"},[i("p",{on:{click:t.router_login}},[i("span",[t._v("已有账号？快速登录")])])])])])])},o=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"img-div"},[i("img",{attrs:{src:"http://pic1.win4000.com/mobile/2017-12-06/5a279a9346990.jpg"}})])}],r=i("2455");function s(t){i("f162")}var d=!1,c=s,b="data-v-9cb01580",l=null,v=Object(r["a"])(e,a,o,d,c,b,l);n["default"]=v.exports},"320c6":function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,"\n.public[data-v-9cb01580] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\np[data-v-9cb01580],\nh5[data-v-9cb01580],\nh6[data-v-9cb01580] {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n}\n.mynopassword[data-v-9cb01580] {\n  width: 100%;\n  height: 100%;\n}\n.main[data-v-9cb01580] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.main .img-div[data-v-9cb01580] {\n  min-height: 27rem;\n  height: 100%;\n}\n.main .img-div img[data-v-9cb01580] {\n  width: 100%;\n  height: 100%;\n}\n.main .text-div[data-v-9cb01580] {\n  position: absolute;\n  background: rgba(19, 2, 2, 0.4);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.main .text-div .head[data-v-9cb01580] {\n  width: 100%;\n  height: 3rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.main .text-div .head p[data-v-9cb01580] {\n  text-align: left;\n  padding-left: 1rem;\n  line-height: 3rem;\n}\n.main .text-div .content[data-v-9cb01580] {\n  width: 100%;\n  height: 12rem;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.main .text-div .content .input-div[data-v-9cb01580] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: auto;\n  width: 100%;\n  margin-top: 0.5rem;\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}\n.main .text-div .content .input-div .right[data-v-9cb01580] {\n  width: 9rem;\n  height: 1.2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.main .text-div .content .input-div .right p[data-v-9cb01580] {\n  width: 2rem;\n  text-align: center;\n  color: #fff;\n}\n.main .text-div .content .input-div .right h5[data-v-9cb01580] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.main .text-div .content .input-div .right h5 p[data-v-9cb01580] {\n  border-radius: 0.5rem;\n  margin-left: 0.1rem;\n}\n.main .text-div .content .input-div .proving[data-v-9cb01580] {\n  border-left: 1px solid #fff;\n  padding-left: 1rem;\n}\n.main .text-div .bottom[data-v-9cb01580] {\n  bottom: 0;\n  width: 100%;\n  height: 3rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-top: 1px solid #fff;\n}\n.main .text-div .bottom p[data-v-9cb01580] {\n  font-size: 0.6rem;\n  color: orange;\n}\n.active-p[data-v-9cb01580] {\n  background: #fff;\n}\n",""])},f162:function(t,n,i){var e=i("320c6");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("499e").default;a("43e62c1c",e,!0,{})}}]);
//# sourceMappingURL=chunk-f42768d6.753822d9.js.map