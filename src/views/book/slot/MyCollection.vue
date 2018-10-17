<template>
    <div id="mycollection">
        <div class="mycollection">
                <div  class="content">
                       <div class="item" v-for="(v,i) in  collectionData" :key="i" @click="get_book_info(v)">
                          <div class="div-img">
                            <div class="img">
                              <img :src="v['imgurl']">
                            </div>
                            <div class="edit" v-if="isEdit==true">
                              <div class="form">
                                  <CheckIcon :value.sync="v['checked']" type="plain"></CheckIcon>
                              </div>
                            </div>
                          </div>
                          <div class="div-text">
                              <h5>{{v['title']}}</h5>
                              <p>{{v['update'][0]}}话/{{v['update'][1]}}话</p>
                          </div>
                       </div>
                </div>
        </div>
    </div>
</template>

<script>
import { CheckIcon } from "vux";
export default {
  props: ["isEdit", "collectionData"],
  components: {
    CheckIcon
  },
  data() {
    return {
      checked: false
      //收藏数据
      // collectionData: [
      //   {
      //     imgurl:
      //       "http://img.super-dreamers.com/xqmall/images/5e2faf72-ba5a-4942-9346-c2315a3e83cc.jpg@75Q",
      //     title: "漂亮的杨幂",
      //     update: [0, 55],
      //     checked: false
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
.mycollection {
  .content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    // border: 1px solid red;
    box-sizing: border-box;
    background: #fff;
    .item {
      width: 33.2%;
      min-width: 4rem;
      height: 9rem;
      // border: 1px solid green;
      box-sizing: border-box;
      padding: 5px;
      .div-img {
        position: relative;
        width: 100%;
        height: 6.5rem;
        // border: 1px solid yellow;
        box-sizing: border-box;
        .img {
          width: 100%;
          height: 100%;
          // border: 1px solid purple;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .edit {
          top: 0;
          left: 0;
          z-index: 50;
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          .form {
            position: absolute;
            width: 35px;
            height: 35px;
            right: 0;
            top: 0;
          }
        }
      }
      .div-text {
        width: 100%;
        height: 2.2rem;
        padding-top: 5px;
        // border: 1px solid purple;
        box-sizing: border-box;
        h5 {
          margin: 0;
          height: 50%;
          // line-height: 0.44rem;
          font-size: 0.5rem;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          margin: 0;
          height: 50%;
          color: gray;
          font-size: 0.24rem;
        }
      }
    }
  }
}
</style>

