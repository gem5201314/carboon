<template>
    <div class="mybottom">
        <div class="mybottom">
            <div class="main">
                   <div class="item" v-for="(v,i) in menu_data" :key="i" @click="menuClick(v)">
                       <span v-show="!v['ready']">
                           <icon :name="v['icon']" width="17" height="15"></icon>
                       </span>
                       <span  v-show="!v['ready']">{{v['text']}}</span>
                       <!-- 已经点赞的样式 -->
                        <span v-show="v['ready']==true&&v['text']=='点赞'">
                           <icon :name="'yeslike'" width="15" height="15"></icon>
                        </span>
                        <span style="color:#fd7d49" v-show="v['ready']==true&&v['text']=='点赞'">{{v['text']}}</span>
                        <!-- 已经收藏的样式 -->
                        <span v-show="v['ready']==true&&v['text']=='收藏'">
                           <icon :name="'yesfav'" width="15" height="15"></icon>
                        </span>
                        <span style="color:#fd7d49" v-show="v['ready']==true&&v['text']=='收藏'">{{v['text']}}</span>
                   </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["bookId"], //书籍标识
  data() {
    return {
      //   菜单数据
      menu_data: [
        {
          icon: "menu",
          text: "目录",
          id: "1"
        },
        {
          icon: "left",
          text: "上一话",
          id: "2"
        },
        {
          icon: "right",
          text: "下一话",
          id: "3"
        },
        {
          icon: "nolike",
          text: "点赞",
          id: "4",
          ready: true
        },
        {
          icon: "nofav",
          text: "收藏",
          id: "5",
          ready: false
        }
      ]
    };
  },
  methods: {
    //菜单点击 传递事件给父组件，参数为当前菜单点击对象
    menuClick(v) {
      switch (v["text"]) {
        case "目录":
          this.$emit("getMenuParme", v);
          return "";
        case "上一话":
          this.$emit("getMenuParme", v);
          return "";
        case "下一话":
          this.$emit("getMenuParme", v);
          return "";
        case "点赞":
          v["ready"] = !v["ready"];
          this.$emit("getMenuParme", v);

          return "";
        case "收藏":
          v["ready"] = !v["ready"];
          this.$emit("getMenuParme", v);
          return "";
      }
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.mybottom {
  width: 100%;
}
.main {
  width: 100%;
  height: 2rem;
  //   border: 1px solid red;
  background-color: rgba(0, 0, 0, 0.81);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 0.6rem;
  .item {
    width: 20%;
    height: 2rem;
    // border: 1px solid green;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    box-sizing: border-box;
    span {
      margin: 0;
      padding: 0;
      height: 0.7rem;
      font-size: 0.5rem;
      line-height: 0.5rem;
      padding-top: 0.1rem;
      display: block;
    }
  }
}
</style>

