<template>
  <div class="index">
      <!-- 头部导航 -->
       <div class="head-div">
            <div class="content">
                <div v-for="(v,i) in nav_list"  :key="i" @click="nav_click(v)" :class="current_nav_data==v['id']?'item item-active':'item'">
                        <span>{{v['text']}}</span>
                </div>
            </div>
       </div>
      <!-- 主题组件 -->
      <div class="main-content">
          <MyList :rankData="rankData"></MyList>
      </div>

  </div>
</template>
<script>
export default {
  components: {
    MyList: resolve => require(["./slot/MyList.vue"], resolve)
  },
  data() {
    return {
      //当前导航数据
      current_nav_data: "4",

      //导航数据
      nav_list: [
        {
          text: "女生榜",
          id: "4"
        },
        {
          text: "男生榜",
          id: "5"
        },
        {
          text: "人气榜",
          id: "3"
        },
        {
          text: "新作榜",
          id: "2"
        },
        {
          text: "追更榜",
          id: "20"
        }
      ],
      //榜单数据
      rankData: []
    };
  },
  methods: {
    //导航
    nav_click(v) {
      this.current_nav_data = v["id"];
      this.get_data();
    },

    //获取数据 ranking_http_index
    get_data() {
      let data = {
        type: this.current_nav_data
      };
      this.$HTTP.ranking_http_rank(data, res => {
        this.rankData = res["cartoonList"];
      });
    }
  },
  created() {
    this.get_data();
  }
};
</script>

<style lang="less" src="./index.less" scoped></style>