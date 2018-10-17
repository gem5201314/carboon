<template>
    <div id="info">
        <div class="info">
            <div class="text-div">
                <p>
                    <span>简介:</span>
                    据说这是很多男人都梦寐以求的能力！平常不受欢迎的家伙因为一场事故，拥有了一种“超级吸引力”，从此人生发现翻天覆地的改变！
							
                </p>
            </div>
            <div class="data-div">
                <p>
                    <icon name="i-look" width="20" height="20"></icon>
                    总浏览:1221122
                </p>
                <p>
                    <icon name="i-good" width="20" height="20"></icon>
                    点赞:1221122
                </p>
            </div>
        </div>
        <div class="author-div">
            <p>
                <span>主笔：</span>
                邓紫棋
            </p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style lang="less" scoped>
.info {
  padding: 10px;
  background: #fff;
  .text-div {
    p {
      span {
        color: gray;
      }
      text-align: justify;
      font-size: 0.5rem;
    }
  }

  .data-div {
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    p {
      font-size: 0.5rem;
      margin-right: 1rem;
      color: #9a9a9a;
    }
  }
}
.author-div {
  margin-top: 1rem;
  width: 100%;
  height: 2rem;
  background: #fff;
  //   border: 1px solid red;
  box-sizing: border-box;
  padding-left: 10px;
  line-height: 2rem;
  p {
    span {
      color: gray;
    }
    text-align: justify;
    font-size: 0.6rem;
  }
}
</style>

