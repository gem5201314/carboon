<template>
    <div class="myfillrecord">
        <div class="main">
           <!--  -->
           <div class="content">
             <!--  -->
             <div class="main-show">
                <div class="enter-div">
                      <div class="e-main">
                        <div class="e-item" v-for="(v,i) in data_coin" :key="i">
                            <p>{{v['dis']}}</p>
                            <p class="p-right">{{v['value']}}</p>
                            <h6>{{v['time']}}</h6>
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
  data() {
    return {
      data_coin: [
        {
          time: "2018-10-1",
          dis: "范冰冰充值的",
          value: "+8.8"
        },
        {
          time: "2018.12.01",
          dis: "杨幂结婚充的",
          value: "+520"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.public {
  // border: 1px solid purple;
  box-sizing: border-box;
}
h3,
h6,
p {
  margin: 0;
  padding: 0;
  color: #fff;
}

.main {
  .head {
    .public;
    height: 10rem;
    position: relative;
    .img-div {
      width: 100%;
      height: 100%;
      .public;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text-div {
      width: 100%;
      height: 100%;
      .public;
      position: absolute;
      left: 0;
      top: 0;
      h3 {
        margin-top: 1rem;
      }
    }
  }
  .content {
    .public;
    .tab {
      height: 1.5rem;
      width: 100%;
      box-shadow: 0px 0px 1px 1px #e1e1e1;
      .tab-main {
        .public;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .tab-item {
          padding: 3px;
          font-size: 0.64rem;
          font-weight: 500;
        }
      }
    }
    .main-show {
      .public;
      width: 100%;
      height: 14rem;
      overflow-y: auto;
      overflow-x: hidden;
      .enter-div {
        .e-main {
          .e-item {
            width: 95%;
            margin: auto;
            height: 2.5rem;
            .public;
            padding: 5px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-size: 0.6rem;
            border-bottom: 1px solid #e1e1e1;
            p {
              color: #000;
              line-height: 1rem;
            }
            .p-right {
              color: red;
              font-weight: 600;
            }
            h6 {
              width: 100%;
              text-align: left;
              font-weight: 200;
              color: #919191;
            }
          }
        }
      }
    }
  }
}
//
.tab-item-active {
  color: #fe7c4a;
  border-bottom: 0.1rem solid #fe7c4a;
}
</style>
