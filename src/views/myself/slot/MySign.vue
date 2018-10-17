<template >
  <div class="mysign">
      <div class="main">
          <div class="div-show">
              <div class="img-div">
                <img src="@/assets/public-img/1.jpg" alt="">
              </div>
              <div class="text-div">
                <p>每周一数据重置</p>
                <p style="color:orange" @click="rule_go">
                  <icon name="boy" width="10" height="10"></icon>
                  活动规则</p>
              </div>
              <div class="content-div">
                  <div v-for="(v,i) in week_data_show" @click="sign_ok(v)" :style="i==7?'width:100%':''" class="item">
                      <div class="data-div">
                          <h6>{{v['week']}}</h6>
                          <p>
                            <icon name="boy" width="10" height="10"></icon>
                            {{v['coin']}}赠币</p>
                      </div>
                      <div class="position-div" v-show="v['is_sign']">
                          <p>
                            <icon name="close" width="20" height="20"></icon>
                          </p>
                      </div>
                  </div>
              </div>
              <!-- <div class="button-div">
                  <h5 @click="sign_ok">签 到</h5>
              </div> -->
          </div>
          <div class="div-close">
                <p @click="close_sign">
                  <icon name="close" width="20" height="20"></icon>
                </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //签到显示数据
        week_data_show:[
          {
            week:"星期一",
            coin:"10",
            is_sign:true,
          },
          {
            week:"星期二",
            coin:"30",
            is_sign:true,
          },
          {
            week:"星期三",
            coin:"60",
            is_sign:false,
          },
          {
            week:"星期四",
            coin:"120",
            is_sign:false,
          },
          {
            week:"星期五",
            coin:"150",
            is_sign:false,
          },
          {
            week:"星期六",
            coin:"200",
            is_sign:false,
          },
          {
            week:"星期日",
            coin:"300",
            is_sign:false,
          },
        ],
    }
  },
  methods:{
    //活动规则显示
      rule_go(){},

     //签到
     sign_ok(v){
       this.$emit('sign-current',v)
     },
     //关闭签到
     close_sign(){
       this.$emit('close-sign','yangmi')
     }
  }
}
</script>

<style lang="less" scoped>
p,h5,h6{
  margin: 0;
  padding: 0;
  font-size: 0.5rem;
}
.public{
  // border: 1px solid purple;
  box-sizing: border-box;
}

  .main{
    .public;
    margin: auto;
    border-radius: 0.5rem;
    overflow: hidden;
    width: 80%;
    min-width: 11rem;
    margin-top: 2rem;
    background: #fff;
    .div-show{
      .public;
       width: 100%;
       // height: ;
      .img-div{
        .public;
        width: 100%;
        height:4rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .text-div{
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        .public;
        height: 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .content-div{
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .item{
             border: 1px dashed #dedede;
             // border-style:dotted solid double dashed;
             width: 30%;
             margin-bottom: 0.5rem;
             height: 3rem;
             position: relative;
             display: flex;
             align-items: center;
             justify-content: center;
             .data-div{
               h6{
                 font-size: 0.4rem;
                 font-weight: 200;
               }
               p{
                 color: orange;
               }
             }
             .position-div{
               position: absolute;
               top: 0;
               width: 100%;
               height: 100%;
               display: flex;
               align-items: center;
               justify-content: center;
               background-color: rgba(12, 12, 12, 0.6);
               // display: none;
             }
        }
      }
      .button-div{
        .public;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        h5{
          // border: 1px solid #fff;
          height: 1.3rem;
          line-height: 1.3rem;
          border-radius: 0.2rem;
          background: #0bb20c;
          color: #fff;
          font-size: 0.6rem;
          font-weight: 200;
        }
      }
    }
    .div-close{
      .public;
       height: 2rem;
       p{
         height: 100%;
         line-height: 2rem;
       }
    }
  }
</style>
