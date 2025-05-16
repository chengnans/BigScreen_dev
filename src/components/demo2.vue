<template>
  <div class="app-container">
    <demo />
    <Calendar />
    <PlantingPlan />
    <Sidebar />
    <AMap />
    <!-- 其他内容 -->
  </div>
</template>

<script>
import AMap from "./Maps/AMap.vue";
import Sidebar from './Sidebar/Siderbar.vue';
import demo from "./demo.vue";
import Calendar from "./nsgl/Calendar.vue";
import PlantingPlan from "./nsgl/PlantingPlan.vue";

export default {
  components: {
    PlantingPlan,
    AMap,
    Sidebar,
    demo,
    Calendar
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
