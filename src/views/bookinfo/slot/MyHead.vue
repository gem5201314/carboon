<template>
    <div id="myhead">
        <div class="myhead">
                <div class="main">
                       <div class="head-img">
                             <div class="div-img">
                                 <img :src="dataHead['miAcrossPicUrl']">
                            </div>
                            <div class="div-text">
                                 <div class="top-text">
                                     <span @click="()=>{$router.go(-1)}">
                                       <icon name="left" width="15" height="15"></icon>
                                      </span>   
                                     <span  @click="()=>{$router.push({name:'homepage'})}">
                                       <icon name="menu" width="15" height="15"></icon>
                                      </span>
                                 </div>
                                 <div class="bottom-text">
                                     <h2>{{dataHead['name']}}</h2>
                                     <div class="bottom-bottom">
                                         <p>
                                           <span v-for="(v,i) in dataHead['labelNames']" :key="i">{{v}}</span>
                                           <!-- <span>恋爱</span> -->
                                         </p>
                                         <h5>{{dataHead['stateStr']}}/更新至{{dataHead['chapCount']}}话</h5>
                                     </div>
                                 </div>
                            </div>
                       </div>
                       <div class="bottom-text-div">
                         <!-- 没收藏 -->
                           <div class="coll-div" v-show="!dataHead['ready_fav']" @click="fav_change">
                               <icon name="nofav" width="20" height="20"></icon>
                               收藏
                           </div>
                           <!-- 已经收藏样式 -->
                           <div class="coll-div" v-show="dataHead['ready_fav']" @click="fav_change" style="color:#fd7d49">
                               <icon name="yesfav" width="20" height="20"></icon>
                               收藏
                           </div>
                           <!-- 没点赞 -->
                           <div class="good-div" v-show="dataHead['ready_like']" @click="like_change">
                               <icon name="nolike" width="20" height="20"></icon>
                               <span>点赞</span>
                           </div>
                           <!-- 已经点赞样式 -->
                            <div class="good-div" v-show="!dataHead['ready_like']" @click="like_change" style="color:#fd7d49">
                               <icon name="yeslike" width="20" height="20"></icon>
                               <span>点赞</span>
                           </div>
                           <!--  -->
                           <div class="button-div" @click="start_read">
                             <icon name="book" width="20" height="20"></icon>
                             继续阅读</div>
                       </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["dataHead"],
  data() {
    return {
      // dataHead: {
      //   imgurl:
      //     "http://img.super-dreamers.com/xqmall/images/de453d4b-4433-4e1c-96b5-2b1a1f3cc051.jpg@75Q",
      //   title: "谁的大幂幂",
      //   type: ["情感", "恋爱"],
      //   update: "12",
      //   ready_like: true, //是否点赞
      //   ready_fav: false //是否收藏
      // }
    };
  },
  methods: {
    //路由阅读页面
    go_readInfo() {
      this.$router.push({ name: "readinfo", query: { id: 123 } });
    },

    //开始继续阅读
    start_read() {
      this.$router.push({ name: "readinfo", query: { id: 123 } });
    },
    //收藏
    fav_change() {
      console.log("====================================");
      console.log(this.dataHead["ready_fav"]);
      console.log("====================================");
      this.dataHead["ready_fav"] = !this.dataHead["ready_fav"];
    },
    //点赞
    like_change() {
      this.dataHead["ready_like"] = !this.dataHead["ready_like"];
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.head-img {
  width: 100%;
  height: 11rem;
  //   border: 1px solid red;
  box-sizing: border-box;
  position: relative;
  .div-img {
    height: 100%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .div-text {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(150, 128, 128, 0.5);
    z-index: 2;
    // border: 1px solid green;
    .top-text {
      //   border: 1px solid #000;
      width: 100%;
      height: 2rem;
      box-sizing: border-box;
      text-align: left;
      line-height: 2rem;
      padding-left: 0.5rem;
    }
    .bottom-text {
      position: absolute;
      bottom: 0;
      left: 0;
      //   border: 1px solid red;
      width: 100%;
      height: 3.5rem;
      box-sizing: border-box;
      color: #fff;
      h2 {
        margin: 0;
        padding: 0;
        // border: 1px solid red;
        box-sizing: border-box;
        text-align: left;
        font-size: 1rem;
        font-weight: 500;
        padding-left: 0.5rem;
      }
      .bottom-bottom {
        // border: 1px solid green;
        box-sizing: border-box;
        height: 2rem;
        p {
          margin: 0;
          padding: 0;
          height: 2rem;
          //   border: 1px solid red;
          box-sizing: border-box;
          text-align: left;
          line-height: 2rem;
          padding-left: 0.5rem;
          span {
            font-size: 0.4rem;
            border: 1px solid #fff;
            text-align: center;
            display: inline-block;
            width: 1.5rem;
            line-height: 0.7rem;
            height: 0.7rem;
            margin-left: 0.5rem;
          }
        }
        h5 {
          float: right;
          margin: 0;
          padding: 0;
          height: 2rem;
          //   border: 1px solid red;
          box-sizing: border-box;
          margin-top: -2rem;
          font-size: 0.5rem;
          margin-right: 1rem;
          line-height: 2rem;
        }
      }
    }
  }
}
.bottom-text-div {
  background: #fff;
  width: 100%;
  height: 2rem;
  //   border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .coll-div {
    width: 4rem;
    font-size: 0.5rem;
    border-right: 2px solid #fd7d49;
    text-align: center;
  }
  .good-div {
    width: 4rem;
    font-size: 0.5rem;
    // border: 1px solid green;
  }
  .button-div {
    width: 8rem;
    font-size: 0.7rem;
    height: 1.3rem;
    line-height: 1.3rem;
    margin-right: 0.5rem;
    border: 1px solid #fd7d49;
    border-radius: 0.7rem;
    color: #fff;
    background: #fd7d49;
  }
}
</style>

