<template>
    <div id="mypalace2">
        <div class="mypalace2">
             <div class="content">
                  <div class="item" v-for="(v,i) in dataMyPalace2" :key="i" @click="palace_click(v)">
                      <div class="img-div">
                          <img :src="v['acrossPicUrl']" alt="">
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
  props: ["dataMyPalace2"],
  data() {
    return {
      //   dataMyPalace2: [
      //     {
      //       title: "那里的香气",
      //       dis:
      //         "因为一个诅咒，男主变成了恋爱绝缘体，再又一次的失恋后，买醉的他得",
      //       imgurl:
      //         "http://img.super-dreamers.com/xqmall/images/cc19d18a-031b-4107-b798-f4d8cdc638c1.jpg@75Q",
      //       router: ""
      //     },
      //   ]
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
p,
h4 {
  margin: 0;
  padding: 0;
}
#mypalace2 {
  width: 100%;
  height: auto;
  background: #fff;
  .mypalace2 {
    .content {
      display: flex;
      justify-content: flex-start;
      //   border: 1px solid red;
      box-sizing: border-box;
      flex-wrap: wrap;
      .item {
        padding-left: 2px;
        padding-right: 2px;
        padding-top: 0.5rem;
        width: 50%;
        min-width: 7rem;
        height: auto;
        // border: 1px solid green;
        box-sizing: border-box;
        .img-div {
          width: 100%;
          height: 5rem;
          //   border: 1px solid yellow;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          width: 100%;
          //   height:
          //   border: 1px solid #000;
          box-sizing: border-box;
          padding-bottom: 10px;
          p {
            padding-left: 0.5rem;
            padding-top: 0.3rem;
            padding-bottom: 0.3rem;
            font-size: 0.5rem;
            color: #333;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 3rem;
          }
          h4 {
            margin: 0;
            font-weight: 100;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 1;
            text-align: left;
            font-size: 0.55rem;
            color: #909090;
          }
        }
      }
    }
  }
}
</style>

