<template>
  <div class="index">
    <div class="body">
      <!-- 主体内容 -->
      <div class="main">
          <MyTopShow @sign-alert="sigin_alert"></MyTopShow>

          <MyCloum :showData="showData" @go-router="go_router_cloum"></MyCloum>
      </div>
      <!-- 组件弹框 -->
      <div class="alert" v-if="show_sign">
          <MySign @close-sign="()=>{show_sign=false}" @sign-current="sign-ok" ></MySign>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    MyCloum: resolve => require(["./slot/MyCloum.vue"], resolve), //单行导航 属性showData 事件 @go-router
    MySign: resolve => require(["./slot/MySign.vue"], resolve), //签到组件
    MyTopShow: resolve => require(["./slot/MyTopShow.vue"], resolve) //头部显示内容组件
  },
  data() {
    return {
      //是否显示签到
      show_sign: false,
      //cloum显示数据
      showData: [
        {
          left_icon: "m-recharge", //左边图标
          left_text: "充值阅读币", //左边文字
          right_text: "畅阅订阅漫画", //右边文字
          right_text_color: "#fc9466", //右边文字颜色
          router: "fillmoney" //路由值
        },
        {
          left_icon: "m-pay", //左边图标
          left_text: "付费管理", //左边文字
          right_text: "畅阅订阅漫画", //右边文字
          router: "myorder" //路由值
        },
        {
          left_icon: "m-my", //左边图标
          left_text: "我的订阅记录", //左边文字
          right_text: "订阅的漫画都在这里", //右边文字
          router: "myorder" //路由值
        },
        {
          left_icon: "m-everyday", //左边图标
          left_text: "每日更新", //左边文字
          right_text: "", //右边文字
          router: "update" //路由值
        },
        {
          left_icon: "m-message", //左边图标
          left_text: "我的消息", //左边文字
          right_text: "", //右边文字
          router: "xx" //路由值
        },
        {
          left_icon: "m-echange", //左边图标
          left_text: "兑换码", //左边文字
          right_text: "", //右边文字
          router: "xx" //路由值
        },
        {
          left_icon: "m-exit", //左边图标
          left_text: "退出", //左边文字
          right_text: "", //右边文字
          router: "" //路由值
        }
      ]
    };
  },
  methods: {
    //签到弹框
    sigin_alert() {
      //判断
      // show_sign=true
      this.$router.push({ name: "login" });
    },
    //cloum导航
    go_router_cloum(v) {
      this.$router.push({ name: v["router"] });
      console.log(v);
      if (v["left_text"] == "退出") {
        this.$store.commit({
          type: "set_confirm_data",
          data: {
            value: true,
            title: "",
            content: "确定退出登录么",
            fn: () => {
              //二次弹框确定后执行的函数
              console.log("====================================");
              console.log(this);
              console.log("====================================");
            }
          }
        });
      }
    }
  },
  created() {}
};
</script>

<style lang="less" src="./index.less" scoped></style>
