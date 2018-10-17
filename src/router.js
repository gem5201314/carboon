import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: [

      // current页面
      {
        path: '/',
        name: 'current',
        component: () =>
          import('@/components/Current'),
        children: [{ //主页 homepage
            path: '/',
            name: 'homepage',
            component: () =>
              import('@/views/homepage/Index'),
          },
          { //书架 book
            path: '/book',
            name: 'book',
            component: () =>
              import('@/views/book/Index'),
          },
          { //分类 classify
            path: '/classify',
            name: 'classify',
            component: () =>
              import('@/views/classify/Index'),
          },
          { //我的 myself
            path: '/myself',
            name: 'myself',
            component: () =>
              import('@/views/myself/Index'),
          },
        ],
      },
      //排行榜 榜单
      {
        path: '/ranking/Index',
        name: 'ranking',
        component: () =>
          import('@/views/ranking/Index'),
      },
      //书籍数据详情
      {
        path: '/bookinfo/Index',
        name: 'bookinfo',
        component: () =>
          import('@/views/bookinfo/Index'),
      },
      //阅读页面
      {
        path: '/readinfo/Index',
        name: 'readinfo',
        component: () =>
          import('@/views/readinfo/Index'),
      },
      //搜索页面
      {
        path: '/search/Index',
        name: 'search',
        component: () =>
          import('@/views/search/Index'),
      },
      //登录注册
      {
        path: '/login/Index',
        name: 'login',
        component: () =>
          import('@/views/login/Index'),
      },
      //更多
      {
        path: '/more/Index',
        name: 'more',
        component: () =>
          import('@/views/more/Index'),
      },
      //阅读币
      {
        path: '/bookcoin/Index',
        name: 'bookcoin',
        component: () =>
          import('@/views/bookcoin/Index'),
      },
      //充值
      {
        path: '/fillmoney/Index',
        name: 'fillmoney',
        component: () =>
          import('@/views/fillmoney/Index'),
      },
      //我的订阅
      {
        path: '/myorder/Index',
        name: 'myorder',
        component: () =>
          import('@/views/myorder/Index'),
      },
      //更新
      {
        path: '/update/Index',
        name: 'update',
        component: () =>
          import('@/views/update/Index'),
      },


    ]
  }, ]
})