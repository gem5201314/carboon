<template>
  <div class="mypalace1">
      <div class="main" v-for="(v,i) in dataMyPalace1" :key="i">
          <div class="div-img">
              <img :src="v['imgurl']">
          </div>
          <div class="div-bottom">
            <p>{{v['name']}}</p>
            <h5>更新至
              <span>{{v['update']}}</span>
              话
            </h5>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["dataMyPalace1"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.mypalace1 {
  background: #fff;
}
.main {
  width: 100%;
  .div-img {
    width: 100%;
    height: 8rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .div-bottom {
    //border:1px solid red;
    //box-sizing:border-box;
    width: 100%;
    height: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    p {
      margin: 0;
      padding: 0;
      height: 1rem;
      //border:1px solid green;
      box-sizing: border-box;
      font-size: 0.6rem;
      text-align: left;
      padding-left: 0.2rem;
    }
    h5 {
      //  border:1px solid red;
      box-sizing: border-box;
      height: 1rem;
      float: right;
      margin: 0;
      padding: 0;
      margin-top: -1rem;
      font-size: 0.5rem;
      margin-right: 0.3rem;
      line-height: 1rem;
      color: rgb(144, 144, 144);
      span {
        color: rgb(253, 125, 73);
      }
    }
  }
}
</style>
