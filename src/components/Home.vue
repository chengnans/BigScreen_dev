<!--<template>-->
<!--  <div class="layout">-->
<!--&lt;!&ndash;    全局显示顶部标题，移至App.vue&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="layout-header">{{ appName }}</div>&ndash;&gt;-->
<!--    <div class="layout-main">-->
<!--    <Tmap></Tmap>-->
<!--      &lt;!&ndash; 弹窗组件 &ndash;&gt;-->
<!--      <baseIndex v-show="isPopupVisible" />-->

<!--      &lt;!&ndash; 控制弹窗的箭头 &ndash;&gt;-->
<!--      <div class="arrow-container" @click="togglePopup">-->
<!--        <span class="arrow" :class="{ open: isPopupVisible }">-->
<!--          {{ isPopupVisible ? '<<<<<' : '>>>>>' }}-->
<!--        </span>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script setup>-->
<!--import Tmap from "./Tmap.vue";-->
<!--import baseIndex from "./baseIndex.vue";-->
<!--import { ref } from "vue";-->

<!--const appName = '大河岔村基地'-->
<!--// 控制弹窗显示状态-->
<!--const isPopupVisible = ref(false);-->

<!--function togglePopup() {-->
<!--  isPopupVisible.value = !isPopupVisible.value;-->
<!--}-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
<!--.layout {-->
<!--  width: 100vw;-->
<!--  height: 100vh;-->
<!--  background-color: #000;-->

<!--  .layout-header {-->
<!--    position: absolute;-->
<!--    top: 0;-->
<!--    z-index: 999;-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    width: 100vw;-->
<!--    height: 64px;-->
<!--    padding-bottom: 10px;-->
<!--    font-size: 24px;-->
<!--    font-weight: bold;-->
<!--    color: #fff;-->
<!--    background: url('../assets/header_bg.png');-->
<!--    background-repeat: no-repeat;-->
<!--    background-size: 100% 64px;-->
<!--  }-->

<!--  .layout-main {-->
<!--    width: 100vw;-->
<!--    height: 100vh;-->
<!--    background-image: linear-gradient(90deg, #01355059 1px, transparent 1px),-->
<!--    linear-gradient(0deg, #01355059 1px, transparent 1px);-->
<!--    background-size: 30px 30px, 30px 30px;-->
<!--  }-->
<!--  .arrow-container {-->
<!--    position: fixed; /* 固定箭头 */-->
<!--    top: 100px; /* 箭头高度 */-->
<!--    left: 0; /* 靠左 */-->
<!--    width: 50px;-->
<!--    height: 50px;-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    background-color: #2ecc71;-->
<!--    border-radius: 25px;-->
<!--    cursor: pointer;-->
<!--    z-index: 10000;-->
<!--    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);-->
<!--  }-->

<!--  .arrow {-->
<!--    color: white;-->
<!--    font-size: 16px;-->
<!--    font-weight: bold;-->
<!--    transition: transform 0.3s;-->
<!--  }-->

<!--  .arrow.open {-->
<!--    transform: rotate(180deg); /* 展开时箭头旋转 */-->
<!--  }-->
<!--}-->
<!--</style>-->
<template>
  <div class="layout">
    <div class="layout-main">
      <!-- 地图组件 -->
      <Tmap></Tmap>

      <!-- 左侧弹窗 -->
      <div class="side-panel" :class="{ collapsed: !isPanelOpen }">
        <div class="panel-header">
          <span>基地列表</span>
          <span>（点击可快速导航）</span>
        </div>
        <div class="panel-body">
          <div class="search-bar">
            <input type="text" placeholder="请输入" v-model="searchTerm" />
            <button @click="search">搜索</button>
            <button @click="reset">重置</button>
          </div>
          <div class="base-item">
            <div class="base-name">大河岔村基地</div>
            <div class="base-details">
              <div>种植：无</div>
              <div>设备数量：44</div>
              <div>面积：422.81亩</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 箭头控制 -->
      <div
          class="arrow-control"
          :style="{ left: isPanelOpen ? '300px' : '0px' }"
          @click="togglePanel"
      >
        <div class="arrow" :class="{ right: !isPanelOpen }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tmap from "./Tmap.vue";
import { ref } from "vue";

// 弹窗状态控制
const isPanelOpen = ref(true);

// 搜索输入框内容
const searchTerm = ref("");

// 方法
function togglePanel() {
  isPanelOpen.value = !isPanelOpen.value;
}

function search() {
  console.log("搜索内容:", searchTerm.value);
}

function reset() {
  searchTerm.value = "";
  console.log("重置搜索");
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  position: relative;

  .layout-main {
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* 弹窗样式 */
  .side-panel {
    position: fixed;
    top: 60px;
    left: 0;
    width: 300px;
    height: 80%;
    background: rgba(0, 50, 50, 0.9);
    color: white;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease-in-out;
    z-index: 9999;

    &.collapsed {
      transform: translateX(-100%); /* 收起时隐藏到左侧 */
    }

    .panel-header {
      padding: 20px;
      font-size: 16px;
      font-weight: bold;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .panel-body {
      padding: 20px;

      .search-bar {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;

        input {
          flex: 1;
          padding: 5px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          outline: none;
        }

        button {
          padding: 5px 10px;
          background: #00bcd4;
          border: none;
          cursor: pointer;
          color: white;
        }
      }

      .base-item {
        margin-bottom: 20px;

        .base-name {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .base-details {
          font-size: 14px;
        }
      }
    }
  }

  /* 箭头样式 */
  .arrow-control {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 80px;
    background: #00bcd4;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: left 0.3s ease-in-out; /* 平滑移动动画 */

    .arrow {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
      transition: transform 0.3s ease-in-out;

      /* 箭头方向：展开时指向左，收起时指向右 */
      &.right {
        transform: rotate(180deg); /* 收起时箭头向右 */
      }
    }
  }
}
</style>
