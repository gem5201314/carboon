<template>
  <div class="index">
      <div class="index">
        <!-- 固定头部 -->
         <div class="top">
             <p>分类</p>
             <span @click="search_router">
                 <icon name="搜索" width="20" height="20"></icon>
             </span>
        </div>
        <!-- 筛选 -->
        <div class="query">
            <div class="show-query">
                <MyCategory :classData="class_data_all" @select_change="select_change">
                   <template slot="more">
                      <span @click="is_show">更多</span>
                    </template>
                </MyCategory>
            </div>
            <div class="hide-query" v-show="ok_show">
              <MyCategory :classData="class_data_A"  @select_change="select_change"></MyCategory>
              <MyCategory :classData="class_data_A"  @select_change="select_change"></MyCategory>
              <MyCategory :classData="class_data_A"  @select_change="select_change"></MyCategory>
            </div>
        </div>
        <!-- 组件 -->
        <MyPanel :panelData="panelData"></MyPanel>
      </div>
  </div>
</template>
<script>
import { Swiper } from "vux";
export default {
  components: {
    MyCategory: resolve => require(["./slot/MyCategory.vue"], resolve),
    MyPanel: resolve => require(["./slot/MyPanel.vue"], resolve)
  },
  data() {
    return {
      //隐藏变量
      ok_show: false,
      //所有分类
      class_data_all: [
        {
          name: "全部",
          router: "xxx"
        },
        {
          name: "恋人",
          router: "xxx"
        },
        {
          name: "都市",
          router: "xxx"
        },
        {
          name: "伦理",
          router: "xxx"
        },
        {
          name: "爱情",
          router: "xxx"
        },
        {
          name: "异能",
          router: "xxx"
        },
        {
          name: "搞笑",
          router: "xxx"
        }
      ],
      //A分类
      class_data_A: [
        {
          name: "全部",
          router: "xxx"
        },
        {
          name: "连载",
          router: "xxx"
        },
        {
          name: "完结",
          router: "xxx"
        }
      ],
      // panel数据
      panelData: [
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/11e4289b-36e0-4e09-adb3-8861f87268ce.jpg@75Q",
          title: "不期而遇",
          update: "更新到44话",
          type: "恋爱.搞笑",
          id: "1"
        }
      ]
    };
  },
  methods: {
    //路由导航
    span_router() {
      this.get_type_data();
    },

    //分类选择
    select_change(v) {
      this.get_type_data();
    },
    //是否隐藏
    is_show() {
      this.ok_show = !this.ok_show;
    },
    //获取分类类型
    get_type() {
      let data = {
        emulateJSON: true
      };
      this.$HTTP.classify_http_type(data, res => {
        this.class_data_all = res["cartoonType"];
        this.class_data_all.unshift({ name: "全部" });
      });
    },

    //搜索页面跳转
    search_router() {
      this.$router.push({ name: "search" });
    },
    //获取分类数据
    get_type_data() {
      let data = {
        pageNo: 1,
        pageSize: 10,
        cartoonType: "",
        state: "",
        price: "",
        order: ""
      };
      this.$HTTP.classify_http_data(data, res => {
        this.panelData = res["list"];
      });
    }
  },
  created() {
    this.get_type();
    this.get_type_data();
  }
};
</script>

<style lang="less" src="./index.less" scoped></style>
