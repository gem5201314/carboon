<template>
    <div id="mynav">
        <div class="nav-div">
            <div class="item" v-for="(v,i) in nav_list" :key="i" @click="go_rank_page(v)">
                <!-- <icon :name="v['icon']" width="35" height="35"></icon> -->
                 <BaiIcon :name="v['icon']" width="35" height="35"></BaiIcon>
                <p>{{v['title']}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["nav_list"], //props值必传
  data() {
    return {
      //   nav_list: [
      //     {
      //       icon: "shopping-fill",
      //       title: "女生榜",
      //       router: ""
      //     },
      //     {
      //       icon: "shopping-fill",
      //       title: "男生榜",
      //       router: ""
      //     },
      //     {
      //       icon: "shopping-fill",
      //       title: "人气榜",
      //       router: ""
      //     },
      //     {
      //       icon: "shopping-fill",
      //       title: "新作榜",
      //       router: ""
      //     },
      //     {
      //       icon: "shopping-fill",
      //       title: "更新榜",
      //       router: ""
      //     }
      //   ]
    };
  },
  methods: {
    //go榜单页面
    go_rank_page(v) {
      this.$router.push({ name: "ranking", query: { id: 123 } });
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
#mynav {
  padding-top: 5px;
  padding-bottom: 5px;
  background: #fff;
}
.nav-div {
  display: flex;
  height: 2.5rem;
  //   border: 1px solid red;
  justify-content: flex-start;
  .item {
    width: 2rem;
    height: 100%;
    // border: 1px solid green;
    box-sizing: border-box;
    margin-left: 1rem;
    p {
      font-size: 0.6rem;
      margin: 0;
      color: #333;
    }
  }
}
</style>

