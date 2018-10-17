<template >
  <div class="mycloum">
      <div class="main">
          <div class="content">
              <div v-for="(v,i) in showData" :key="i" :class="i%2==0?'item-double item':'item'" @click="go_router(v)">
                  <div class="left">
                    <div class="icon">
                        <icon :name="v['left_icon']" width="20" height="20"></icon>
                    </div>
                      <span>{{v['left_text']}}</span>
                  </div>
                  <div class="right">
                      <span :style="{color:v['right_text_color']}">{{v['right_text']}}</span>
                      <div class="icon">
                            <icon name="right-right" width="20" height="20"></icon>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["showData"],
  data() {
    return {
      // //显示数据
      // showData:[
      //   {
      //     left_icon:"boy",//左边图标
      //     left_text:"付费管理", //左边文字
      //     right_text:"亲爱的杨幂",//右边文字
      //     right_text_color:'green',//右边文字颜色
      //     router:"xx",//路由值
      //   },
      // ],
      //
    };
  },
  methods: {
    //路由导航 将该方法传递给父组件
    go_router(v) {
      this.$emit("go-router", v);
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  background-color: #f2f5f5;
}
.public {
  // border: 1px solid red;
  box-sizing: border-box;
}
.item {
  width: 100%;
  height: 2rem;
  font-size: 0.5rem;
  position: relative;
  background: #fff;
  .public;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    .public;
    font-size: 0.6rem;
    .icon {
      float: left;
      margin-right: 0.2rem;
      margin-left: 0.2rem;
    }
  }
  .right {
    .public;
    color: #aaaaaa;
    .icon {
      float: right;
      margin-top: -0.1rem;
      margin-right: 0.5rem;
    }
  }
}
.item::after {
  position: absolute;
  bottom: 0;
  width: 85%;
  height: 1px;
  margin-left: 50%;
  transform: translateX(-50%);
  content: "";
  background: #f4f3f3;
}
// 双数样式
.item-double {
  margin-bottom: 1rem;
}
</style>
