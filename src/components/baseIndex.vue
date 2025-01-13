<!--基地列表弹窗-->
<template>
  <div class="layout">
    <div class="layout-main">
  <!-- 地图组件 -->
    <Tmap></Tmap>
    </div>
  </div>
</template>

<script setup>
import Tmap from "./Tmap.vue";
</script>

<style>
.layout {
  width: 100vw;
  height: 100vh;
  position: relative;
}
  .layout-main {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
