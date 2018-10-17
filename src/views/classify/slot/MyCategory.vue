<template>
    <div id="mycategory">
        <div class="mycategory">
            <div class="content">
                <div v-for="(v,i) in classData" :key="i" :class="current_class==v['name']?' active-item':'item'" @click="current_select(v)">
                   <p>{{v['name']}}</p>
                </div>

                <div class='item'>
                     <!-- 实名插槽 -->
                    <p style="color:orange">
                        <slot name="more"></slot>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["classData"],
  data() {
    return {
      //当前分类
      current_class: "全部"
      // 分类列表
      //   classData: [
      //     {
      //       text: "全部",
      //       router: "xxx"
      //     },
      //   ]
    };
  },
  methods: {
    //当前选着分类
    current_select(v) {
      this.current_class = v["name"];
      this.$emit("select_change", v);
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.mycategory {
  width: 100%;
  .content {
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: flex-start;
    // border: 1px solid red;
    box-sizing: border-box;
    flex-wrap: wrap;
    .item {
      padding: 4px;
      width: 20%;
      height: 1.5rem;
      min-width: 3rem;
      //   border: 1px solid green;
      box-sizing: border-box;
      p {
        margin: 0;
        width: 100%;
        height: 1rem;
        font-size: 0.7rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50px;
        color: #909090;
      }
    }
  }
}
.active-item {
  padding: 4px;
  width: 20%;
  height: 1.5rem;
  min-width: 3rem;
  //   border: 1px solid green;
  box-sizing: border-box;
  p {
    margin: 0;
    width: 100%;
    height: 1rem;
    font-size: 0.7rem;
    line-height: 1rem;
    text-align: center;
    border-radius: 50px;
    color: #fff;
    background: #fe7c4a;
  }
}
</style>
