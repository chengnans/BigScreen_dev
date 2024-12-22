<template>
  <div class="layout">
<!--    全局显示顶部标题，移至App.vue-->
<!--    <div class="layout-header">{{ appName }}</div>-->
    <div class="layout-main">
    <Tmap></Tmap>
      <!-- 弹窗组件 -->
      <baseIndex v-show="isPopupVisible" />

      <!-- 控制弹窗的箭头 -->
      <div class="arrow-container" @click="togglePopup">
        <span class="arrow" :class="{ open: isPopupVisible }">
          {{ isPopupVisible ? '<<<<<' : '>>>>>' }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import Tmap from "./Tmap.vue";
import baseIndex from "./baseIndex.vue";
import { ref } from "vue";

const appName = '大河岔村基地'
// 控制弹窗显示状态
const isPopupVisible = ref(false);

function togglePopup() {
  isPopupVisible.value = !isPopupVisible.value;
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  background-color: #000;

  .layout-header {
    position: absolute;
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 64px;
    padding-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background: url('../assets/header_bg.png');
    background-repeat: no-repeat;
    background-size: 100% 64px;
  }

  .layout-main {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #01355059 1px, transparent 1px),
    linear-gradient(0deg, #01355059 1px, transparent 1px);
    background-size: 30px 30px, 30px 30px;
  }
  .arrow-container {
    position: fixed; /* 固定箭头 */
    top: 100px; /* 箭头高度 */
    left: 0; /* 靠左 */
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2ecc71;
    border-radius: 25px;
    cursor: pointer;
    z-index: 10000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .arrow {
    color: white;
    font-size: 16px;
    font-weight: bold;
    transition: transform 0.3s;
  }

  .arrow.open {
    transform: rotate(180deg); /* 展开时箭头旋转 */
  }
}
</style>
