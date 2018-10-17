<template>
    <div class="mylogin">
      <div class="main">
        <div class="img-div">
          <img src="http://img18.3lian.com/d/file/201708/26/7c704b929531d907a4fefe27aedde30f.jpg">
        </div>
        <div class="text-div">
          <div class="head">
              <p @touchstart="router_back">
                  <icon name="return" width="30" height="30">
                  </icon>
              </p>
          </div>
          <div class="content">
              <div class="input-div">
                  <BaiInput :inputData="form_data['user_tel']"></BaiInput>
              </div>
              <div class="input-div">
                  <BaiInput :inputData="form_data['user_password']"></BaiInput>
              </div>
              <div class="input-div">
                  <BaiButton @click-button="button_click" text="登录"></BaiButton>
              </div>
              <p @touchstart="router_nopassword"
               style="color:orange;font-size:0.6rem;margin-top:1rem;">
               忘记密码</p>
          </div>
          <div class="bottom">
                <p @click="router_register">
                  <span>没有账号？快速注册</span>
                </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      //表单数据
      form_data: {
        // 手机
        user_tel: {
          value: "", //v-model绑定值
          left_icon: "s-phone", //左边图标
          type: "tel",
          placeholder: "输入手机号" //提示文字
        },
        //密码
        user_password: {
          value: "", //v-model绑定值
          left_icon: "s-password", //左边图标
          type: "password",
          placeholder: "请输入至少6位密码" //提示文字
        }
      }
    };
  },
  methods: {
    //性别选择
    sex_select(v) {
      this.form_data["user_sex"]["value"] = v["text"];
    },
    //构造数据
    reset_data() {
      let data = {
        tel: "",
        password: ""
      };
      data["tel"] = this.form_data["user_tel"]["value"];
      data["password"] = this.form_data["user_password"]["value"];
      return data;
    },
    //表单提交
    button_click() {
      console.log(this.reset_data());
    },
    //返回路由
    router_back() {
      this.$router.go(-1);
    },
    //跳转忘记密码
    router_nopassword() {
      this.$store.commit({
        type: "set_show_component",
        data: "忘记密码"
      });
    },
    //跳转注册
    router_register() {
      this.$store.commit({
        type: "set_show_component",
        data: "注册"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.public {
  // border: 1px solid purple;
  box-sizing: border-box;
}
p,
h5,
h6 {
  margin: 0;
  padding: 0;
  color: #fff;
}
.mylogin {
  width: 100%;
  height: 100%;
}
.main {
  .public;
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  .img-div {
    min-height: 27rem;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text-div {
    position: absolute;
    background: rgba(19, 2, 2, 0.4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .public;
    .head {
      width: 100%;
      height: 3rem;
      .public;
      p {
        text-align: left;
        padding-left: 1rem;
        line-height: 3rem;
      }
    }
    .content {
      width: 100%;
      height: 12rem;
      overflow: hidden;
      // padding-left: 2rem;
      // padding-right: 2rem;
      .input-div {
        .public;
        margin: auto;
        width: 100%;
        margin-top: 0.5rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        .right {
          // border: 1px solid red;
          width: 9rem;
          height: 1.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            width: 2rem;
            text-align: center;
            color: #fff;
          }
          h5 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
              // border:1px solid #000;
              border-radius: 0.5rem;
              margin-left: 0.1rem;
            }
          }
        }
        .proving {
          border-left: 1px solid #fff;
          padding-left: 1rem;
        }
      }
      .public;
    }
    .bottom {
      bottom: 0;
      width: 100%;
      height: 3rem;
      .public;
      border-top: 1px solid #fff;
      p {
        font-size: 0.6rem;
        color: orange;
      }
    }
  }
}
.active-p {
  background: #fff;
}
</style>
