<template >
  <div class="index">
    <XInput class="input"
        :type="inputData['type']"
        :disabled="inputData['disabled']"
        :show-clear="show_clear"
        :max='max'
        :placeholder="inputData['placeholder']"
        v-model="inputData['value']">
        <!--输入框左边图标  -->
        <icon slot="label" :name="inputData['left_icon']" height="20" width="20"></icon>
        <!-- 输入框显示右边插槽 -->
        <div slot="right" class="input-right">
          <slot name="right"></slot>
        </div>
        <!--  -->
    </XInput>
  </div>
</template>

<script>
import { XInput } from "vux";
export default {
  props: {
    inputData: {
      default: () => {
        return {
          value: "", //v-model绑定值
          type: "text", //类型
          disabled: false, //禁用
          left_icon: "boy", //左边图标
          placeholder: "输入框提示" //提示文字
        };
      },
      type: Object
    }
  },
  components: {
    XInput
  },
  data() {
    return {
      // 是否显示清除图标
      show_clear: true,
      //
      max: 12
      // 数据
      // inputData:{
      //   value:"",//v-model绑定值
      //   left_icon:"",//左边图标
      //   placeholder:"",//提示文字
      // },
    };
  },
  methods: {},
  mounted() {
    // 判断右边显示插槽是否被实现 如果实现，则取消右边清除图标
    this.show_clear = this.$slots.right ? false : true;
  }
};
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  // border: 1px solid red;
  box-sizing: border-box;
  color: #fff;
  .input {
    margin: auto;
    font-size: 0.5rem;
    height: 0.7rem;
    width: 90%;
    border-radius: 0.8rem;
    overflow: hidden;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.38);
  }
}
//
.input-right {
}
//
</style>
