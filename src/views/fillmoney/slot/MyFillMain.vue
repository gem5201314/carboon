<template>
  <div class="myfillmain">
      <div class="main">
        <p class="p-title">
          <icon name="read-coin" width="15" height="15"></icon>
          {{show_data['title']}}</p>
        <div class="content">
            <div
              v-for="(v,i) in show_data['prize']"
              :key="i"
              @click="fill_money(v)"
              class="item" >
                <div class="i-top">
                  <p>送{{v['num']}}次抽奖</p>
                </div>
                <div class="i-center">
                  <p>
                    <icon name="send-coin" width="15" height="15"></icon>
                    <span>{{v['coin']}}</span>
                    <del>{{v['del_coin']}}币</del>
                  </p>
                </div>
                <div class="i-bottom">
                  <p>￥{{v['money']}}</p>
                </div>
            </div>
            <!-- 年费 -->
            <div class="item-year" @click="fill_money_year">
                <div class="year-left">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538560026772&di=c4c96303d4784122ffdc6b7733a88556&imgtype=0&src=http%3A%2F%2Fs8.sinaimg.cn%2Fsmall%2F63b19294tbbb9f4e921a7%26690">
                </div>
                <div class="year-right">
                    <p>欢乐充值</p>
                    <h5>年费vip会员<span style="color:orange">{{show_data['year_data']['money']}}</span>元</h5>
                    <h6>{{show_data['year_data']['dis']}}</h6>
                </div>

            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //显示数据
      show_data: {
        title: "十一小长假，我的金币到手来咯",
        year_data: {
          //年费数据
          money: 365,
          dis: "每天1元，全年免费看喔"
        },
        prize: [
          //抽奖
          {
            num: "1", //抽奖次数
            coin: "1222", //币
            del_coin: "500", //原来币
            money: "122" //钱
          },
          {
            num: "2", //抽奖次数
            coin: "2222", //币
            del_coin: "700", //原来币
            money: "200" //钱
          },
          {
            num: "3", //抽奖次数
            coin: "8222", //币
            del_coin: "1500", //原来币
            money: "522" //钱
          },
          {
            num: "4", //抽奖次数
            coin: "9999", //币
            del_coin: "1000", //原来币
            money: "999" //钱
          }
        ]
      }
    };
  },
  methods: {
    //点击充值
    fill_money(v) {
      console.log(v);
    },
    //充年费
    fill_money_year() {}
  }
};
</script>

<style lang="less" scoped>
.public {
  // border: 1px solid purple;
  box-sizing: border-box;
}
p,
h5,
h6 {
  padding: 0;
  margin: 0;
  font-size: 0.5rem;
  line-height: 1rem;
}
.content {
  .public;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .item {
    margin-top: 1rem;
    border: 1px solid rgba(255, 0, 0, 0.35);
    box-sizing: border-box;
    border-radius: 0.4rem;
    height: 3rem;
    width: 40%;
    .i-top {
      // border: 1px solid red;
      box-sizing: border-box;
      height: 1rem;
      p {
        width: 4rem;
        margin: auto;
        background-color: red;
        margin-top: -0.5rem;
        border-radius: 0.3rem;
        color: #fff;
      }
    }
    .i-center {
      // border: 1px solid red;
      box-sizing: border-box;
      height: 1rem;
      del {
        color: gray;
      }
    }
    .i-bottom {
      // border: 1px solid red;
      box-sizing: border-box;
      height: 1rem;
      p {
        height: 0.8rem;
        line-height: 0.8rem;
        border: 1px solid red;
        box-sizing: border-box;
        border-radius: 0.3rem;
        margin: auto;
        width: 2rem;
      }
    }
  }
  .item-year {
    margin-top: 1rem;
    border-radius: 0.3rem;
    width: 89%;
    height: 3rem;
    border: 1px solid rgba(255, 0, 0, 0.35);
    display: flex;
    justify-content: center;
    .year-left {
      width: 3rem;
      height: 100%;
      // border: 1px solid green;
      box-sizing: border-box;
      border-radius: 3rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .year-right {
      width: 8rem;
      height: 100%;
      // border: 1px solid green;
      box-sizing: border-box;
      p {
        border: 1px solid red;
        width: 70%;
        margin: auto;
        border-radius: 0.3rem;
        margin-left: -0.5rem;
        margin-top: -0.5rem;
        background-color: red;
        color: #fff;
      }
      h5 {
        font-size: 0.6rem;
      }
      h6 {
        color: gray;
        font-weight: 300;
      }
    }
  }
}
.p-title {
  color: red;
}
</style>
