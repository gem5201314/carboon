<template>
  <div class="index">
    <div class="update">
        <div class="head">
          <div class="tab">
            <div class="center-div">
                <li v-for="(val,i) in select_data" :key="i" :id="current_select==val['value']?'click-li':''" @click="select_click(val)">{{val.text}}</li>
            </div>
            <div class="right-div">
                 <icon  name="search" width="20px" height="20px"></icon>
            </div>
        </div>
        </div>
        <div class="content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select_data: [
        {
          text: "关注",
          value: 1
        },
        {
          text: "热门",
          value: 2
        }
      ],

      //当前选项 默认关注
      current_select: 1
    };
  },
  methods: {
    //tab选择
    select_click(val) {
      this.current_select = val["value"];
    }
  },
  //
  created() {}
};
</script>

<style lang="less" src="./index.less" scoped>
</style>
