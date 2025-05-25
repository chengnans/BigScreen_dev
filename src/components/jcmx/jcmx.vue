<!--小气候监测-->
<template>
  <div class="app-container">
    <BaseModel1 />
    <BaseModel2 />
    <Sidebar />
    <AMap />
  </div>
</template>

<script>
import AMap from "../Maps/AMap.vue";
import Sidebar from '../Sidebar/Siderbar.vue';
import BaseModel1 from "./BaseModel1.vue";
import BaseModel2 from "./BaseModel2.vue";


export default {
  components: {
    BaseModel1,
    BaseModel2,
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
