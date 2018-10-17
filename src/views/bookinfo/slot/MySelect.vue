<template>
    <div id="myselect">
        <div class="myselect">
            <div class="main">
                <div class="head-div">
                    <p class="left">
                        全部章节</p>
                    <!-- <p class="right"> 
                        <icon name="delete" width="20" height="20"></icon>
                        倒叙</p> -->
                </div>
                <div class="content">
                        <div class="item" v-for="(v,i) in selectData" :key="i" @click="get_look(v)">
                            <div class="div-img">
                                <img :src="v['coverPicUrl']">
                            </div>
                            <div class="right-text">
                                <h5>第{{v['chapterIndex']}}话 {{v['name']}}</h5>
                                <!-- 收费图标 -->
                                <h5 style="margin-top:0.5rem;">
                                    <icon name="money" width="25" height="25"></icon>
                                </h5>
                                <div class="bottom">
                                    <span>{{v['createDateStr']}}</span>
                                    <span>
                                        <icon class="icon" name="good" width="15" height="15"></icon>
                                        {{v['shamPraiseCount']}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["selectData"],
  data() {
    return {
      //   selectData: [
      //     {
      //       time: "2018-04-25",
      //       dis: "第1话 爱穿丝袜的女人，到底有多诱惑？",
      //       looks: "500",
      //       id: "1",
      //       imgurl:
      //         "http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"
      //     },
      //   ]
    };
  },
  methods: {
    //路由跳转
    get_look(v) {
      this.$router.push({ name: "readinfo", query: { id: 123 } });
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.main {
  background: #fff;
  .head-div {
    width: 100%;
    height: 2rem;
    // border: 1px solid red;
    box-sizing: border-box;
    line-height: 2rem;
    .left {
      width: 50%;
      height: 1rem;
      font-size: 0.5rem;
      text-align: left;
      margin-left: 1rem;
    }
    .right {
      width: 50%;
      height: 1rem;
      display: inline-block;
      //   line-height: 2rem;
      float: right;
      font-size: 0.5rem;
      margin-top: -1.5rem;
      text-align: right;
      margin-right: 1rem;
    }
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 4rem;
      //   border: 1px solid red;
      box-sizing: border-box;
      padding: 5px;
      padding-left: 1rem;
      .div-img {
        width: 30%;
        height: 100%;
        min-width: 4rem;
        // border: 1px solid green;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right-text {
        float: right;
        padding-left: 0.5rem;
        margin-top: -3.5rem;
        width: 70%;
        height: 100%;
        min-width: 4rem;
        // border: 1px solid #000;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        h5 {
          font-size: 0.6rem;
          margin: 0;
          padding: 0;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .bottom {
          position: absolute;
          width: 100%;
          height: 1rem;
          //   border: 1px solid #000;
          box-sizing: border-box;
          bottom: 0;
          line-height: 1rem;
          text-align: left;
          span {
            font-size: 0.5rem;
            color: gray;
            line-height: 1rem;
            .icon {
              margin-top: -2px;
            }
          }
        }
      }
    }
  }
}
</style>

