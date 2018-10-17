<template>
    <div id="mypalace3">
        <div class="mypalace3">
             <div class="content">
                  <div class="item" v-for="(v,i) in dataMyPalace3" :key="i" @click="palace_click(v)">
                      <div class="img-div">
                          <img :src="v['miPicUrl']" alt="">
                      </div>
                      <div class="text">
                          <p>{{v['name']}}</p>
                          <h4>{{v['content']}}</h4>
                      </div>
                  </div>
             </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["dataMyPalace3"],
  data() {
    return {
      //   dataMyPalace3: []
    };
  },
  methods: {
    //宫格导航
    palace_click(v) {
      this.$router.push({ name: "bookinfo", query: { id: "11" } });
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
#mypalace3 {
  width: 100%;
  height: auto;
  background: #fff;
  .mypalace3 {
    .content {
      display: flex;
      justify-content: flex-start;
      //   border: 1px solid red;
      box-sizing: border-box;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      flex-wrap: wrap;
      .item {
        padding-left: 0.1rem;
        padding-right: 0.1rem;
        padding-top: 0.5rem;
        width: 33.3%;
        min-width: 4rem;
        height: auto;
        // border: 1px solid green;
        box-sizing: border-box;
        .img-div {
          width: 100%;
          height: 7rem;
          // border: 1px solid yellow;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          width: 100%;
          // border: 1px solid #000;
          box-sizing: border-box;
          padding-bottom: 10px;
          p {
            line-height: 0.76rem;
            // border: 1px solid #000;
            font-size: 0.48rem;
            color: #333;
            font-size: 0.24rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0;
          }
          h4 {
            margin: 0;
            font-weight: 100;
            overflow: hidden;
            text-overflow: ellipsis;
            // border: 1px solid #000;
            white-space: nowrap;
            font-size: 0.24rem;
            color: #909090;
          }
        }
      }
    }
  }
}
</style>
