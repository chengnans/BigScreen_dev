<!--土壤监测-->
<template>
  <div class="app-container">
    <SoilMonitor1 />
    <SoilMonitor2 />
    <Sidebar />
    <AMap />
  </div>
</template>

<script>
import AMap from "../Maps/AMap.vue";
import Sidebar from '../Sidebar/Siderbar.vue';
import SoilMonitor1 from "./SoilMonitor1.vue";
import SoilMonitor2 from "./SoilMonitor2.vue";


export default {
  components: {
    SoilMonitor2,
    SoilMonitor1,
    AMap,
    Sidebar,
  },
};
</script>

<style>
.app-container {
  display: flex;
  height: 100vh;
  flex-direction: column; /* 将主轴方向设置为垂直 */
  justify-content: center; /* 主轴上的居中 */
  align-items: center; /* 交叉轴上的居中 */
}

.sidebar {
  width: 80px; /* 确保侧边栏宽度 */
}

.map-container {
  flex: 1; /* 使地图区域占据剩余空间 */
}
</style>
