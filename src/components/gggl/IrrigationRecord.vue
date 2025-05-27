<template>
  <div class="smart-farm-widget">
    <!-- 灌溉记录 -->
    <section class="widget-section">
      <div class="section-header">
        <div class="header-icon"></div>
        <span class="header-title">灌溉记录</span>
      </div>
      <div class="section-content irrigation-content">
        <div class="icon-placeholder-irrigation">
          <div class="speech-bubble">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="box">
            <div class="box-flap box-flap-left"></div>
            <div class="box-flap box-flap-right"></div>
            <div class="box-front"></div>
            <div class="box-inside"></div>
          </div>
          <div class="ground-shadow"></div>
        </div>
        <p class="no-data-text">暂无数据</p>
      </div>
    </section>

    <!-- 降水预报 -->
    <section class="widget-section">
      <div class="section-header">
        <div class="header-icon"></div>
        <span class="header-title">降水预报</span>
      </div>
      <div class="section-content rainfall-forecast-content">
        <div v-for="item in rainfallData" :key="item.label" class="forecast-item">
          <span class="forecast-label">{{ item.label }}</span>
          <div class="no-rain-icon">
            <div class="slash"></div>
          </div>
          <span class="forecast-value">{{ item.value }}</span>
        </div>
      </div>
    </section>

    <!-- 水分平衡示意图 -->
    <section class="widget-section">
      <div class="section-header water-balance-header">
        <div class="header-left">
          <div class="header-icon"></div>
          <span class="header-title">水分平衡示意图</span>
        </div>
        <button class="trend-button">趋势图</button>
      </div>
      <div class="section-content water-balance-content">
        <div class="icon-placeholder-water-balance">
          <div class="sprout">
            <div class="leaf leaf-left"></div>
            <div class="leaf leaf-right"></div>
          </div>
          <div class="ground-shadow-sprout"></div>
        </div>
        <p class="no-data-text">暂无数据</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 降水预报数据
const rainfallData = ref([
  { label: '实时', value: '10mm' },
  { label: '明天', value: '0mm' },
  { label: '后天', value: '0mm' },
  { label: '05-30', value: '0mm' },
  { label: '05-31', value: '0mm' },
]);
</script>

<style scoped>
/* 主容器样式 */
.smart-farm-widget {
  width: 375px; /* 根据图片估算宽度 */
  background-color: #0f2c2f; /* 深青色背景 */
  padding: 20px;
  border-radius: 8px; /* 轻微圆角 (图片中不明显，可选) */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* 通用无衬线字体 */
  color: #e0f7fa; /* 默认浅色文字 */
  right: 0.2vw;
  z-index: 1000;
  position: fixed;
}

/* 区块通用样式 */
.widget-section {
  margin-bottom: 25px;
}

.widget-section:last-child {
  margin-bottom: 0;
}

/* 区块头部样式 */
.section-header {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #2a5f63; /* 头部下划线 */
  margin-bottom: 20px;
}

.water-balance-header {
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-icon {
  width: 10px;
  height: 10px;
  background-color: #66fbfb; /* 钻石图标颜色 */
  transform: rotate(45deg);
  margin-right: 10px;
}

.header-title {
  font-size: 16px;
  font-weight: bold;
  color: #e0f0f0; /* 标题文字颜色 */
}

/* 区块内容通用样式 */
.section-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.no-data-text {
  font-size: 14px;
  color: #7a9a9c; /* "暂无数据" 文字颜色 */
  margin-top: 15px;
}

/* 灌溉记录 spécifiques */
.irrigation-content {
  padding: 20px 0;
}

.icon-placeholder-irrigation {
  position: relative;
  width: 120px; /* 容器宽度 */
  height: 100px; /* 容器高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end; /* 将盒子放在底部 */
}

.speech-bubble {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 35px;
  background-color: #2a5f63; /* 气泡背景 */
  border-radius: 15px 15px 15px 8px; /* 椭圆气泡形状 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.speech-bubble .dot {
  width: 6px;
  height: 6px;
  background-color: #0f2c2f; /* 点的颜色，与主背景一致 */
  border-radius: 50%;
  margin: 0 3px;
}

.box {
  position: relative;
  width: 90px; /* 盒子宽度 */
  height: 55px; /* 盒子高度 */
  margin-top: 25px; /* 确保在气泡下方 */
}

.box-front {
  width: 100%;
  height: 100%;
  background-color: #2a5f63; /* 盒子主体颜色 */
  border: 1px solid #307a7e;
  position: absolute;
  bottom: 0;
  z-index: 0;
  box-sizing: border-box;
}

.box-inside {
  position: absolute;
  bottom: 1px; /* 略高于底部边框 */
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 10px); /* 内部稍窄 */
  height: 20px; /* 内部可见高度 */
  background-color: #1e4b4f; /* 盒子内部深色 */
  border-top: 1px solid #307a7e;
}

.box-flap {
  position: absolute;
  width: 40%;
  height: 15px;
  background-color: #2a5f63;
  border: 1px solid #307a7e;
  top: -14px; /* 调整盖子位置 */
  z-index: -1; /* 在气泡之后，盒子之前 */
}

.box-flap-left {
  left: 5px;
  transform: skewY(15deg) rotate(-5deg);
  border-radius: 3px 3px 0 0;
}

.box-flap-right {
  right: 5px;
  transform: skewY(-15deg) rotate(5deg);
  border-radius: 3px 3px 0 0;
}


.ground-shadow {
  width: 110px; /* 阴影宽度 */
  height: 20px; /* 阴影高度 */
  background: radial-gradient(ellipse at center, rgba(26, 60, 63, 0.4) 0%, rgba(15, 44, 47, 0) 70%); /* 阴影效果 */
  border-radius: 50%;
  position: absolute;
  bottom: -10px; /* 盒子下方 */
  z-index: -1;
}


/* 降水预报 spécifiques */
.rainfall-forecast-content {
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.forecast-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a0ffff; /* 预报文字颜色 */
}

.forecast-label {
  font-size: 13px;
  margin-bottom: 8px;
}

.no-rain-icon {
  width: 36px;
  height: 36px;
  border: 2px solid #66fbfb; /* 圆圈颜色 */
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}

.no-rain-icon .slash {
  width: 75%;
  height: 2px;
  background-color: #66fbfb; /* 斜杠颜色 */
  transform: rotate(45deg);
}

.forecast-value {
  font-size: 13px;
}

/* 水分平衡示意图 spécifiques */
.trend-button {
  background-color: #2a9d9f; /* 按钮背景色 */
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.trend-button:hover {
  background-color: #34c0c3;
}

.water-balance-content {
  padding: 30px 0;
}

.icon-placeholder-water-balance {
  position: relative;
  width: 100px;
  height: 80px; /* 调整以适应幼苗 */
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直居中幼苗 */
}

.sprout {
  position: relative;
  width: 12px; /* 茎的宽度 */
  height: 45px; /* 茎的高度 */
  background-color: #3e888f; /* 茎和叶子的主色 */
  border-radius: 6px 6px 0 0; /* 茎的顶部圆角 */
  align-self: flex-end; /* 使茎的底部对齐容器底部（配合阴影） */
  margin-bottom: 5px; /* 为阴影留出空间 */
}

.leaf {
  position: absolute;
  width: 35px; /* 叶子宽度 */
  height: 45px; /* 叶子高度 */
  background-color: #3e888f;
  top: -15px; /* 叶子相对于茎顶端的位置 */
}

.leaf-left {
  left: -25px; /* 相对于茎的左侧位置 */
  border-radius: 50% 0% 50% 50%; /* 左叶子形状 */
  transform: rotate(-35deg); /* 左叶子旋转 */
  background: linear-gradient(to top right, #3e888f 60%, #50a0a8 100%); /* 叶子渐变增加质感 */
}

.leaf-right {
  right: -25px; /* 相对于茎的右侧位置 */
  border-radius: 0% 50% 50% 50%; /* 右叶子形状 */
  transform: rotate(35deg); /* 右叶子旋转 */
  background: linear-gradient(to top left, #3e888f 60%, #50a0a8 100%); /* 叶子渐变增加质感 */
}

.ground-shadow-sprout {
  width: 120px;
  height: 25px;
  background: radial-gradient(ellipse at center bottom, rgba(42, 95, 99, 0.5) 0%, rgba(15, 44, 47, 0) 70%);
  border-radius: 50%;
  position: absolute;
  bottom: -10px; /* 阴影在幼苗下方 */
  left: 50%;
  transform: translateX(-50%);
}

</style>