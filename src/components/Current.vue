<template>
  <div class="current">
      <div class="view">
          <router-view></router-view>
      </div>
      <Foot></Foot>
  </div>
</template>

<script>
import Foot from "./Foot";
export default {
  components: {
    Foot
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
.current {
  height: 100%;
  .view{
    height: 88%;
    // border: 1px solid red;
  }
}
</style>
