<template>
  <div class="index" @click="set_alert">
	   <div class="head">
       	<Swiper :list="data_list" height="200px"></Swiper>
        <div class="search-div" @click="search_router">
            <icon name="search" width="20" height="20"></icon>
        </div>
     </div>
		<MyNav :nav_list="nav_list"></MyNav>
		<MyTitle :centerTextData="'新推荐动词'"></MyTitle>
		<MyPalace2 :dataMyPalace2="palace_show_data['todayRecommends']"></MyPalace2>

		<MyTitle :centerTextData="'激情荡漾'"></MyTitle>
		<MyPalace3 :dataMyPalace3="palace_show_data['newCartoons']"></MyPalace3>

    <MyTitle :centerTextData="'精品完结'"></MyTitle>
    <MyPalace2 :dataMyPalace2="palace_show_data['hotRecommends']"></MyPalace2>

    <MyTitle :centerTextData="'真人漫画'"></MyTitle>
		<MyPalace3 :dataMyPalace3="palace_show_data['realityCartoons']"></MyPalace3>

     <MyTitle :centerTextData="'精品完结'"></MyTitle>
    <MyPalace1 :dataMyPalace1="dataMyPalace1"></MyPalace1>

    <!-- 二维码弹框 -->
    <MyAlert v-if="alert_show" @click="set_alert"></MyAlert>

  </div>
</template>
<script>
import { Swiper } from "vux";
export default {
  components: {
    Swiper,
    MyNav: resolve => require(["./slot/MyNav.vue"], resolve), //导航组件
    MyTitle: resolve => require(["./slot/MyTitle.vue"], resolve), //标题组件
    MyPalace1: resolve => require(["./slot/MyPalace1.vue"], resolve), //1宫格
    MyPalace2: resolve => require(["./slot/MyPalace2.vue"], resolve), //2宫格
    MyPalace3: resolve => require(["./slot/MyPalace3.vue"], resolve), //3宫格
    MyAlert: resolve => require(["./slot/MyAlert.vue"], resolve) //二维码弹框
  },
  data() {
    return {
      //二维码弹框
      alert_show: true,
      //swiper数据
      data_list: [
        {
          url: "",
          img:
            "http://img.super-dreamers.com/xqmall/images/94baa5e8-2d48-4bf4-939e-dad2ed38361f.jpg@75Q",
          title: "这是杨幂",
          fallbackImg: "@/assets/public-img/1.jpg",
          id: ""
        }
      ],
      //一宫格数据
      dataMyPalace1: [
        {
          name: "我要你杨幂",
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/42adfb91-4663-4b8e-9306-a9821bc48294.jpg@75Q",
          update: "231"
        },
        {
          name: "我要你杨幂",
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/42adfb91-4663-4b8e-9306-a9821bc48294.jpg@75Q",
          update: "231"
        },
        {
          name: "我要你杨幂",
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/42adfb91-4663-4b8e-9306-a9821bc48294.jpg@75Q",
          update: "231"
        },
        {
          name: "我要你杨幂",
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/42adfb91-4663-4b8e-9306-a9821bc48294.jpg@75Q",
          update: "231"
        }
      ],
      //nav数据
      nav_list: [
        {
          icon: "rang_girl",
          title: "女生榜",
          router: ""
        },
        {
          icon: "rang_boy",
          title: "男生榜",
          router: ""
        },
        {
          icon: "rang_person",
          title: "人气榜",
          router: ""
        },
        {
          icon: "rang_new",
          title: "新作榜",
          router: ""
        },
        {
          icon: "rang_chase",
          title: "追更榜",
          router: ""
        }
      ],
      //宫格显示数据
      palace_show_data: {
        hotRecommends: [], //精品
        newCartoons: [], //激情
        todayRecommends: [], //新推荐
        realityCartoons: [] // 真人
      }
    };
  },
  methods: {
    //二维码弹框隐藏
    set_alert() {
      this.alert_show = false;
    },
    //搜索路由
    search_router() {
      this.$router.push({ name: "search" });
    },
    //获取主页数据
    get_index_data() {
      let data = {
        emulateJSON: true
      };
      this.$HTTP.homepage_http_index(data, res => {
        //宫格数据赋值
        this.palace_show_data = res["indexBean"];
        //头部背景
        this.data_list = [];
        res["indexBean"]["adVos"].map((v, i) => {
          this.data_list.push({
            img: v["miPicUrl"],
            id: v["id"]
          });
        });
      });
    }
  },
  created() {
    this.get_index_data();
  }
};
</script>

<style lang="less" src="./index.less" scoped></style>
