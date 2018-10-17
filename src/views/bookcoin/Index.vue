<template>
  <div class="index">
    <div class="main">
      <!-- 阅读币组件 -->
      <MyReadCoin v-show="coinShow=='阅读币'"></MyReadCoin>
      <!-- 赠币组件 -->
      <MySendCoin v-show="coinShow=='赠币'"></MySendCoin>
    </div>
  </div>
</template>
<script>
export default {
  //resolve => require(["./slot/MyInfo.vue"], resolve),
  components: {
    MyReadCoin: resolve => require(["./slot/MyReadCoin.vue"], resolve), //阅读币组件
    MySendCoin: resolve => require(["./slot/MySendCoin.vue"], resolve) //赠币组件
  },
  data() {
    return {
      coinShow: "阅读币"
    };
  },
  methods: {
    //接受路由参数
    get_router() {
      this.coinShow = this.$route.query.id;
    }
  },
  created() {},
  mounted() {
    this.get_router();
  }
};
</script>

<style lang="less" src="./index.less" scoped></style>
