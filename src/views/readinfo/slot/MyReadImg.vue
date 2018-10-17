<template>
    <div class="myreadimg">
        <div class="myreadimg">
            <div class="main">
                    <img v-for="(v,i) in imgList" :src="v['miPicUrl']" :key="i"  @click="img_click(v)">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["imgList"],
  data() {
    return {
      // imgList: [
      //   {
      //     img_url:
      //       "http://img.super-dreamers.com/xqmall/images/df368215-8e80-48c1-99ba-b6f8d0926c90.jpg@75Q"
      //   }
      // ]
    };
  },
  methods: {
    //传值给父组件
    img_click(v) {
      this.$emit("imgClick", v);
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  background: #000;
  box-sizing: border-box;
  img {
    width: 99%;
    height: auto;
  }
}
</style>

