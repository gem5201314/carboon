<template >
  <div class="index">
      <div class="main" @click="button_click">
          <span>{{text}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props:{  //属性
    text:{
      default:'确定',
      type:String,
    }
  },
  data(){
    return{}
  },
  methods:{
    // 按钮点击 传递事件
    button_click(){
      this.$emit('click-button','yangmi')
    },
  }
}
</script>

<style lang="less" scoped>
.index{
  width:100%;
}
.main{
  margin: auto;
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  background-color: orange;
  font-size: 0.5rem;
  border-radius: 0.5rem;
  color: #fff;
  border: 1px solid orange;
  box-sizing: border-box;
}
</style>
