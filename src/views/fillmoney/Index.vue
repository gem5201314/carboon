<template>
  <div class="index">
    <div class="main">
        <!--充值  -->
        <div class="fill" v-if="current_page=='充值'">
          <MyFillHead @fill-record="fill_record"></MyFillHead>
          <MyFillMain></MyFillMain>
          <MyTurn></MyTurn>
          <MyFillText></MyFillText>
        </div>
        <!-- 记录 -->
        <div class="record" v-if="current_page=='记录'">
             <MyFillRecord></MyFillRecord>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    MyFillHead: resolve => require(["./slot/MyFillHead.vue"], resolve),
    MyFillMain: resolve => require(["./slot/MyFillMain.vue"], resolve),
    MyFillRecord: resolve => require(["./slot/MyFillRecord.vue"], resolve),
    MyTurn: resolve => require(["./slot/MyTurn.vue"], resolve),
    MyFillText: resolve => require(["./slot/MyFillText.vue"], resolve)
  },
  data() {
    return {
      current_page: "充值"
    };
  },
  methods: {
    //路由充值记录
    fill_record(v) {
      this.current_page = "记录";
    }
  },
  created() {}
};
</script>

<style lang="less" src="./index.less" scoped></style>
