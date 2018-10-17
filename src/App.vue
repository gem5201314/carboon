<template>
  <div id="app">
    <router-view/>

    <!-- 全局alert弹框 -->
    <Alert 
    	v-model="$store['state']['alert_data']['value']" 
    	:title="$store['state']['alert_data']['title']" 
    	:content="$store['state']['alert_data']['content']"
    	></Alert>

    <!-- 全局loading加载 -->
    <loading 
    	:show="this.$store['state']['loading_data']['value']" 
    	:text="this.$store['state']['loading_data']['text']"
    	></loading>

    <!--全局Toast提示-->
    <Toast
    	v-model="$store['state']['toast_data']['value']"
    	:type="$store['state']['toast_data']['type']"
    	:text="$store['state']['toast_data']['text']"
    	position="top"
    	></Toast>

	<!-- 全局二次弹框 -->
	<Confirm 
    	v-model="$store['state']['confirm_data']['value']" 
    	:title="$store['state']['confirm_data']['title']" 
    	:content="$store['state']['confirm_data']['content']"
      @on-confirm="$store['state']['confirm_data']['fn']"
    	></Confirm>
 	
  </div>
</template>
<script type="text/javascript">
import { Confirm } from "vux";
import { Alert } from "vux";
import { Loading } from "vux";
import { Toast } from "vux";
export default {
  components: {
    Alert,
    Loading,
    Toast,
    Confirm
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="less" src="./public/less/public.less"></style>
