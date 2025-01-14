<template>
  <div class="app-container">
    <Sidebar />
    <AMap />
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

.sidebar {
  width: 80px; /* 确保侧边栏宽度 */
}

.map-container {
  flex: 1; /* 使地图区域占据剩余空间 */
}
</style>
