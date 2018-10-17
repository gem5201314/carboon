<template >
  <div class="mytopshow">
      <div class="main">
            <div class="top-show">
                  <div class="div-img">
                    <img :src="topData['img']">
                  </div>
                  <div class="div-text">
                    <p>{{topData['name']}}
                      <span>
                          <icon v-show="topData['sex']=='boy'" name="boy" width="15" height="15"></icon>
                          <icon v-show="topData['sex']=='girl'" name="girl" width="15" height="15"></icon>
                      </span>
                    </p>
                    <h5>(ID:{{topData['user_id']}})</h5>
                  </div>
                  <div class="div-right">
                    <p v-if="topData['is_sign']" @click="go_router_sign">已签到</p>
                    <p v-if="!topData['is_sign']" @click="go_router_sign">签到</p>
                  </div>
            </div>

            <div class="bottom-show">
                <div class="item" @click="go_router_send_coin">
                  <icon name="send-coin" width="15" height="15"></icon>
                  赠币：{{topData['send_coin']}}
                </div>
                <div class="item" @click="go_router_read_coin">
                  <icon name="read-coin" width="15" height="15"></icon>
                  阅读币：{{topData['read_coin']}}
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topData: {
        name: "杨幂是谁的",
        user_id: "5201314",
        sex: "girl",
        is_sign: false,
        send_coin: "12122",
        read_coin: "12122",
        img:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539061825094&di=cd49ac52910d7838f463309325808557&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201507%2F06%2F20150706174247_MSdkV.jpeg"
      }
    };
  },
  methods: {
    //赠币路由
    go_router_send_coin() {
      this.$router.push({ name: "bookcoin", query: { id: "赠币" } });
    },
    //阅读币路由
    go_router_read_coin() {
      this.$router.push({ name: "bookcoin", query: { id: "阅读币" } });
    },
    //签到
    go_router_sign() {
      this.$emit("sign-alert", "yangmi");
    }
  }
};
</script>

<style lang="less" scoped>
.mytopshow {
  padding: 0.5rem;
  box-sizing: border-box;
  // border: 1px solid #000;
}
.main {
  width: 100%;
  // border:1px solid red;
  height: auto;
  box-sizing: border-box;
  background: #f7ded4;
  border-radius: 0.5rem;
  .top-show {
    width: 100%;
    height: 4rem;
    // border:1px solid green;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    .div-img {
      width: 3rem;
      height: 100%;
      // border:1px solid purple;
      box-sizing: border-box;
      border-radius: 3rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
    .div-text {
      height: 100%;
      // border:1px solid green;
      box-sizing: border-box;
      text-align: left;
      h5 {
        margin: 0;
        padding: 0;
        // border:1px solid green;
        // box-sizing: border-box;
        width: 7rem;
        overflow: hidden;
        height: 1rem;
        font-size: 0.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        color: gray;
      }
      p {
        margin: 0;
        padding: 0;
        // border:1px solid green;
        box-sizing: border-box;
        width: 7rem;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.5rem;
        overflow: hidden;
      }
    }
    .div-right {
      height: 100%;
      // border:1px solid green;
      box-sizing: border-box;
      p {
        margin: 0;
        padding: 0;
        font-size: 0.5rem;
        padding: 2px;
        border-radius: 0.1rem;
        border: 1px solid #fe7c4a;
        color: #fe7c4a;
        box-sizing: border-box;
      }
    }
  }

  .bottom-show {
    width: 100%;
    height: 2rem;
    // border:1px solid #000;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      // border: 1px solid red;
      font-size: 0.5rem;
      max-width: 6rem;
      overflow: hidden;
      color: #fe7c4a;
    }
  }
}
</style>
