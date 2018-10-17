<template>
  <div id="foot">
      <div class="flex">
           <!-- <tabbar class="self-tabbar">
              <tabbar-item v-for="(v,i) in foot_nav_data" :key="i" @on-item-click="item_click(v)" :selected="v['is_selected']">
                <icon slot="icon" class="self-icon" :name="v['icon']" width="20px" height="20px"></icon>
                <span slot="label" class="span-text">{{v['title']}}</span>
              </tabbar-item>
            </tabbar> -->
            <div class="content">
                <div class="item" v-for="(v,i) in foot_nav_data" :key="i" @click="item_click(v)">
                  <p>
                    <icon v-show="current_router!=v['title']"  class="self-icon" :name="v['icon']" width="20px" height="20px"></icon>
                    <icon v-show="current_router==v['title']"  class="self-icon" :name="v['router_icon']" width="20px" height="20px"></icon>
                  </p>
                  <span  class="span-text">{{v['title']}}</span>
                </div>
            </div>
          </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //当前路由数据
      current_router:"首页",
      //数据
      foot_nav_data: [
        {
          title: "首页",
          icon: "首页",
          router_icon:"首页1",
          router: "homepage",
        },
        {
          title: "分类",
          icon: "分类",
          router_icon:"分类1",
          router: "classify",
        },
        {
          title: "书架",
          icon: "书",
          router_icon:"书1",
          router: "book",
        },
        {
          title: "我的",
          icon: "我的",
          router_icon:"我的1",
          router: "myself",
        }
      ]
    };
  },
  methods: {
    //事件点击
    item_click(v) {
      this.current_router=v['title']
      this.$router.push({ name: v["router"], query: { id: 123 } });
      console.log('xx',this.current_router);
    }
  },
  created() {}
};
</script>
<style lang="less">
.flex {
  width: 100%;
  height: 10%;
  max-height: 2.2rem;
  position: fixed;
  bottom: 0px;
  padding: 0.1rem;
  // border: 1px solid #bbafaf;
  box-sizing: border-box;
  .content{
    height: 100%;
    width: 100%;
    justify-content: space-around;
    border: 1px solid #f3f3f3;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .item{
      width: 20%;
      height: 2rem;
      // border: 1px solid green;
      p{
        margin: 0;
        padding: 0;
        // border: 1px solid green;
        height: 1rem;
        .self-icon{
          margin-top: -3px;
        }
      }
      span{
        float: left;
        margin-left:50%;
        transform: translateX(-50%);
        font-size: 0.5rem;
        // border: 1px solid green;
      }
    }
  }

}
</style>
