//全局请求 fetch
import Fetch from '../http/fetch'

let http = {

  //公共请求

  // //登录请求
  // http_login:function(account,password,callback){
  //     Fetch.POST('auth/login',{account,password},callback)
  // },





  //获取主页数据
  homepage_http_index: function (data, callback) {
    Fetch.POST('index', data, callback)
  },

  //获取排行榜数据 
  ranking_http_rank: function (data, callback) {
    Fetch.POST_body('homePage/list-ranking', data, callback)
  },


  //获取分类类型 cartoonType/get-cartoonTypes
  classify_http_type: function (data, callback) {
    Fetch.POST('cartoonType/get-cartoonTypes', data, callback)
  },

  //获取分类数据 cartoonCollection/classify-search
  classify_http_data: function (data, callback) {
    Fetch.POST_body('cartoonCollection/classify-search', data, callback)
  },

  //书籍详情信息获取cartoonCollection/detail
  bookinfo_http_data: function (data, callback) {
    Fetch.POST_body('cartoonCollection/detail', data, callback)
  },

  //书籍详情信息获取选集 cartoonCollection/list-chapter
  bookinfo_http_select_data: function (data, callback) {
    Fetch.POST_body('cartoonCollection/list-chapter', data, callback)
  },

  //书籍阅读信息 chapter/detail
  readinfo_http_data: function (data, callback) {
    Fetch.POST_body('chapter/detail', data, callback)
  },



}
export default http