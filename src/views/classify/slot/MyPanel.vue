<template>
    <div id="panel">
        <div class="panel">
            <div class="content" v-for="(v,i) in panelData" :key="i" @click="get_info(v['id'])">
                <div class="left-img">
                    <img :src="v['acrossPicUrl']" alt="" width="116" height="73">
                </div>
                <div class="right-text">
                    <div class="top-div">
                        <p>{{v['name']}}</p>
                        <h4>更新到{{v['chapCount']}}话</h4>
                        <!-- <h4 style="color:orange">{{v['update']}}</h4> -->
                    </div>
                    <div class="bottom-div">
                            <icon name="love" width="15" height="15"></icon>
                            <span v-for="val in v['labelNames']" :key="val">{{val}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["panelData"],
  data() {
    return {
      // panelData:[
      //     {
      //         imgurl:"http://img.super-dreamers.com/xqmall/images/11e4289b-36e0-4e09-adb3-8861f87268ce.jpg@75Q",
      //         title:"不期而遇",
      //         update:"更新到44话",
      //         type:"恋爱.搞笑",
      //         id:"1",
      //     },
      // ],
    };
  },
  methods: {
    //路由跳转
    get_info(val) {
      this.$router.push({ name: "bookinfo", query: { id: 123 } });
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.content {
  // border: 1px solid red;
  width: 100%;
  height: 4.2rem;
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  position: relative;
  .left-img {
    float: left;
    height: auto;
    width: 35%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .right-text {
    padding-left: 10px;
    float: right;
    width: 65%;
    height: 100%;
    // border: 1px solid green;
    box-sizing: border-box;
    position: relative;

    .top-div {
      width: 100%;
      position: absolute;
      // border:1px solid red;
      top: 0;
      p {
        margin: 0px;
        font-size: 0.7rem;
        line-height: 1rem;
        color: #323232;
        text-align: left;
        float: left;
        // border: 1px solid red;
      }
      h4 {
        float: right;
        margin: 0;
        margin-right: 1rem;
        line-height: 1rem;
        font-size: 0.24rem;
        color: #999;
        // border: 1px solid red;
      }
    }
    .bottom-div {
      position: absolute;
      margin: 0px;
      bottom: 0;
      font-size: 0.5rem;
      color: #999;
      text-align: left;
      // border: 1px solid red;
      span {
        margin-left: 0.1rem;
      }
    }
  }
}
</style>
