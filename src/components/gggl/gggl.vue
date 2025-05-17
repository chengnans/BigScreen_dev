<!--灌溉管理-->
<template>
  <div class="app-container">
    <IrrigationManage />
    <IrrigationRecord />
    <Sidebar />
    <AMap />
  </div>
</template>

<script>
import AMap from "../Maps/AMap.vue";
import Sidebar from '../Sidebar/Siderbar.vue';
import IrrigationManage from "./IrrigationManage.vue";
import IrrigationRecord from "./IrrigationRecord.vue";

export default {
  components: {
    AMap,
    Sidebar,
    IrrigationManage,
    IrrigationRecord
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
