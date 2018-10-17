<template>
    <div class="index">
        <div class="myalert">
            <div class="img-div">
                <img :src="pic_data['img']">
            </div>
            <div class="text-div">
                {{pic_data['text']}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      //二维码数据
      pic_data: {
        text: "找不到公众号的小伙伴们，快来吧，喔٩(๑òωó๑)۶我爱你们喔",
        img:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539060841301&di=dd164b3028914ec87f7e3da0f92b3bef&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201611%2F05%2F20161105222221_Nx3Em.jpeg"
      }
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  //   border: 1px solid purple;
  box-sizing: border-box;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(39, 32, 32, 0.74);
  z-index: 200;
}
.myalert {
  padding: 2px;
  width: 10rem;
  height: 12rem;
  //   border: 1px solid red;
  box-sizing: border-box;
  background: #fff;
  .img-div {
    height: 8rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text-div {
    // border: 1px solid greenyellow;
    padding-top: 0.5rem;
    font-size: 0.5rem;
    color: #ff893a;
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>

