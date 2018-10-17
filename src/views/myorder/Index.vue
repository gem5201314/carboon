<template>
  <div class="index">
     <div class="main">
        <div class="content" v-for="(v,i) in data_order" :key="i" @click="go_router(v)">
              <div class="left-div">
                <img :src="v['img']">
              </div>
              <div class="center-div">
                <h5>{{v['name']}}</h5>
                <p>第{{v['update']}}话</p>
                <p>￥{{v['send_coin']}}赠币</p>
                <h6>{{v['time']}}</h6>
              </div>
              <div class="right-div">
                <p @click="remove_order(v)">取消订阅</p>
              </div>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //订阅数据
      data_order: [
        {
          img:
            "http://img.super-dreamers.com/xqmall/images/d30cde57-9559-4cc7-a076-4339a9f61f76.jpg@75Q",
          name: "上市太平路",
          update: "122",
          send_coin: "55",
          time: "2018-10-10"
        },
        {
          img:
            "http://img.super-dreamers.com/xqmall/images/d30cde57-9559-4cc7-a076-4339a9f61f76.jpg@75Q",
          name: "上市太平路",
          update: "122",
          send_coin: "55",
          time: "2018-10-10"
        }
      ]
    };
  },
  methods: {
    //取消订阅
    remove_order(v) {
      //二次弹框，数据来于vuex
      this.$store.commit({
        type: "set_confirm_data",
        data: {
          value: true,
          title: "",
          content: "确定取消订阅么",
          fn: () => {
            //二次弹框确定后执行的函数
            console.log("====================================");
            console.log(this);
            console.log("====================================");
          }
        }
      });
    },
    //路由跳转
    go_router(v) {
      this.$router.push({ name: "bookinfo", query: { id: 123 } });
    }
  },
  created() {}
};
</script>

<style lang="less" src="./index.less" scoped></style>
