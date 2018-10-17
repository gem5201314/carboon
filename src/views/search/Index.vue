<template>
  <div class="index">
    <!--搜索 -->
    <div class="search" style="position:fixd">
        <search @on-change="get_search_data" top="0" v-model="search_value"  ref="search"></search>
    </div>
    <!-- 热门 历史 -->
      <div class="h-r" v-show="search_data.length==0">
        <!--  -->
        <div class="hot">
          <p>热门搜索</p>
          <div class="content">
            <div v-for="(v,i) in hot_data" :key="i" class="item" @click="search_text_model(v)">{{v['text']}}</div>
          </div>
        </div>
        <!--  -->
        <div class="history"></div>
      </div>
    <!-- 结果 -->
    <div class="search-rest">
      <p>搜索结果</p>
        <div class="r-content">
            <div class="r-item" v-for="(v,i) in 8" :key="i" @click="get_book_info(v)">
                <div class="left">
                  <img src="http://img.super-dreamers.com/xqmall/images/64f420c8-90cf-4e77-8355-59ca527c6e68.jpg@75Q" alt="">
                </div>
                <div class="right">
                  <h5>想杨幂
                    <span>更新到11话</span>
                  </h5>
                  <p>作者:UU</p>
                  <div class="bottom">
                    <span v-for="i in 3" :key="i">后宫</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { Search } from "vux";
import { log } from "util";
export default {
  components: {
    Search
  },
  data() {
    return {
      //搜索词
      search_value: "",

      //搜索数据
      search_data: [],

      // 热门数据
      hot_data: [
        {
          text: "色情",
          id: "1"
        },
        {
          text: "伦理",
          id: "2"
        },
        {
          text: "姿势",
          id: "3"
        },
        {
          text: "其他",
          id: "4"
        }
      ]
    };
  },
  methods: {
    //搜索数据
    get_search_data(v) {
      console.log("====================================");
      console.log(v);
      console.log("====================================");
    },

    //路由跳转
    get_book_info(v) {
      this.$router.push({ name: "bookinfo", query: { id: 123 } });
    },
    //搜索词赋值
    search_text_model(v) {
      this.search_value = v["text"];
      this.get_search_data(v);
    }
  },
  created() {}
};
</script>

<style lang="less" src="./index.less" scoped></style>