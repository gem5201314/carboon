import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 所有请求
import http from './public/net_http_fetch'

//图标组件
import Icon from 'vue2-svg-icon/Icon.vue'
Vue.component('icon', Icon)
//输入框组件
import BaiInput from './components/comm/BaiInput.vue'
Vue.component('BaiInput', BaiInput)
//按钮组件
import BaiButton from './components/comm/BaiButton.vue'
Vue.component('BaiButton', BaiButton)
//验证码组件
import BaiProving from './components/comm/BaiProving.vue'
Vue.component('BaiProving', BaiProving)
//自定义图标组件
import BaiIcon from './components/comm/BaiIcon.vue'
Vue.component('BaiIcon', BaiIcon)



//请求挂载原型
Vue.prototype.$HTTP = http


//rem配置
import './public/js/rem'
//axios请求
import './http/axios'




Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')