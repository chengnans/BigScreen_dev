<template>
  <div id="app">
<!--    全局显示顶部标题-->
    <div class="layout-header">{{ appName }}</div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import {ref} from 'vue';

// 定义一个响应式的 appName 变量
const appName = ref('大河岔村基地');
</script>

<style scoped>
/* 在这里添加或移动 layout-header 的样式 */
.layout-header {
  position: fixed; /* 使用 fixed 使 header 始终停留在页面顶部 */
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
  background: url('./assets/header_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 64px;
}
</style>
