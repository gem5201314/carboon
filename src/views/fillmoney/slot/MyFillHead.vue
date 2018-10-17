<template>
  <div class="myfillhead">
      <div class="main">
        <div class="nav-div">
            <p
            v-for="(v,i) in nav_data"
            :key="i"
            @click="nav_router(v)"
            :style="v['router']=='充值记录'?'border:none':''"
            >{{v['text']}}</p>
        </div>
        <div class="img-div">
            <img src="http://img.super-dreamers.com/xqmall/images/activity/cz_gq_img_02.png" alt="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //导航数据
      nav_data:[
        {
          text:"漫画",
          router:"update",
        },
        {
          text:"首页",
          router:"homepage",
        },
        {
          text:"充值记录",
          router:"充值记录",
        },
      ],
    }
  },
  methods:{
    nav_router(v){
      if(v['router']=='充值记录'){
        // 传递事件
        this.$emit('fill-record','充值记录')
      }
      else{
        this.$router.push({name:v['router']})
      }
    }
  },
}
</script>

<style lang="less" scoped>
.public{
  // border: 1px solid purple;
  box-sizing: border-box;
}
h5,h6,p{
  margin: 0;
  padding: 0;
  font-size: 0.5rem;
}
.main{
  .public;
   width: 100%;
  .nav-div{
    .public;
    height: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fb7b49;
    color: #fff;
    p{
      font-size: 0.6rem;
      border-right: 2px solid #fff;
      width: 33%;
    }
  }
  .img-div{
    .public;
    width: 100%;
    height: 9rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
