<template>
    <div>
        <p @click="proving_click" style="color:#fff" v-show="!proving_data['send']">获取验证码</p>
        <p v-show="proving_data['send']" style="color:#c1c1c1">{{proving_data['text']}}后秒重新发送</p>
    </div>
</template>
<script>
export default {
  props: ["regValue"], //用于正则验证是否发送验证码，手机号
  data() {
    return {
      //验证码倒计时
      proving_data: {
        text: "60",
        send: false
      }
    };
  },
  methods: {
    proving_click() {
      //....判断手机号
      let phone = this.regValue;
      if (phone.toString().length != 11 || Number(phone).toString() == "NaN") {
        //   提交vuex 弹框提示
        this.$store.commit({
          type: "set_toast_data",
          data: {
            value: true,
            type: "warn",
            text: "输入正确手机号"
          }
        });
        return 0;
      }
      //
      //验证码发送
      //
      this.$store.commit({
        type: "set_alert_data",
        data: {
          value: true,
          title: "",
          content: "验证码发送成功"
        }
      });
      //
      let Inter = setInterval(() => {
        this.proving_data["text"] = Number(this.proving_data["text"]) - 1;
        this.proving_data["send"] = true;
        // 倒计时到0时
        if (this.proving_data["text"] == 0) {
          clearInterval(Inter);
          this.proving_data["text"] = 60;
          this.proving_data["send"] = false;
        }
      }, 1000);
      //....
    }
  }
};
</script>