<!--病虫害监测-->
<template>
  <div class="app-container">
    <PestMonitor />
    <PestCount />
    <Sidebar />
    <AMap />
  </div>
</template>

<script>
import AMap from "../Maps/AMap.vue";
import Sidebar from '../Sidebar/Siderbar.vue';
import PestMonitor from "./PestMonitor.vue";
import PestCount from "./PestCount.vue";

export default {
  components: {
    PestCount,
    PestMonitor,
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
