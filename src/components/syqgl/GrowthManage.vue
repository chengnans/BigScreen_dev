<!--<template>-->
<!--  <div class="main-container">-->
<!--    &lt;!&ndash; Header &ndash;&gt;-->
<!--    <div class="header">-->
<!--      <span class="title">生育期管理</span>-->
<!--      <div class="header-buttons">-->
<!--        <button class="settings-btn">设置</button>-->
<!--        <button class="close-btn">×</button>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Content &ndash;&gt;-->
<!--    <div class="content">-->
<!--      &lt;!&ndash; Selection Section &ndash;&gt;-->
<!--      <div class="selection-section">-->
<!--        <div class="dropdown">-->
<!--          <label>实验地：</label>-->
<!--          <select>-->
<!--            <option>林荫/休眠期</option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <div class="dropdown">-->
<!--          <label>轮次/在田：</label>-->
<!--          <select>-->
<!--            <option>2024荞（已结束）</option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <button class="region-detail-btn">灌区详情</button>-->
<!--      </div>-->

<!--      &lt;!&ndash; Growth Period Section &ndash;&gt;-->
<!--      <div class="growth-period-section">-->
<!--        <div class="section-title">-->
<!--          <span class="icon">💎</span>-->
<!--          <span>生育时期</span>-->
<!--        </div>-->
<!--        <div class="current-period">-->
<!--          <span>当前生育周期</span>-->
<!--          <button class="more-btn">...</button>-->
<!--        </div>-->
<!--        <div class="info-boxes">-->
<!--          <div class="info-box">-->
<!--            <div class="info-title">下个生育时期</div>-->
<!--            <div class="info-value">&#45;&#45;</div>-->
<!--          </div>-->
<!--          <div class="info-box">-->
<!--            <div class="info-title">距离成熟还剩</div>-->
<!--            <div class="info-value">&#45;&#45;</div>-->
<!--          </div>-->
<!--          <div class="info-box">-->
<!--            <div class="info-title">当前有效积温</div>-->
<!--            <div class="info-value">0.00°C·D</div>-->
<!--          </div>-->
<!--          <div class="info-box">-->
<!--            <div class="info-title">周期有效积温</div>-->
<!--            <div class="info-value">0.00°C·D</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Latest Image Section &ndash;&gt;-->
<!--      <div class="latest-image-section">-->
<!--        <div class="section-title">-->
<!--          <span class="icon">📷</span>-->
<!--          <span>最新图片数据</span>-->
<!--        </div>-->
<!--        <button class="more-images-btn">更多图片</button>-->
<!--        <div class="no-data">-->
<!--          <div class="empty-icon">📦</div>-->
<!--          <div class="no-data-text">当前生育时期暂无数据</div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "GrowthPeriodManager",-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Main container */-->
<!--.main-container {-->
<!--  width: 360px;-->
<!--  background: linear-gradient(180deg, #003a4e, #002a3b);-->
<!--  border-radius: 10px;-->
<!--  padding: 15px;-->
<!--  color: #00e4ff;-->
<!--  font-family: "Arial", sans-serif;-->
<!--  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);-->
<!--}-->

<!--/* Header */-->
<!--.header {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--  padding-bottom: 10px;-->
<!--  border-bottom: 1px solid #006070;-->
<!--}-->

<!--.title {-->
<!--  font-size: 18px;-->
<!--  font-weight: bold;-->
<!--}-->

<!--.settings-btn,-->
<!--.close-btn {-->
<!--  background: transparent;-->
<!--  border: none;-->
<!--  color: #00e4ff;-->
<!--  font-size: 14px;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.close-btn {-->
<!--  font-size: 20px;-->
<!--}-->

<!--/* Content */-->
<!--.content {-->
<!--  margin-top: 15px;-->
<!--}-->

<!--/* Selection Section */-->
<!--.selection-section {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  gap: 10px;-->
<!--}-->

<!--.dropdown {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  font-size: 14px;-->
<!--}-->

<!--.dropdown label {-->
<!--  flex-shrink: 0;-->
<!--  margin-right: 8px;-->
<!--}-->

<!--.dropdown select {-->
<!--  flex-grow: 1;-->
<!--  padding: 5px;-->
<!--  background: #00556b;-->
<!--  border: 1px solid #007a92;-->
<!--  color: #00e4ff;-->
<!--  border-radius: 5px;-->
<!--}-->

<!--.region-detail-btn {-->
<!--  background: #00707d;-->
<!--  border: none;-->
<!--  color: #00e4ff;-->
<!--  padding: 5px 10px;-->
<!--  border-radius: 5px;-->
<!--  cursor: pointer;-->
<!--  align-self: flex-start;-->
<!--}-->

<!--/* Growth Period Section */-->
<!--.growth-period-section {-->
<!--  margin-top: 20px;-->
<!--}-->

<!--.section-title {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  font-size: 16px;-->
<!--  margin-bottom: 10px;-->
<!--}-->

<!--.section-title .icon {-->
<!--  font-size: 16px;-->
<!--  margin-right: 5px;-->
<!--}-->

<!--.current-period {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--  margin-bottom: 10px;-->
<!--  padding: 10px;-->
<!--  background: #00556b;-->
<!--  border-radius: 5px;-->
<!--}-->

<!--.more-btn {-->
<!--  background: transparent;-->
<!--  border: none;-->
<!--  color: #00e4ff;-->
<!--  font-size: 18px;-->
<!--  cursor: pointer;-->
<!--}-->

<!--/* Info Boxes */-->
<!--.info-boxes {-->
<!--  display: grid;-->
<!--  grid-template-columns: 1fr 1fr;-->
<!--  gap: 10px;-->
<!--}-->

<!--.info-box {-->
<!--  background: #00556b;-->
<!--  padding: 10px;-->
<!--  border-radius: 5px;-->
<!--  text-align: center;-->
<!--}-->

<!--.info-title {-->
<!--  font-size: 12px;-->
<!--  margin-bottom: 5px;-->
<!--}-->

<!--.info-value {-->
<!--  font-size: 14px;-->
<!--  font-weight: bold;-->
<!--}-->

<!--/* Latest Image Section */-->
<!--.latest-image-section {-->
<!--  margin-top: 20px;-->
<!--}-->

<!--.more-images-btn {-->
<!--  background: #00707d;-->
<!--  border: none;-->
<!--  color: #00e4ff;-->
<!--  padding: 5px 10px;-->
<!--  border-radius: 5px;-->
<!--  cursor: pointer;-->
<!--  margin-top: 10px;-->
<!--}-->

<!--.no-data {-->
<!--  margin-top: 20px;-->
<!--  text-align: center;-->
<!--}-->

<!--.empty-icon {-->
<!--  font-size: 40px;-->
<!--  margin-bottom: 10px;-->
<!--}-->

<!--.no-data-text {-->
<!--  font-size: 14px;-->
<!--  color: #00b0c0;-->
<!--}-->
<!--</style>-->

<template>
  <div class="growth-manager-container">
    <header class="gm-header">
      <div class="gm-title-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="title-logo-icon">
          <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-5h16V6H4v2z"/> <!-- Simple placeholder icon -->
        </svg>
        <span>生育期管理</span>
      </div>
      <div class="gm-actions">
        <button class="gm-settings-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
          </svg>
          设置
        </button>
        <button class="gm-close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
    </header>

    <section class="gm-section">
      <div class="gm-dropdown-row">
        <span>实验地(休耕/休眠期)</span>
        <div class="gm-dropdown-controls">
          <button class="gm-detail-btn">灌区详情</button>
          <span class="gm-arrow-down">▼</span>
        </div>
      </div>
    </section>

    <section class="gm-section">
      <div class="gm-dropdown-row">
        <span>轮次/茬口: {{ rotationBatch }}</span>
        <span class="gm-arrow-down">▼</span>
      </div>
    </section>

    <section class="gm-section gm-growth-period-section">
      <h3 class="gm-section-title">生育时期</h3>
      <div class="gm-current-period">
        <div class="gm-icon-wrapper">
          <!-- Placeholder for branch icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#00f0ff">
            <path d="M21.64,11.26l-2.57-2.57a1,1,0,0,0-1.42,0L13,13.36V3a1,1,0,0,0-2,0v10.36L6.34,8.69a1,1,0,0,0-1.41,0L2.36,11.26a1,1,0,0,0,0,1.41L11.29,22a.91.91,0,0,0,.07.07.83.83,0,0,0,.12.09l.1.06.12.05.12.06.12.05.13.04.12.03.12.03.13.02.12.02.13.01H12a1,1,0,0,0,.57-.2l8.81-8.81A1,1,0,0,0,21.64,11.26ZM12,19.59L5.41,13,7.12,11.29,12,16.17l4.88-4.88L18.59,13Z"/>
          </svg>
        </div>
        <div class="gm-current-period-info">
          <span>当前生育周期</span>
          <span class="gm-data-value large">{{ currentGrowthPeriod }}</span>
        </div>
      </div>

      <div class="gm-stats-grid">
        <div class="gm-stat-item">
          <div class="gm-icon-wrapper small">
            <!-- Placeholder for seedling icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00f0ff">
              <path d="M17,2H7A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7A5,5,0,0,0,17,2Zm-5,2.1A2.9,2.9,0,0,1,14.9,7H9.1A2.9,2.9,0,0,1,12,4.1ZM17,20H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4h.18A4.81,4.81,0,0,0,8,7v5a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V7a4.81,4.81,0,0,0,.82-3H17a3,3,0,0,1,3,3V17A3,3,0,0,1,17,20Z"/>
            </svg>
          </div>
          <div class="gm-stat-text">
            <span>--</span>
            <span>下个生育时期</span>
          </div>
        </div>
        <div class="gm-stat-item">
          <div class="gm-icon-wrapper small">
            <!-- Placeholder for plant icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00f0ff">
              <path d="M12,2A10,10,0,0,0,5.12,4.73L3.71,3.31A1,1,0,0,0,2.29,4.73L4.72,7.15A9.93,9.93,0,0,0,4,10H2a1,1,0,0,0,0,2H4a9.93,9.93,0,0,0,.72,2.85L2.29,17.27a1,1,0,1,0,1.42,1.42L7.15,16.28A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
            </svg>
          </div>
          <div class="gm-stat-text">
            <span>--</span>
            <span>距离成熟还剩</span>
          </div>
        </div>
        <div class="gm-stat-item">
          <div class="gm-icon-wrapper small">
            <!-- Placeholder for thermometer icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00f0ff">
              <path d="M12,5a4,4,0,1,0,4,4A4,4,0,0,0,12,5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,11Zm0-9A7,7,0,0,0,5,9.06V17a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,14.69l5.5,3.18A1,1,0,0,0,18,17.87a1,1,0,0,0,.5-.13A1,1,0,0,0,19,17V9.06A7,7,0,0,0,12,2Zm5,15.26L12,14.12,7,17.26V9.06A5,5,0,0,1,12,4a5,5,0,0,1,5,5.06Z"/>
            </svg>
          </div>
          <div class="gm-stat-text">
            <span class="gm-data-value">{{ currentEffectiveTemp }}</span>
            <span>当前有效积温</span>
          </div>
        </div>
        <div class="gm-stat-item">
          <div class="gm-icon-wrapper small">
            <!-- Placeholder for thermometer icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00f0ff">
              <path d="M12,5a4,4,0,1,0,4,4A4,4,0,0,0,12,5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,11Zm0-9A7,7,0,0,0,5,9.06V17a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,14.69l5.5,3.18A1,1,0,0,0,18,17.87a1,1,0,0,0,.5-.13A1,1,0,0,0,19,17V9.06A7,7,0,0,0,12,2Zm5,15.26L12,14.12,7,17.26V9.06A5,5,0,0,1,12,4a5,5,0,0,1,5,5.06Z"/>
            </svg>
          </div>
          <div class="gm-stat-text">
            <span class="gm-data-value">{{ periodEffectiveTemp }}</span>
            <span>周期有效积温</span>
          </div>
        </div>
      </div>
    </section>

    <section class="gm-section gm-latest-images-section">
      <div class="gm-section-title-actionable">
        <h3 class="gm-section-title">最新图片数据</h3>
        <button class="gm-more-btn">更多图片</button>
      </div>
      <div class="gm-no-data">
        <!-- Placeholder for robot/box icon -->
        <div class="gm-no-data-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="#3a5f71">
            <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z"/>
            <circle cx="8.5" cy="13.5" r="1.5"/>
            <circle cx="15.5" cy="13.5" r="1.5"/>
            <path d="M8.5 17h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5z"/>
          </svg>
        </div>
        <span>当前生育时期暂无数据</span>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const rotationBatch = ref('2024茬(已结束)');
const currentGrowthPeriod = ref('--');
const currentEffectiveTemp = ref('0.00°C·D');
const periodEffectiveTemp = ref('0.00°C·D');

// You can add methods to update these values if needed
</script>

<style scoped>
.growth-manager-container {
  width: 300px; /* Approximate width from image */
  background-color: #0b1a25; /* Dark blue/teal background */
  color: #c0d0d8; /* Light grey/blue text */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Common sans-serif font */
  padding: 0;
  display: flex;
  flex-direction: column;
  border-radius: 8px; /* Slight rounding on container if desired, not obvious in image */
  overflow: hidden; /* Ensures child borders don't poke out if container has radius */

  position: fixed; /* 或者使用 absolute */
  //bottom: 20px;
  left: 5vw;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.gm-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #112232; /* Slightly lighter header background */
}

.gm-title-icon {
  display: flex;
  align-items: center;
  color: #00f0ff; /* Bright teal for title */
  font-weight: bold;
}

.title-logo-icon {
  margin-right: 8px;
  /* Placeholder for the gradient bar icon - using a simple SVG */
}

.gm-actions button {
  background: none;
  border: none;
  color: #8a9faa;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 13px;
}
.gm-actions button svg {
  margin-right: 4px;
}

.gm-settings-btn:hover, .gm-close-btn:hover {
  color: #00f0ff;
}

.gm-section {
  padding: 10px 15px;
  border-bottom: 1px solid #1c2f3e; /* Separator line */
}
.gm-section:last-child {
  border-bottom: none;
}


.gm-dropdown-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 5px 0;
}

.gm-dropdown-controls {
  display: flex;
  align-items: center;
}

.gm-detail-btn {
  background-color: #00a0b0; /* Teal button */
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 10px;
}
.gm-detail-btn:hover {
  background-color: #00c0d0;
}

.gm-arrow-down {
  color: #607888;
  font-size: 12px;
}


.gm-growth-period-section .gm-section-title {
  font-size: 15px;
  color: #00f0ff;
  margin-top: 0;
  margin-bottom: 15px;
  position: relative;
  padding-left: 10px;
}
.gm-growth-period-section .gm-section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 16px;
  background-color: #00f0ff;
  border-radius: 2px;
}


.gm-current-period {
  display: flex;
  align-items: center;
  background-color: #103c42; /* Darker teal background for this item */
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 15px;
}

.gm-icon-wrapper {
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 240, 255, 0.1); /* Faint teal circle for icon */
  border-radius: 50%;
  width: 48px; /* Adjust as needed */
  height: 48px; /* Adjust as needed */
}
.gm-icon-wrapper.small {
  width: 36px;
  height: 36px;
  margin-right: 8px;
  background-color: transparent; /* Small icons don't have the circle bg */
}
.gm-icon-wrapper svg {
  /* SVG color is set by `fill` attribute in the SVG itself */
}


.gm-current-period-info {
  display: flex;
  flex-direction: column;
}
.gm-current-period-info span:first-child {
  font-size: 13px;
  color: #a0b8c0;
}
.gm-data-value {
  font-size: 14px;
  font-weight: bold;
  color: #00f0ff; /* Teal for data values */
}
.gm-data-value.large {
  font-size: 18px;
  color: #ffffff; /* White for the main data value */
}


.gm-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}

.gm-stat-item {
  background-color: #103c42; /* Darker teal background for stat items */
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
}

.gm-stat-text {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.gm-stat-text span:first-child { /* The data value like '--' or '0.00°C·D' */
  color: #00f0ff;
  font-weight: bold;
  margin-bottom: 3px;
}
.gm-stat-text span:last-child { /* The label */
  color: #a0b8c0;
}


.gm-latest-images-section .gm-section-title {
  padding-left: 10px; /* Match style of other title */
}
.gm-latest-images-section .gm-section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 16px;
  background-color: #00f0ff;
  border-radius: 2px;
}


.gm-section-title-actionable {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.gm-section-title-actionable .gm-section-title {
  margin-bottom: 0; /* Remove bottom margin as it's handled by parent */
}

.gm-more-btn {
  background-color: #00a0b0; /* Teal button */
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.gm-more-btn:hover {
  background-color: #00c0d0;
}

.gm-no-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  background-color: #10202a; /* Slightly different background for this area */
  border-radius: 6px;
  min-height: 150px; /* Give it some space */
}

.gm-no-data-icon {
  margin-bottom: 15px;
  /* SVG color is set by `fill` attribute in the SVG itself */
}
.gm-no-data span {
  font-size: 13px;
  color: #708898;
}

/* Specific style for "2024茬(已结束)" */
.gm-dropdown-row span:first-child {
  /* This is a bit generic, if you have other spans, target more specifically */
}
.gm-dropdown-row span:first-child:containing('(已结束)') { /* This is not standard CSS, showing intent */
  /* In Vue, you'd bind a class or style directly if this part needs specific styling */
  /* For now, the default color is fine. If it was different, you'd add a class to the span in the template */
}

</style>