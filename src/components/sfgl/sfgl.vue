<!--施肥管理-->
<template>
  <div class="app-container">
    <AmountRecord />
    <FertilizerManage />
    <Sidebar />
    <AMap />
  </div>
</template>

<script>
import AMap from "../Maps/AMap.vue";
import Sidebar from '../Sidebar/Siderbar.vue';
import AmountRecord from "./AmountRecord.vue";
import FertilizerManage from "./FertilizerManage.vue";


export default {
  components: {
    FertilizerManage,
    AmountRecord,
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
