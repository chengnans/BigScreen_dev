<template>
  <div class="irrigation-management-panel">
    <header class="im-header">
      <div class="im-title-icon"></div>
      <span class="im-title-text">灌溉管理</span>
      <button class="im-settings-button">设置</button>
      <span class="im-close-button">✕</span>
    </header>

    <div class="im-content">
      <section class="im-section plot-selection">
        <span class="plot-name">{{ selectedPlot }}</span>
        <span class="dropdown-arrow">▼</span>
        <button class="im-action-button im-detail-button">灌区详情</button>
      </section>

      <hr class="im-divider">

      <section class="im-section next-irrigation">
        <h3 class="im-section-title">◆ 建议下次浇水时间</h3>
        <div class="irrigation-advice">
          <span>{{ irrigationSuggestionText }}</span>
          <button class="im-action-button im-water-button">去浇水</button>
        </div>
        <div class="bar-chart-container">
          <div class="y-axis-labels">
            <span v-for="label in barChart.yAxisLabels" :key="label">{{ label }}</span>
          </div>
          <div class="bars-area">
            <div class="bar-gridlines">
              <div v-for="n in barChart.yAxisLabels.length -1" :key="`gl-${n}`" class="gridline"></div>
            </div>
            <div v-for="(bar, index) in barChart.data" :key="index" class="bar-wrapper">
              <div class="bar" :style="{ height: (bar.value / barChart.yMax * 100) + '%' }">
                <div class="bar-fill-light" :style="{ height: bar.lightPartHeight + '%' }"></div>
                <div class="bar-fill-dark" :style="{ height: (100 - bar.lightPartHeight) + '%' }"></div>
              </div>
              <div v-if="index === barChart.currentMarkerIndex" class="current-marker-line"></div>
            </div>
          </div>
          <div class="x-axis-labels">
            <span v-for="label in barChart.xAxisLabels" :key="label">{{ label }}</span>
          </div>
        </div>
      </section>

      <hr class="im-divider">

      <section class="im-section average-moisture">
        <div class="section-header">
          <h3 class="im-section-title">◆ 土壤含水量均值数据</h3>
          <button class="im-action-button im-history-button">历史数据</button>
        </div>
        <div class="donut-chart-area">
          <div class="donut-chart" :style="{ background: conicGradientBackground }">
            <div class="donut-center">
              <span class="donut-value">{{ averageSoilMoisture.value }}%</span>
            </div>
          </div>
          <div class="donut-labels">
            <div v-for="(segment, index) in averageSoilMoisture.segments" :key="index"
                 class="donut-label" :style="getDonutLabelPosition(index)">
              <span class="label-text">{{ segment.label }}</span>
              <span class="label-value">{{ segment.threshold }}</span>
            </div>
          </div>
        </div>
      </section>

      <hr class="im-divider">

      <section class="im-section layer-moisture">
        <h3 class="im-section-title">◆ 土壤含水量各层次数据</h3>
        <div class="layer-data-container">
          <div class="soil-sensor-illustration">
            <svg width="80" height="200" viewBox="0 0 80 200">
              <!-- Soil -->
              <rect x="0" y="25" width="80" height="175" fill="#4A3B32" />
              <!-- Grass -->
              <path d="M0 25 Q5 15 10 25 T20 25 T30 25 T40 25 T50 25 T60 25 T70 25 T80 25" fill="#3E7D5A" />
              <!-- Sensor -->
              <rect x="38" y="0" width="4" height="25" fill="#B0BEC5" /> <!-- Cap -->
              <rect x="39" y="25" width="2" height="170" fill="#78909C" /> <!-- Pole -->
              <!-- Depth lines -->
              <g v-for="(item, index) in soilLayerData" :key="`line-${index}`" :transform="`translate(0, ${45 + index * 20})`">
                <line x1="39" y1="0" x2="20" y2="0" stroke="#B0BEC5" stroke-width="1" />
              </g>
            </svg>
          </div>
          <div class="layer-table">
            <div class="table-header">
              <span>深度</span>
              <span>土壤含水量(%)</span>
            </div>
            <div v-for="item in soilLayerData" :key="item.depth" class="table-row">
              <span>{{ item.depth }}</span>
              <span class="moisture-value-cell">
                {{ item.moisture }}
                <span class="trend-arrow" :class="getTrendClass(item.trend)">{{ getTrendArrow(item.trend) }}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedPlot = ref('实验地(休耕/休眠期)');
const irrigationSuggestionText = ref('15天内不需要浇水');

const barChart = ref({
  yAxisLabels: [40, 30, 20, 10, 0],
  xAxisLabels: ['05-22', '05-25', '05-28', '05-31'],
  data: [ // 12 bars
    { value: 38, lightPartHeight: 25 }, { value: 36, lightPartHeight: 25 }, { value: 37, lightPartHeight: 25 },
    { value: 35, lightPartHeight: 25 }, { value: 39, lightPartHeight: 25 }, { value: 32, lightPartHeight: 25 },
    { value: 38, lightPartHeight: 25 }, { value: 37, lightPartHeight: 25 }, { value: 36, lightPartHeight: 25 },
    { value: 38, lightPartHeight: 25 }, { value: 39, lightPartHeight: 25 }, { value: 35, lightPartHeight: 25 }
  ],
  yMax: 40,
  currentMarkerIndex: 7, // 8th bar (0-indexed)
});

const averageSoilMoisture = ref({
  value: 37.5,
  segments: [
    { label: '萎蔫点', threshold: '10%', color: '#D3605C', percentage: 12, angleOffset: 135 }, // Reddish - approx visual size
    { label: '灌溉下限', threshold: '15%', color: '#E8A43F', percentage: 18, angleOffset: 180 }, // Yellowish
    { label: '灌溉上限', threshold: '25%', color: '#5DA5DA', percentage: 35, angleOffset: 245 }, // Blueish
    { label: '饱和持水量', threshold: '30%', color: '#8B5FBF', percentage: 35, angleOffset: 30 }  // Purplish
  ]
});

// Calculate conic-gradient background for the donut chart
const conicGradientBackground = computed(() => {
  let gradientString = 'conic-gradient(';
  let currentAngle = 0;
  averageSoilMoisture.value.segments.forEach(segment => {
    gradientString += `${segment.color} ${currentAngle}deg ${currentAngle + segment.percentage * 3.6}deg, `;
    currentAngle += segment.percentage * 3.6;
  });
  // Ensure the gradient closes properly if total percentage is slightly off 100
  if (currentAngle < 359.9) {
    gradientString += `${averageSoilMoisture.value.segments[0].color} ${currentAngle}deg 360deg`;
  } else {
    gradientString = gradientString.slice(0, -2); // Remove last comma and space
  }
  gradientString += ')';
  return gradientString;
});

// Calculate positions for donut chart labels (simplified)
const getDonutLabelPosition = (index) => {
  const segment = averageSoilMoisture.value.segments[index];
  const angleRad = (segment.angleOffset - 90) * (Math.PI / 180); // Angle for positioning
  const radius = 100; // Outer radius for labels in pixels

  // These are offsets from the center of the donut chart area.
  // The label box itself has dimensions, so these might need adjustment.
  // Using percentages for top/left relative to the container.
  // These are hand-tuned values based on the image.
  const positions = [
    { top: '70%', left: '15%', textAlign: 'right'},   // 萎蔫点 (bottom-left)
    { top: '90%', left: '80%', textAlign: 'right'},  // 灌溉下限 (left)
    { top: '0%', left: '20%', textAlign: 'left'},   // 灌溉上限 (top-leftish)
    { top: '35%', left: '85%', textAlign: 'left'}    // 饱和持水量 (right)
  ];
  return positions[index];
};


const soilLayerData = ref([
  { depth: '10cm', moisture: 30, trend: 'up1' },
  { depth: '20cm', moisture: 32.75, trend: 'up2' },
  { depth: '30cm', moisture: 35, trend: 'up2' },
  { depth: '40cm', moisture: 43.25, trend: 'up2' },
  { depth: '50cm', moisture: 45.5, trend: 'up2' },
  { depth: '60cm', moisture: 41.25, trend: 'up2' },
  { depth: '70cm', moisture: 34.5, trend: 'up2' }
]);

const getTrendArrow = (trend) => {
  if (trend === 'up1') return '↑';
  if (trend === 'up2') return '↑↑';
  // Add 'down1', 'down2' if needed
  return '';
};
const getTrendClass = (trend) => {
  if (trend.includes('up')) return 'trend-up';
  if (trend.includes('down')) return 'trend-down';
  return '';
};

</script>

<style scoped>
.irrigation-management-panel {
  background-color: #0D2A3A; /* Main dark background */
  color: #A0D8F0; /* Light cyan text */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 380px; /* Approximate width from image */
  border-radius: 8px;
  box-sizing: border-box;

  z-index: 1001;
  left: 5vw;
  position: fixed; /* 或者使用 absolute */
  padding: 20px;
}

.im-header {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}

.im-title-icon {
  width: 20px; /* Placeholder for icon if any, image has a small gradient bar */
  height: 20px;
  background: linear-gradient(to bottom right, #F3D04E, #25C7D9); /* Example gradient */
  margin-right: 8px;
  border-radius: 3px;
}

.im-title-text {
  font-size: 18px;
  font-weight: bold;
  flex-grow: 1;
}

.im-settings-button {
  background: none;
  border: none;
  color: #E0F8FF;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
}

.im-close-button {
  font-size: 18px;
  color: #E0F8FF;
  cursor: pointer;
}

.im-content {
  /* padding-top: 10px; */
}

.im-section {
  margin-bottom: 5px;
}

.plot-selection {
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: #1A4B60; /* Slightly lighter background for this control */
  padding: 8px 12px;
  border-radius: 4px;
}

.plot-name {
  flex-grow: 1;
}

.dropdown-arrow {
  margin-left: 8px;
  margin-right: 15px; /* Space before button */
  color: #25C7D9;
}

.im-action-button {
  background-color: #25C7D9;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
}
.im-action-button:hover {
  background-color: #1FAABF;
}

.im-detail-button {
  padding: 4px 8px; /* Smaller padding for this specific button */
  font-size: 12px;
}


.im-divider {
  border: none;
  height: 1px;
  background-color: #1A4B60; /* Teal divider */
  margin: 15px 0;
}

.im-section-title {
  font-size: 15px;
  color: #E0F8FF;
  margin-bottom: 10px;
  font-weight: normal;
}

.irrigation-advice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #103448; /* Darker background for this info bar */
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 14px;
}

.bar-chart-container {
  display: flex;
  height: 150px; /* Adjust as needed */
  position: relative;
  margin-left: 25px; /* Space for Y-axis labels */
  margin-right: 10px; /* Ensure space around chart */
}

.y-axis-labels {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 10px;
  color: #A0D8F0;
  position: absolute;
  left: -30px; /* Position Y labels to the left */
  top: 0;
  bottom: 20px; /* Align with bars area, leaving space for x-axis */
  text-align: right;
  height: calc(100% - 20px); /* Match height of bars-area */
}
.y-axis-labels span {
  display: block;
}


.bars-area {
  display: flex;
  align-items: flex-end; /* Bars grow upwards */
  width: 100%;
  height: calc(100% - 20px); /* Leave space for x-axis labels */
  position: relative; /* For gridlines and marker */
  border-left: 1px solid #1A4B60; /* Y-axis line */
  border-bottom: 1px solid #1A4B60; /* X-axis line */
}

.bar-gridlines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse; /* Start from bottom */
  justify-content: space-around;
}
.gridline {
  height: 1px; /* Actually the space between lines, so this is the line */
  background-color: #1A4B60; /* Gridline color */
  width: 100%;
}
.gridline:first-child { /* Remove bottom-most gridline as it overlaps with border-bottom */
  display: none;
}


.bar-wrapper {
  flex-grow: 1;
  margin: 0 1.5%; /* Spacing between bars */
  height: 100%; /* Wrappers take full height of bars-area */
  display: flex;
  align-items: flex-end;
  position: relative; /* For current marker line */
}

.bar {
  width: 100%;
  display: flex;
  flex-direction: column-reverse; /* Stack light on top of dark */
}

.bar-fill-light {
  background-color: #25C7D9; /* Lighter part of the bar */
}

.bar-fill-dark {
  background-color: #1E8A97; /* Darker part of the bar */
}

.current-marker-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%; /* Full height of the bar wrapper */
  background-color: #E74C3C; /* Red marker */
  z-index: 1;
}

.x-axis-labels {
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  color: #A0D8F0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 5px; /* Space above labels */
}
/* Adjust x-axis label positioning to align under groups of bars */
.x-axis-labels span {
  flex-basis: 25%; /* Assuming 4 labels for 12 bars, each label covers 3 bars */
  text-align: center;
}


.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.average-moisture {
  /* padding-bottom: 20px; Add padding if labels overflow */
}

.donut-chart-area {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* For label positioning */
  height: 200px; /* Adjust as needed */
  margin-top: 10px;
}

.donut-chart {
  width: 160px; /* Diameter of donut */
  height: 160px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.donut-center {
  width: 80px; /* Diameter of inner hole */
  height: 80px;
  background-color: #0D2A3A; /* Same as panel background to create hole */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Ensure it's above the conic gradient */
}

.donut-value {
  font-size: 24px;
  font-weight: bold;
  color: #E0F8FF;
}

.donut-labels {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  /* This container helps in positioning labels relative to the donut chart area's center */
}

.donut-label {
  position: absolute;
  font-size: 11px;
  color: #A0D8F0;
  transform: translate(-50%, -50%); /* Adjust for centering based on text anchor */
  background-color: rgba(13, 42, 58, 0.7); /* Slight background for readability */
  padding: 2px 4px;
  border-radius: 3px;
}
.donut-label .label-text {
  display: block;
}
.donut-label .label-value {
  display: block;
  font-weight: bold;
  color: #E0F8FF;
}


.layer-data-container {
  display: flex;
  align-items: flex-start; /* Align illustration and table at the top */
  margin-top: 10px;
}

.soil-sensor-illustration {
  margin-right: 10px;
  flex-shrink: 0; /* Prevent illustration from shrinking */
}
.soil-sensor-illustration svg line {
  /* Adjust depth line connection points if needed */
}


.layer-table {
  flex-grow: 1;
  font-size: 13px;
}

.table-header, .table-row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #1A4B60;
}
.table-header {
  font-weight: bold;
  color: #E0F8FF;
}
.table-header span:first-child, .table-row span:first-child {
  width: 50px; /* Fixed width for depth */
  text-align: left;
}
.table-header span:last-child, .table-row span:last-child {
  flex-grow: 1;
  text-align: right;
}

.table-row:last-child {
  border-bottom: none;
}

.moisture-value-cell {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.trend-arrow {
  margin-left: 8px;
  font-weight: bold;
}
.trend-up {
  color: #2ECC71; /* Green for up */
}
.trend-down {
  color: #E74C3C; /* Red for down - if you add down trends */
}

</style>