<template>
    <div id="list">
        <div class="list">
          <!-- 实名插槽 -->
                   <slot name="weekRank"></slot>
          <!--  -->
            <div class="the-three">
                <div v-for="(v,i) in  rank_one_three" :key="i" @click="go_info(v)"
                  :class="i==1?'item to-one':i==3?'item to-three':'item to-two'" >
                        <div class="top-show">
                            <span class="text">
                              <h3>TOP</h3>
                              <p>{{i}}</p>
                            </span>
                        </div>
                        <div class="img-show">
                          <img :src="v['acrossPicUrl']">
                        </div>
                        <div class="bottom-show">
                          <h3>{{v['name']}}</h3>
                          <p>{{v['author']}}</p>
                        </div>
                </div>
            </div>
            <!--  -->
            <div class="after-div">
                <div class="after-content">
                    <div class="after-item" v-for="(v,i) in rank_after_three" :key="i" @click="go_info(v)">
                      <div class="left-div">
                        <p>{{i+3}}</p>
                      </div>
                      <div class="img-div">
                        <img :src="v['miPicUrl']">
                      </div>
                      <div class="text-div">
                        <h3>{{v['name']}}</h3>
                        <h5>更新到{{v['chapterCount']}}话</h5>
                        <div class="abs-div">
                          <span v-for="(val,ind) in v['labelNames']" :key="ind">{{val}}</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ButtonTab, ButtonTabItem } from "vux";
import { log } from "util";
import { setTimeout } from "timers";
export default {
  props: ["rankData"],
  components: {
    ButtonTab,
    ButtonTabItem
  },
  data() {
    return {
      // //榜单数据
      // rankData: [],

      //榜单前三名
      rank_one_three: [],

      //三名之后的数据
      rank_after_three: []
    };
  },
  methods: {
    //获取前三名 与三名之后
    get_font_three() {
      this.rank_one_three = this.rankData.slice(0, 3);
      // 第二名与第三名调换位置
      this.rank_one_three = [
        this.rank_one_three[1],
        this.rank_one_three[0],
        this.rank_one_three[2]
      ];
      this.rank_after_three = this.rankData.slice(3);
    },
    //路由跳转
    go_info(v) {
      this.$router.push({ name: "bookinfo", jquery: { id: 123 } });
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.get_font_three();
    }, 500);
  }
};
</script>
<style lang="less" scoped>
.list {
  background: #fff;
  height: 100%;
  .the-three {
    display: flex;
    width: 100%;
    // border: 1px solid red;
    height: 100%;
    box-sizing: border-box;
    .item {
      width: 33%;
      // min-width: 120px;
      height: 13rem;
      // border: 1px solid green;
      box-sizing: border-box;
      padding-left: 10px;
      padding-right: 10px;
      .top-show {
        width: 100%;
        height: 2.5rem;
        // border: 1px solid red;
        box-sizing: border-box;
        span {
          display: inline-block;
          h3 {
            margin: 0;
            font-size: 0.7rem;
            width: 100%;
            text-align: center;
            padding: 0;
          }
          p {
            display: block;
            padding: 0;
            margin: 0;
            margin-left: auto;
            margin-right: auto;
            width: 1rem;
            font-size: 0.6rem;
            border-radius: 1rem;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            // border: 1px solid #e2c6b7;
            font-weight: 700;
          }
        }
      }
      .img-show {
        width: 100%;
        height: 6rem;
        border: 1px solid #000;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .bottom-show {
        width: 100%;
        height: 2rem;
        // border: 1px solid green;
        box-sizing: border-box;
        h3 {
          margin: 0;
          font-size: 0.7rem;
          width: 100%;
          text-align: center;
          padding: 0;
          color: #000;
        }
        p {
          display: block;
          padding: 0;
          margin: 0;
          margin-left: auto;
          margin-right: auto;
          font-size: 0.6rem;
          height: 1rem;
          text-align: center;
          line-height: 1rem;
          color: #693400;
          font-weight: 700;
        }
      }
    }
  }
  //
  .after-div {
    .after-content {
      width: 100%;
      .after-item {
        width: 100%;
        height: 5rem;
        // border: 1px solid green;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        padding: 5px;
        .left-div {
          width: 15%;
          height: 100%;
          // border: 1px solid #000;
          box-sizing: border-box;
          display: flex;
          justify-content: space-around;
          align-items: center;
          p {
            margin: 0;
            padding: 0;
          }
        }
        .img-div {
          width: 25%;
          height: 100%;
          // border: 1px solid purple;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text-div {
          width: 55%;
          height: 100%;
          // border: 1px solid #000;
          box-sizing: border-box;
          padding-left: 10px;
          position: relative;
          h3 {
            // border:1px solid red;
            margin-top:0.1rem;
            font-size: 0.6rem;
            text-align: left;
          }
          h5 {
            margin: 0;
            padding: 0;
            font-size: 0.5rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            color: #909090;
            text-align: left;
            font-weight: 200;
          }
        .abs-div{
          position: absolute;
          bottom: 0;
          span {
            padding-left: 0.3rem;
            padding-right: 0.3rem;
            text-align: center;
            margin-right: 0.2rem;
            font-size: 0.5rem;
            float: left;
            border: 1px solid #e6e2e2;
            color: #909090;
            border-radius: 50px;
            margin-top: 0.5rem;
          }
        }
        }
      }
    }
  }
}
// 插槽
.weekRank {
  width: 100%;
  height: 2rem;
  // padding-left: 30%;
  // padding-right: 30%;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
}
//第一名
.to-one {
  p {
    background: #fdcc98;
  }
  h3 {
    color: #fdcc98;
  }
}
//第二名
.to-two {
  padding-top: 1rem;
  p {
    background: #e1dcda;
  }
  h3 {
    color: #c3b7b6;
  }
}
//第三名
.to-three {
  padding-top: 1rem;
  p {
    background: #e9c7b8;
  }
  h3 {
    color: #e9c7b8;
  }
}
</style>
