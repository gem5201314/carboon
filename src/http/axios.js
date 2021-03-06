import axios from 'axios'
import Vue from 'vue'

Vue.prototype.$http=axios

axios.defaults.baseURL = "http://192.168.1.222:10052/api/"
// axios.defaults.baseURL = '/api'


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    //设置请求头
    // config.headers.token="yangmi"
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

 // 添加响应拦截器
axios.interceptors.response.use(function (response){
    let code=response['data']['code']
    if(code==1){
       return response['data']['data']
     }
    else{
       alert(response['data']['msg'])
    }
      return response['data']['data']   //只返回数据
  },function (error) {
        // 对响应错误做点什么
          return error;
        })


//封装
