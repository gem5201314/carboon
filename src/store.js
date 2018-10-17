import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//全局弹框数据
		alert_data: {
			value: false,
			title: "警告",
			content: "弹框"
		},

		//全局二次弹框数据
		confirm_data: {
			value: false,
			title: "",
			content: "弹框",
			fn: function () {}, //二次弹框点击确认后执行的函数
		},

		//全局loading加载数据
		loading_data: {
			value: false,
			text: ""
		},

		//全局toast提示数据
		toast_data: {
			value: false,
			type: "", //类型，可选值 success, warn, cancel, text
			text: "",
		},

		// 登录 注册 忘记密码 组件显示
		show_component: "登录",

		//用户登录信息
		user_data: {
			name: "亲爱的杨幂", //昵称
			tel: "11111111111", //电话
			sex: "女", //性别
			id: "666666",
			uuid: "yangmi5201314", //唯一标识
		},
	},

	mutations: {
		//弹框
		set_alert_data(state, par) {
			state['alert_data'] = par['data']
		},
		//加载
		set_loading_data(state, par) {
			state['loading_data'] = par['data']
		},
		//二次弹框
		set_confirm_data(state, par) {
			state['confirm_data'] = par['data']
		},
		//提示
		set_toast_data(state, par) {
			state['toast_data'] = par['data']
		},
		// 登录 注册 忘记密码 组件切换
		set_show_component(state, par) {
			state['show_component'] = par['data']
		},
		//用户信息
		set_user_data(state, par) {
			state['user_data'] = par['data']
		},
	},

	actions: {

	}
})