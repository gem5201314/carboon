<template>
    <div id="mytitle">
        <div class="mytitle">
             <p>{{centerTextData}}</p>
             <span @click="span_router">{{rightTextData['text']}}
                 <icon style="margin-top:-0.1rem;margin-left:-4px;" name="rightcolor" width="15" height="15"></icon>
                  <!-- <BaiIcon name="rang_boy" width="30" height="30"></BaiIcon> -->
             </span>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    //props值 有默认值rightTextData
    rightTextData: {
      type: Object,
      default: () => {
        return {
          text: "更多",
          router: ""
        };
      }
    },
    //无默认值 centerTextData
    centerTextData: {
      type: String,
      default: "sss"
    }
  },
  data() {
    return {};
  },
  methods: {
    //更多导航
    span_router() {
      this.$router.push({ name: "more" });
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
#mytitle {
  padding-top: 5px;
  padding-bottom: 5px;
  background: #fff;
  margin-top: 0.5rem;
}
.mytitle {
  width: 100%;
  height: 2rem;
  //   border: 1px solid red;
  box-sizing: border-box;
  p {
    height: 100%;
    margin: 0;
    float: left;
    line-height: 2rem;
    margin-left: 50%;
    transform: translateX(-50%);
    font-size: 0.62rem;
    font-weight: 700;
    color: #333;
  }
  span {
    font-size: 0.44rem;
    float: right;
    margin-right: 0.5rem;
    line-height: 2rem;
    color: #fd7d49;
  }
}
</style>
