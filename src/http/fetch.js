import Vue from 'vue'
import store from '../store'


// ---------fetch封装-----------
// ---------@bailang-----------
// ---------2018-09-18-----------

// const http_url="http://192.168.1.222:10052/api/"
const http_url = "http://api.yangqimanhua.com/mobile/"


let http_headers = new Headers({
  'Content-Type': 'application/json',
})


class Fetch {
  //构造函数
  constructor(ajax_url, ajax_headers) {
    this.this_vue = new Vue() //实例化vue
    this.this_vuex = store //获取vuex store

    this.ajax_url = ajax_url
    this.ajax_headers = ajax_headers
  }

  //请求拦截器
  request_http(data) {

  }
  //数据响应拦截器
  response_http(data, callback) {
    //vuex-loading数据处理
    this.this_vuex.commit({
      type: 'set_loading_data',
      data: {
        value: false,
        text: ""
      }
    })

    //请求之后-经过一系列处理
    // let http_code = data['code']
    // let http_data = data['data']
    //......
    //只有当code正确时才返回数据，
    //......


    if (data['success'] == true) {
      callback(data)
    } else {
      //向vuex添加alert数据
      //所有错误信息弹框
      this.this_vuex.commit({
        type: 'set_toast_data',
        data: {
          value: true,
          type: "cancel",
          // text: data['msg']
          text: '请求错误'
        }
      })
    }
  }

  //请求之前
  before_http() {
    console.log('xxxx', this.this_vue, this.this_vuex)
    //向vuex添加loading数据
    this.this_vuex.commit({
      type: 'set_loading_data',
      data: {
        value: true,
        text: "加载中"
      }
    })
  }

  //get请求
  GET(url, data, callback) {
    let new_data = `?`
    //构造参数
    for (let val in data) {
      if (new_data.substring(new_data.length, 0) == "?") {
        new_data = new_data + `${val}=${data[val]}`
      } else {
        new_data = new_data + `&${val}=${data[val]}`
      }
    }
    fetch(this.ajax_url + url + new_data, {
      mode: 'cors',
      redirect: 'follow',
      // headers: this.ajax_headers
    }).
    then((res) => {
      return res.json()
    }).then((response) => {
      this.response_http(response, callback)
    })
  }


  //post
  POST(url, data, callback) {
    this.before_http()
    fetch(this.ajax_url + url, {
      mode: 'cors',
      redirect: 'follow',
      method: 'post',
      body: JSON.stringify(data),
      headers: this.ajax_headers
    }).then((res) => {
      return (res.json())
    }).then((response) => {
      this.response_http(response, callback)
    })
  }

  //post body传参
  POST_body(url, data, callback) {
    this.before_http()
    let new_data = ''
    for (let val in data) {
      if (new_data.substring(new_data.length, 0) == "?") {
        new_data = new_data + `${val}=${data[val]}`
      } else {
        new_data = new_data + `&${val}=${data[val]}`
      }
    }
    fetch(this.ajax_url + url, {
      mode: 'cors',
      redirect: 'follow',
      method: 'post',
      body: new_data,
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }).then((res) => {
      return (res.json())
    }).then((response) => {
      this.response_http(response, callback)
    })
  }


  //delete
  DELETE(url, data, callback) {
    let new_data = `?`
    //构造参数
    for (let val in data) {
      if (new_data.substring(new_data.length, 0) == "?") {
        new_data = new_data + `${val}=${data[val]}`
      } else {
        new_data = new_data + `&${val}=${data[val]}`
      }
    }
    fetch(this.ajax_url + url + new_data, {
      mode: 'cors',
      redirect: 'follow',
      method: 'delete',
      body: JSON.stringify(data),
      headers: this.ajax_headers
    }).then((res) => {
      return res.json()
    }).then((response) => {
      this.response_http(response, callback)
    })
  }


  //put
  PUT(url, data, callback) {
    let new_data = `?`
    //构造参数
    for (let val in data) {
      if (new_data.substring(new_data.length, 0) == "?") {
        new_data = new_data + `${val}=${data[val]}`
      } else {
        new_data = new_data + `&${val}=${data[val]}`
      }
    }
    fetch(this.ajax_url + url + new_data, {
      mode: 'cors',
      redirect: 'follow',
      method: 'put',
      body: JSON.stringify(data),
      headers: this.ajax_headers
    }).then((res) => {
      return res.json()
    }).then((response) => {
      this.response_http(response, callback)
    })
  }
}
export default new Fetch(http_url, http_headers)