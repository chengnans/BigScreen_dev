<template>
  <div class="app-container">
    <AMap/>
    <Sidebar />
    <!-- 其他内容 -->
  </div>
</template>

<script>
import AMap from "./AMap.vue";
import Sidebar from '../Sidebar/Siderbar.vue';

export default {
  components: {
    AMap,
    Sidebar,
  },
};
</script>

<style>
.app-container {
  display: flex;
  height: 100vh;
}
</style>
