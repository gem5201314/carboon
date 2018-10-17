<template>
    <div class="index">
        <div>
            <!--详情头部 -->
            <div class="head">
                <MyHead :dataHead="dataHead"></MyHead>
            </div>     

            <!-- 详情主体 -->
            <div class="main-body">
                <div>
                    <tab bar-active-color="#fd7d49" active-color="#fd7d49" @on-item-click="tab_select">
                        <tab-item selected @on-item-click="tab_select('info')">详情</tab-item>
                        <tab-item @on-item-click="tab_select('select')">选集</tab-item>
                    </tab>
                    <!-- 组件 详情 选集-->
                     <MySelect :selectData="selectData" v-show="current_tab=='select'"></MySelect>
                     <MyInfo v-show="current_tab=='info'"></MyInfo>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Tab, TabItem } from "vux";
export default {
  components: {
    Tab,
    TabItem,
    MyInfo: resolve => require(["./slot/MyInfo.vue"], resolve),
    MySelect: resolve => require(["./slot/MySelect.vue"], resolve),
    MyHead: resolve => require(["./slot/MyHead.vue"], resolve)
  },
  data() {
    return {
      //当前选项卡 默认详情
      current_tab: "info",

      //书籍头信息
      dataHead: {},
      //选集数据
      selectData: [
        {
          time: "2018-04-25",
          dis: "第1话 爱穿丝袜的女人，到底有多诱惑？",
          looks: "500",
          id: "1",
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"
        },
        {
          time: "2018-04-25",
          dis: "第1话 爱穿丝袜的女人，到底有多诱惑？",
          looks: "500",
          id: "1",
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"
        },
        {
          time: "2018-04-25",
          dis: "第1话 爱穿丝袜的女人，到底有多诱惑？",
          looks: "500",
          id: "1",
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"
        },
        {
          time: "2018-04-25",
          dis: "第1话 爱穿丝袜的女人，到底有多诱惑？",
          looks: "500",
          id: "1",
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"
        },
        {
          time: "2018-04-25",
          dis: "第1话 爱穿丝袜的女人，到底有多诱惑？",
          looks: "500",
          id: "1",
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/53b70195-0d65-4e51-8317-cf27f6675f64.jpg@75Q"
        }
      ]
    };
  },
  methods: {
    //选项卡选择
    tab_select(v) {
      this.current_tab = v;

      //获取选集
      this.selectData = [];
      let data = {
        id: 1114,
        pageSize: 10,
        pageNo: 1,
        sort: 0
      };
      this.$HTTP.bookinfo_http_select_data(data, res => {
        this.selectData = res["list"];
      });
    },
    //获取书籍详情信息 头部
    get_book_info() {
      let data = {
        id: 1114
      };
      this.$HTTP.bookinfo_http_data(data, res => {
        this.dataHead = res["cartoon"];
      });
    }
  },
  created() {
    this.get_book_info();
  }
};
</script>
<style lang="less" src="./index.less" scoped></style>
