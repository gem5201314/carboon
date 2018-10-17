<template>
  <div class="index">
    <div class="main">
      <!-- 登录 -->
      <div class="login" v-if="$store['state']['show_component']=='登录'">
        <MyLogin></MyLogin>
      </div>
      <!--  注册-->
      <div class="register" v-if="$store['state']['show_component']=='注册'">
        <MyRegister></MyRegister>
      </div>
      <!--忘记密码 -->
      <div class="nopassword" v-if="$store['state']['show_component']=='忘记密码'">
        <MyNoPassword></MyNoPassword>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
      MyLogin: resolve => require(["./slot/MyLogin.vue"], resolve),//登录
      MyRegister: resolve => require(["./slot/MyRegister.vue"], resolve),//注册
      MyNoPassword: resolve => require(["./slot/MyNoPassword.vue"], resolve),//忘记密码
  },
  data(){
    return{
      //当前显示组件
      show_component:"登录",
    }
  },
  methods:{

  },
  created(){
      console.log('vux',this.$store['state']['show_component'])
  }
}
</script>

<style lang="less" src="./index.less" scoped>
</style>
