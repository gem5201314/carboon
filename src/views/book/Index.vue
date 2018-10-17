<template>
    <div id="book">
        <div class="tab">
            <div class="center-div">
                <li v-for="(val,i) in select_data" :key="i" :id="current_select==val['value']?'click-li':''" @click="select_click(val)">{{val.text}}</li>
            </div>
            <div class="right-div">
                 <span @click="edit_click">编辑</span>
                 <icon v-show="!isEdit" class="icon-style" name="write" width="20px" height="20px"></icon>
                 <icon v-show="isEdit" class="icon-style" name="close" width="22px" height="22px"></icon>
            </div>
        </div>
        <div class="content">
          <MyCollection v-if="current_select==1" :isEdit="isEdit" :collectionData="collectionData"></MyCollection>
          <MyHistory v-if="current_select==2" :isEdit="isEdit" :historyData="historyData"></MyHistory>
        </div>
        <!-- 全选组件 -->
        <div class="bottom-select" v-show="isEdit">
          <div class="item">
              <span>
                <CheckIcon :value.sync="all_select" type="plain"></CheckIcon>
                全选</span>
          </div>
          <div class="item">
              <span @click="delete_data">
                <icon name="delete" width="20" height="20"></icon>
                删除</span>
          </div>
        </div>

    </div>
</template>
<style>
</style>
<script>
import { CheckIcon } from "vux";
import { log } from "util";
export default {
  components: {
    CheckIcon,
    MyHistory: resolve => require(["./slot/MyHistory.vue"], resolve),
    MyCollection: resolve => require(["./slot/MyCollection.vue"], resolve)
  },
  data() {
    return {
      select_data: [
        {
          text: "收藏",
          value: 1
        },
        {
          text: "历史",
          value: 2
        }
      ],

      //当前选项 默认收藏
      current_select: 1,

      //全选状态
      all_select: false,

      //是否编辑状态
      isEdit: false,

      //  收藏数据
      collectionData: [
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/5e2faf72-ba5a-4942-9346-c2315a3e83cc.jpg@75Q",
          title: "漂亮的杨幂",
          update: [0, 55],
          checked: false
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/5e2faf72-ba5a-4942-9346-c2315a3e83cc.jpg@75Q",
          title: "漂亮的杨幂",
          update: [0, 55],
          checked: false
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/5e2faf72-ba5a-4942-9346-c2315a3e83cc.jpg@75Q",
          title: "漂亮的杨幂",
          update: [0, 55],
          checked: false
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/5e2faf72-ba5a-4942-9346-c2315a3e83cc.jpg@75Q",
          title: "漂亮的杨幂",
          update: [0, 55],
          checked: false
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/5e2faf72-ba5a-4942-9346-c2315a3e83cc.jpg@75Q",
          title: "漂亮的杨幂",
          update: [0, 55],
          checked: false
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/5e2faf72-ba5a-4942-9346-c2315a3e83cc.jpg@75Q",
          title: "漂亮的杨幂",
          update: [0, 55],
          checked: false
        }
      ],
      //历史数据
      historyData: [
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/6d04cc33-6652-48db-bab8-eee0ef34302d.jpg@75Q",
          title: "漂亮的杨幂",
          update: "44",
          look: "2",
          checked: false,
          id: "1"
        },
        {
          imgurl:
            "http://img.super-dreamers.com/xqmall/images/6d04cc33-6652-48db-bab8-eee0ef34302d.jpg@75Q",
          title: "漂亮的杨幂",
          update: "44",
          look: "2",
          checked: false,
          id: "1"
        }
      ],

      //所选择的数据
      select_arr_data: []
    };
  },
  methods: {
    //tab选择
    select_click(val) {
      this.current_select = val["value"];
      this.isEdit = false;
      this.all_select = false;
    },
    //编辑按钮
    edit_click() {
      this.isEdit = this.isEdit == true ? false : true;
      this.all_select = false;
    },
    //删除
    delete_data() {
      this.$store.commit({
        type: "set_confirm_data",
        data: {
          value: true,
          title: "",
          content: "确定删除么",
          fn: () => {
            //二次弹框确定后执行的函数
            console.log("====================================");
            console.log(this.delete_data_rest());
            console.log("====================================");
          }
        }
      });
    },
    //删除数据构造
    delete_data_rest() {
      let new_arr = [];
      if (this.current_select == 1) {
        //收藏
        this.collectionData.map((v, i) => {
          if (v["checked"] == true) {
            new_arr.push({
              id: v["id"]
            });
          }
        });
      }
      if (this.current_select == 2) {
        //历史
        this.historyData.map((v, i) => {
          if (v["checked"] == true) {
            new_arr.push({
              id: v["id"]
            });
          }
        });
      }
      return new_arr;
    }
  },
  //属性监听
  watch: {
    //全选值改变
    all_select() {
      if (this.current_select == 1) {
        //收藏
        if (this.all_select == true) {
          this.collectionData.map((v, i) => {
            v["checked"] = true;
          });
        } else {
          this.collectionData.map((v, i) => {
            v["checked"] = false;
          });
        }
      }
      if (this.current_select == 2) {
        //历史
        if (this.all_select == true) {
          this.historyData.map((v, i) => {
            v["checked"] = true;
          });
        } else {
          this.historyData.map((v, i) => {
            v["checked"] = false;
          });
        }
      }
    }
  }
};
</script>
<style lang="less" src="./index.less" scoped></style>

