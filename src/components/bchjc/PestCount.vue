<template>
  <div class="stats-monitor-container">
    <header class="sm-section-header">
      <div class="sm-title-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#00f0ff" class="sm-diamond-icon">
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 16.59L5.41 12 12 5.41 18.59 12 12 18.59z"/>
        </svg>
        <span>虫情统计</span>
      </div>
      <button class="sm-close-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </header>
    <div class="sm-title-divider"></div>

    <!-- Simulated Line Chart -->
    <div class="sm-chart-container sm-line-chart-container">
      <svg width="100%" height="150" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet" class="sm-interactive-chart">
        <!-- Y-axis labels and grid lines -->
        <g class="sm-axis-labels sm-y-axis-labels">
          <text x="10" y="135" dy=".3em">0</text>
          <line x1="25" y1="135" x2="290" y2="135" class="sm-grid-line" />
          <text x="10" y="110" dy=".3em">1</text>
          <line x1="25" y1="110" x2="290" y2="110" class="sm-grid-line" />
          <text x="10" y="85" dy=".3em">2</text>
          <line x1="25" y1="85" x2="290" y2="85" class="sm-grid-line" />
          <text x="10" y="60" dy=".3em">3</text>
          <line x1="25" y1="60" x2="290" y2="60" class="sm-grid-line" />
          <text x="10" y="35" dy=".3em">4</text>
          <line x1="25" y1="35" x2="290" y2="35" class="sm-grid-line" />
          <text x="10" y="10" dy=".3em">5</text>
          <line x1="25" y1="10" x2="290" y2="10" class="sm-grid-line" />
        </g>

        <!-- Line Path (approximated from image) -->
        <path d="M30,135 L60,135 L90,135 L120,135 L150,135 L180,130 L210,110 L240,60 L270,10" class="sm-line-path" fill="none" stroke-width="2"/>

        <!-- Data Points (approximated) - Group them for easier hover targeting if needed, or target individually -->
        <g class="sm-line-points-group">
          <circle cx="30" cy="135" r="2" class="sm-line-point" />
          <circle cx="60" cy="135" r="2" class="sm-line-point" />
          <circle cx="90" cy="135" r="2" class="sm-line-point" />
          <circle cx="120" cy="135" r="2" class="sm-line-point" />
          <circle cx="150" cy="135" r="2" class="sm-line-point" />
          <circle cx="180" cy="130" r="2" class="sm-line-point" />
          <circle cx="210" cy="110" r="2" class="sm-line-point" />
          <circle cx="240" cy="60" r="2" class="sm-line-point" />
          <circle cx="270" cy="10" r="3" class="sm-line-point sm-line-point-last" /> <!-- Last point slightly larger -->
        </g>

        <!-- X-axis labels -->
        <g class="sm-axis-labels sm-x-axis-labels" text-anchor="middle">
          <text x="45" y="148">05/14</text>
          <text x="90" y="148">05/15</text>
          <text x="135" y="148">05/16</text>
          <text x="180" y="148">05/17</text>
          <text x="225" y="148">05/18</text>
          <text x="270" y="148">05/20</text>
        </g>
      </svg>
    </div>

    <!-- Simulated Bar Chart -->
    <div class="sm-chart-container sm-bar-chart-container">
      <svg width="100%" height="130" viewBox="0 0 300 130" preserveAspectRatio="xMidYMid meet" class="sm-interactive-chart">
        <!-- Y-axis labels and grid lines -->
        <g class="sm-axis-labels sm-y-axis-labels">
          <text x="20" y="110" dy=".3em">0</text>
          <line x1="35" y1="110" x2="280" y2="110" class="sm-grid-line" />
          <text x="10" y="88" dy=".3em">0.5</text>
          <line x1="35" y1="88" x2="280" y2="88" class="sm-grid-line" />
          <text x="20" y="66" dy=".3em">1</text>
          <line x1="35" y1="66" x2="280" y2="66" class="sm-grid-line" />
          <text x="10" y="44" dy=".3em">1.5</text>
          <line x1="35" y1="44" x2="280" y2="44" class="sm-grid-line" />
          <text x="20" y="22" dy=".3em">2</text>
          <line x1="35" y1="22" x2="280" y2="22" class="sm-grid-line" />
        </g>

        <!-- Bars (approximated from image) -->
        <g class="sm-bars-group">
          <!-- Bar 1: 棉铃虫, Value ~2 -->
          <rect x="55" :y="110 - (2/2 * (110-22))" width="15" :height="(2/2 * (110-22))" class="sm-bar" data-value="2" />
          <!-- Bar 2: (empty), Value ~0.8 -->
          <rect x="110" :y="110 - (0.8/2 * (110-22))" width="15" :height="(0.8/2 * (110-22))" class="sm-bar" data-value="0.8" />
          <!-- Bar 3: 桃蛀螟, Value ~0.8 -->
          <rect x="165" :y="110 - (0.8/2 * (110-22))" width="15" :height="(0.8/2 * (110-22))" class="sm-bar" data-value="0.8" />
          <!-- Bar 4: (empty), Value ~0.7 -->
          <rect x="220" :y="110 - (0.7/2 * (110-22))" width="15" :height="(0.7/2 * (110-22))" class="sm-bar" data-value="0.7" />
        </g>

        <!-- X-axis labels -->
        <g class="sm-axis-labels sm-x-axis-labels" text-anchor="middle">
          <text x="62.5" y="125">棉铃虫</text>
          <text x="172.5" y="125">桃蛀螟</text>
          <text x="260" y="125">未知</text>
        </g>
      </svg>
    </div>

    <header class="sm-section-header sm-disease-header">
      <div class="sm-title-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#00f0ff" class="sm-diamond-icon">
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 16.59L5.41 12 12 5.41 18.59 12 12 18.59z"/>
        </svg>
        <span>病情统计</span>
      </div>
    </header>
    <div class="sm-title-divider"></div>

    <div class="sm-status-list">
      <div v-for="status in diseaseStatuses" :key="status.date" class="sm-status-item">
        <span class="sm-status-date">{{ status.date }}</span>
        <div class="sm-status-info">
          <span class="sm-status-tag">
            <span class="sm-status-dot"></span>
            {{ status.condition }}
          </span>
          <span class="sm-status-summary">{{ status.summary }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const diseaseStatuses = ref([
  { date: '2025-05-21', condition: '未检出病害', summary: '今日正常' },
  { date: '2025-05-20', condition: '未检出病害', summary: '当日正常' },
  { date: '2025-05-19', condition: '未检出病害', summary: '当日正常' },
  { date: '2025-05-18', condition: '未检出病害', summary: '当日正常' },
]);
</script>

<style scoped>
.stats-monitor-container {
  width: 320px; /* Approximate width from image */
  background-color: #0b1a25;
  color: #c0d0d8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid #1c2f3e;

  position: fixed; /* 或者使用 absolute */
  bottom: 10px;
  right: 3px;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  //padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.sm-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px; /* Align with divider */
}

.sm-title-icon {
  display: flex;
  align-items: center;
  color: #00f0ff;
  font-weight: bold;
  font-size: 16px;
}

.sm-diamond-icon {
  margin-right: 8px;
}

.sm-close-btn {
  background: none;
  border: none;
  color: #00f0ff; /* Teal X icon */
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  background-color: #1c3a4a; /* Darker circle background for X */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.sm-close-btn svg {
  width: 14px;
  height: 14px;
}
.sm-close-btn:hover {
  background-color: #2a5063;
}

.sm-title-divider {
  height: 1px;
  background-color: #1c3a4a;
  margin-top: 8px;
  margin-bottom: 15px;
}

/* Chart Styling */
.sm-chart-container {
  background-color: #102533; /* Background for chart area */
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 20px;
  position: relative;
}

.sm-line-chart-container {
  /* Specific styles if needed */
}

.sm-bar-chart-container {
  border: 1px solid #00f0ff; /* Glowing border effect */
  box-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff inset; /* Inner and outer glow */
}

/* Make SVG elements interactive */
.sm-interactive-chart .sm-line-point,
.sm-interactive-chart .sm-bar {
  cursor: pointer; /* Indicate interactivity */
  transition: all 0.2s ease-in-out; /* Smooth transition for hover effects */
}


.sm-axis-labels {
  font-size: 10px;
  fill: #708898; /* Dim color for axis labels */
  pointer-events: none; /* Labels should not interfere with hover on data elements */
}
.sm-y-axis-labels text {
  text-anchor: start;
}
.sm-x-axis-labels text {
  text-anchor: middle;
}


.sm-grid-line {
  stroke: #1c3a4a; /* Color of grid lines */
  stroke-dasharray: 3, 3; /* Dashed lines */
  pointer-events: none;
}

.sm-line-path {
  stroke: #f06eaa; /* Pinkish line color */
  pointer-events: none; /* Path should not interfere with hover on points */
}

.sm-line-point {
  fill: #f06eaa;
  stroke: #0b1a25; /* Small border to make points stand out */
  stroke-width: 0.5px;
}

/* Hover effect for line chart points */
.sm-interactive-chart .sm-line-point:hover {
  r: 5; /* Increase radius */
  fill: #ff8cc6; /* Brighter pink */
  stroke: #ffffff;
  stroke-width: 1px;
}
.sm-interactive-chart .sm-line-point-last:hover { /* Ensure last point also gets hover */
  r: 6;
}


.sm-bar {
  fill: #f06eaa; /* Pinkish bar color */
}

/* Hover effect for bar chart bars */
.sm-interactive-chart .sm-bar:hover {
  fill: #ff8cc6; /* Brighter pink */
  opacity: 0.8; /* Slight transparency change */
}


/* Disease Statistics Section */
.sm-disease-header {
  margin-top: 10px; /* Space above this section */
}

.sm-status-list {
  display: flex;
  flex-direction: column;
  gap: 0px; /* No gap, items will have bottom border */
}

.sm-status-item {
  padding: 10px 0;
  border-bottom: 1px solid #1c3a4a;
}
.sm-status-item:last-child {
  border-bottom: none;
}

.sm-status-date {
  font-size: 13px;
  color: #8a9faa;
  margin-bottom: 6px;
  display: block;
}

.sm-status-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #102c36; /* Background for the status row */
  padding: 8px 10px;
  border-radius: 4px;
}

.sm-status-tag {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #00f0ff; /* Teal for status condition */
}

.sm-status-dot {
  width: 8px;
  height: 8px;
  background-color: #00f0ff; /* Teal dot */
  border-radius: 50%;
  margin-right: 8px;
}

.sm-status-summary {
  font-size: 13px;
  color: #c0d0d8; /* Lighter grey for summary */
}

</style>