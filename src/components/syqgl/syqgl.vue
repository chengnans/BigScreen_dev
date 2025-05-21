<!--生育期管理-->
<template>
  <div class="app-container">
    <GrowthManage />
    <GrowthPeriod />
    <Sidebar />
    <AMap />
  </div>
</template>

<script>
import AMap from "../Maps/AMap.vue";
import Sidebar from '../Sidebar/Siderbar.vue';
import GrowthManage from "./GrowthManage.vue";
import GrowthPeriod from "./GrowthPeriod.vue";

export default {
  components: {
    GrowthPeriod,
    GrowthManage,
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
