<template>
    <div id="myhistory">
        <div class="myhistory">
                <div  class="content">
                   <div class="item" v-for="(v,i) in historyData" :key="i" @click="get_book_info(v)">
                     <div class="check-div" v-if="isEdit">
                        <CheckIcon :value.sync="v['checked']"  type="plain"></CheckIcon>
                     </div>
                     <div class="left-div">
                       <img :src="v['imgurl']">
                     </div>
                     <div class="right-div">
                       <h4>{{v['title']}}</h4>
                       <h5>更新到{{v['update']}}话</h5>
                       <p>续看{{v['look']}}话</p>
                     </div>
                   </div>
                </div>
        </div>
    </div>
</template>

<script>
import { CheckIcon } from "vux";
export default {
  props: ["isEdit", "historyData"],
  components: {
    CheckIcon
  },
  data() {
    return {
      // //历史数据
      // historyData: [
      //   {
      //     imgurl:
      //       "http://img.super-dreamers.com/xqmall/images/6d04cc33-6652-48db-bab8-eee0ef34302d.jpg@75Q",
      //     title: "漂亮的杨幂",
      //     update: "44",
      //     look: "2",
      //     checked: false,
      //     id: "1"
      //   }
      // ]
    };
  },
  methods: {
    //路由跳转
    get_book_info(v) {
      if (!this.isEdit) {
        this.$router.push({ name: "bookinfo", query: { id: 123 } });
      }
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.myhistory {
  .content {
    width: 100%;
    background-color: #fff;
    .item {
      width: 100%;
      height: 4rem;
      // border: 1px solid red;
      box-sizing: border-box;
      display: flex;
      padding: 5px;
      .check-div {
        width: 15%;
        min-width: 55px;
        height: 100%;
        // border: 1px solid #000;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .left-div {
        width: 30%;
        min-width: 111px;
        height: 100%;
        // border: 1px solid green;
        box-sizing: border-box;
        // padding-bottom: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right-div {
        width: 55%;
        height: 100%px;
        // border: 1px solid #000;
        box-sizing: border-box;
        // right: 5px;
        padding-left: 10px;
        padding-top: 5px;
        position: relative;
        h4 {
          margin: 0;
          padding: 0;
          font-size: 0.6rem;
          color: #333;
          text-align: left;
        }
        h5 {
          margin: 0;
          padding: 0;
          color: #909090;
          font-size: 0.45rem;
          text-align: left;
          margin-top: 0.2rem;
        }
        p {
          margin: 0;
          padding: 0;
          color: #fd7d49;
          font-size: 0.5rem;
          text-align: left;
          bottom: 0px;
          position: absolute;
          // margin-top: 0.8rem;
        }
      }
    }
  }
}
</style>

