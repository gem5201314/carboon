<template>
    <div class="img-icon" :style="'width:'+width+'px;height:'+height+'px'">
        <img :src="img_url[name]" :width="width+'px'" :height="height+'px'" />
    </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "rank_boy"
    },
    width: {
      type: String,
      default: "20"
    },
    height: {
      type: String,
      default: "20"
    }
  },
  data() {
    return {
      //所有图片
      img_url: {
        rang_boy: require("../../assets/new-img-icon/rank_boy.png"),
        rang_girl: require("../../assets/new-img-icon/rank_girl.png"),
        rang_chase: require("../../assets/new-img-icon/rank_chase.png"),
        rang_new: require("../../assets/new-img-icon/rank_new.png"),
        rang_person: require("../../assets/new-img-icon/rank_person.png")
        // rang_boy: require("../../assets/new-img-icon/rank_boy.png")
      }
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="less" scoped>
.img-icon {
  //   border: 1px solid red;
  display: inline-block;
  img {
    float: left;
    margin-top: 50%;
    transform: translateY(-25%);
    padding-bottom: 2px;
    // width: 20px;
    // height: 20px;
  }
}
</style>


