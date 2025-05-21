<template>
  <div class="growth-details-container">
    <header class="gd-header">
      <div class="gd-title-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="title-logo-icon">
          <!-- Placeholder for the diamond-like icon -->
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5L12 12 2 17z"/>
        </svg>
        <span>生育时期明细</span>
      </div>
    </header>

    <div class="gd-timeline">
      <div v-for="(stage, index) in growthStages" :key="index" class="gd-timeline-item">
        <div class="gd-timeline-line-connector">
          <div class="gd-timeline-tick"></div>
        </div>
        <div class="gd-stage-card">
          <div class="gd-stage-icon-wrapper">
            <!-- Placeholder for branch icon - same as previous component but smaller -->
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#86efac"> <!-- Light green for icon -->
              <path d="M21.64,11.26l-2.57-2.57a1,1,0,0,0-1.42,0L13,13.36V3a1,1,0,0,0-2,0v10.36L6.34,8.69a1,1,0,0,0-1.41,0L2.36,11.26a1,1,0,0,0,0,1.41L11.29,22a.91.91,0,0,0,.07.07.83.83,0,0,0,.12.09l.1.06.12.05.12.06.12.05.13.04.12.03.12.03.13.02.12.02.13.01H12a1,1,0,0,0,.57-.2l8.81-8.81A1,1,0,0,0,21.64,11.26ZM12,19.59L5.41,13,7.12,11.29,12,16.17l4.88-4.88L18.59,13Z"/>
            </svg>
          </div>
          <div class="gd-stage-info">
            <span class="gd-stage-name">{{ stage.name }}</span>
            <span class="gd-stage-date">{{ stage.date }}</span>
          </div>
          <span class="gd-stage-duration">{{ stage.duration }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const growthStages = ref([
  { name: '播种', date: '2024-06-20', duration: '7天' },
  { name: '出苗期', date: '2024-06-27', duration: '30天' },
  { name: '拔节期', date: '2024-07-27', duration: '21天' },
  { name: '抽穗开花期', date: '2024-08-17', duration: '10天' },
  { name: '灌浆期', date: '2024-08-27', duration: '46天' },
  { name: '成熟期', date: '2024-10-12', duration: '15天' },
]);
</script>

<style scoped>
.growth-details-container {
  width: 280px; /* Approximate width from image */
  background-color: #0b1a25; /* Dark blue/teal background */
  color: #c0d0d8; /* Light grey/blue text */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  //padding: 15px 10px 15px 20px; /* More padding on left for timeline line */
  border-radius: 8px;
  //position: relative; /* For the main timeline bar */

  position: fixed; /* 或者使用 absolute */
  bottom: 100px;
  right: 3px;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.gd-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; /* Space before timeline starts */
}

.gd-title-icon {
  display: flex;
  align-items: center;
  color: #00f0ff; /* Bright teal for title */
  font-weight: bold;
  font-size: 16px;
  position: relative;
  padding-left: 10px; /* Space for the decorative line */
}
.gd-title-icon::before { /* Small line under title */
  content: '';
  position: absolute;
  left: 10px; /* Align with padding */
  bottom: -8px; /* Position below the text */
  width: 30px; /* Length of the line */
  height: 2px;
  background-color: #00f0ff;
  border-radius: 1px;
}


.title-logo-icon {
  margin-right: 8px;
  /* Using a generic diamond shape, replace with your actual icon */
}

.gd-timeline {
  position: relative;
  padding-left: 15px; /* Space for the main vertical line */
}

/* The main vertical timeline bar */
.gd-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px; /* Start a bit down to align with first tick */
  bottom: 10px; /* End a bit up */
  width: 2px;
  background-color: #1e4f58; /* Color of the main timeline vertical bar */
  z-index: 0;
}

.gd-timeline-item {
  display: flex;
  align-items: flex-start; /* Align items to the top of the card */
  position: relative; /* For tick positioning */
  margin-bottom: 10px; /* Space between timeline items */
}
.gd-timeline-item:last-child {
  margin-bottom: 0;
}

.gd-timeline-line-connector {
  position: absolute;
  left: -15px; /* Position relative to gd-timeline padding-left */
  top: 22px; /* Vertically center the tick with the icon circle's approx center */
  width: 15px; /* Width of the horizontal tick */
  height: 2px;
  z-index: 1;
}

.gd-timeline-tick {
  width: 15px; /* Length of the horizontal tick */
  height: 2px;
  background-color: #1e4f58; /* Color of the horizontal ticks */
  position: absolute;
  left: 0;
  top: 0; /* Aligns with the connector's top */
}


.gd-stage-card {
  background-color: #102c36; /* Background of each stage item */
  padding: 10px 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-grow: 1; /* Make card take full width available */
  position: relative;
  z-index: 2; /* Ensure card is above timeline line */
}

.gd-stage-icon-wrapper {
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 240, 255, 0.1); /* Faint teal circle for icon */
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: 2px solid #0d3c47; /* Darker border for the circle */
}
.gd-stage-icon-wrapper svg {
  /* SVG color is set by `fill` attribute in the SVG itself */
}

.gd-stage-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allow info to take available space */
}

.gd-stage-name {
  font-size: 14px;
  color: #e0f0f8; /* Lighter text for name */
  font-weight: 500;
  margin-bottom: 2px;
}

.gd-stage-date {
  font-size: 12px;
  color: #708898; /* Dimmer text for date */
}

.gd-stage-duration {
  font-size: 14px;
  color: #00f0ff; /* Teal for duration */
  font-weight: bold;
  margin-left: 10px; /* Space it from the info block */
}

</style>