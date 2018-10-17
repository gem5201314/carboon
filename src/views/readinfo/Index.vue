<template>
  <div class="index">
    <div>
        <div class="top-div" v-show="top_bottom_show">
             <MyReadTop :bookSelectInfo="bookSelectInfo"></MyReadTop>
        </div>
        <!--  -->
        <MyReadImg @imgClick="img_click" :imgList="imgList"></MyReadImg>
        <!--  -->
        <div class="bottom-div" v-show="top_bottom_show">
            <MyReadBottom :bookId="bookId" @getMenuParme="getMenuParme"></MyReadBottom>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    MyReadTop: resolve => require(["./slot/MyReadTop.vue"], resolve),
    MyReadImg: resolve => require(["./slot/MyReadImg.vue"], resolve),
    MyReadBottom: resolve => require(["./slot/MyReadBottom.vue"], resolve)
  },
  data() {
    return {
      //头底部是否显示
      top_bottom_show: false,

      //当前书籍标识
      bookId: "",
      // 书籍选集数据 头部信息
      bookSelectInfo: {
        current_name: "强撩邓紫棋", //当前选集名字
        current_num: "2", //当前选集数字
        residue: "35" //还剩余多少
      },

      //书籍图片
      imgList: []
    };
  },
  methods: {
    //获取菜单参数
    getMenuParme(v) {
      console.log("====================================");
      console.log(v);
      console.log("====================================");
      if (v["text"] == "目录") {
        this.$router.push({ name: "bookinfo" });
      }
    },
    //图片点击
    img_click() {
      this.top_bottom_show = !this.top_bottom_show;
    },

    //获取书籍信息
    get_info_data() {
      let data = {
        id: 11667
      };
      this.$HTTP.readinfo_http_data(data, res => {
        this.imgList = res["chapter"]["chapterPicVos"];
        this.bookSelectInfo = res["chapter"];
      });
    }
  },
  created() {
    this.get_info_data();
  }
};
</script>

<style lang="less" src="./index.less" scoped></style>
