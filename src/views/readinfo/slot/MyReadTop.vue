<template>
    <div class="myreadtop">
        <div class="myreadtop">
            <div class="main">
                <div class="item-return" @click="return_back">
                    <icon name="book" width="1rem" height="1rem"></icon>
                </div>
                <div class="item1-title">第{{ bookSelectInfo['chapterIndex']}}话 {{ bookSelectInfo['name']}}</div>
                <div class="item1-how">剩{{ bookSelectInfo['shamPraiseCount']}}话</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["bookSelectInfo"],
  data() {
    return {
      //   // 书籍选集数据
      //   bookSelectInfo: {
      //     current_name: "强撩邓紫棋", //当前选集名字
      //     current_num: "2", //当前选集数字
      //     residue: "35" //还剩余多少
      //   }
    };
  },
  methods: {
    //返回路由
    return_back() {
      this.$router.go(-1);
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 2rem;
  //   border: 1px solid red;
  background-color: rgba(0, 0, 0, 0.81);
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  line-height: 2rem;
  color: #fff;
  font-size: 0.6rem;
  .item-return {
    width: 20%;
    min-width: 3rem;
    // border: 1px solid green;
    box-sizing: border-box;
  }
  .item1-title {
    width: 50%;
    min-width: 8rem;
    // border: 1px solid green;
    box-sizing: border-box;
    text-align: center;
  }
  .item1-how {
    // border: 1px solid green;
    box-sizing: border-box;
    min-width: 5rem;
    width: 30%;
  }
}
</style>

