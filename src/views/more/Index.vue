<template>
  <div class="index">
     <div class="main">
          <div class="content" v-for="(v,i) in more_data" :key="i" @click="router_bookinfo(v)">
              <div class="left-div">
                  <img :src="v['imgurl']">
              </div>
              <div class="right-div">
                  <h5>{{v['title']}}</h5>
                  <h6>{{v['dis']}}</h6>
                  <p>
                    <span>
                      <icon name="i-look" style="margin-top:-3px" width="15" height="15"></icon>
                      {{v['looks']}}万</span>
                    <span>
                      <icon name="i-good" style="margin-top:-3px" width="15" height="15"></icon>
                      {{v['goods']}}</span>
                  </p>
              </div>
          </div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //数据
      more_data: [
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/cc19d18a-031b-4107-b798-f4d8cdc638c1.jpg@75Q",
          title: "我的杨幂",
          dis: "想要问问你敢不敢，像你说过那样的爱我",
          looks: "500",
          goods: "123"
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/cc19d18a-031b-4107-b798-f4d8cdc638c1.jpg@75Q",
          title: "我的杨幂",
          dis: "想要问问你敢不敢，像你说过那样的爱我",
          looks: "500",
          goods: "123"
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/cc19d18a-031b-4107-b798-f4d8cdc638c1.jpg@75Q",
          title: "我的杨幂",
          dis: "想要问问你敢不敢，像你说过那样的爱我",
          looks: "500",
          goods: "123"
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/cc19d18a-031b-4107-b798-f4d8cdc638c1.jpg@75Q",
          title: "我的杨幂",
          dis: "想要问问你敢不敢，像你说过那样的爱我",
          looks: "500",
          goods: "123"
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/cc19d18a-031b-4107-b798-f4d8cdc638c1.jpg@75Q",
          title: "我的杨幂",
          dis: "想要问问你敢不敢，像你说过那样的爱我",
          looks: "500",
          goods: "123"
        }
      ]
    };
  },
  methods: {
    //路由跳转 书籍详情
    router_bookinfo(v) {
      this.$router.push({ name: "bookinfo", query: { id: "杨幂" } });
    }
  },
  created() {}
};
</script>

<style lang="less" src="./index.less" scoped></style>
