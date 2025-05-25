<template>
  <div class="pest-monitor-container">
    <header class="pm-header">
      <div class="pm-title-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="title-logo-icon">
          <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-5h16V6H4v2z"/> <!-- Simple placeholder icon -->
        </svg>
        <span>病虫害监测</span>
      </div>
      <button class="pm-close-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </header>

    <section class="pm-filters">
      <div class="pm-filter-dropdown">
        <span>全部</span>
        <span class="pm-arrow-down">▼</span>
      </div>
      <input type="text" placeholder="开始日期" class="pm-date-input" />
      <span class="pm-date-separator">~</span>
      <input type="text" placeholder="结束日期" class="pm-date-input" />
      <button class="pm-calendar-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
        </svg>
      </button>
    </section>

    <div class="pm-content-scroll">
      <div v-for="entry in monitoringEntries" :key="entry.id" class="pm-entry">
        <div class="pm-entry-time">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#00f0ff" class="pm-time-diamond">
            <path d="M12 2L2 12l10 10 10-10L12 2zm0 16.59L5.41 12 12 5.41 18.59 12 12 18.59z"/>
          </svg>
          <span>时间：{{ entry.timestamp }}</span>
        </div>
        <img :src="entry.imageUrl" alt="Monitoring Image" class="pm-entry-image" />
        <div class="pm-entry-details">
          <div class="pm-detail-row">
            <span class="pm-detail-label">识别类型：</span>
            <span class="pm-detail-value">{{ entry.recognitionType }}</span>
            <span class="pm-detail-label pm-detail-source-label">来源：</span>
            <span class="pm-detail-value">{{ entry.source }}</span>
          </div>
          <div class="pm-detail-row">
            <span class="pm-detail-label">识别结果：</span>
            <span class="pm-detail-value">{{ entry.recognitionResult }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const monitoringEntries = ref([
  {
    id: 1,
    timestamp: '2025-05-21 00:20:43',
    imageUrl: 'pest.png', // Placeholder
    recognitionType: '害虫',
    source: '虫情测报灯',
    recognitionResult: '未发现病虫害',
  },
  {
    id: 2,
    timestamp: '2025-05-20 23:56:59',
    imageUrl: 'pest.png', // Placeholder
    recognitionType: '害虫',
    source: '虫情测报灯',
    recognitionResult: '未发现病虫害',
  },
  {
    id: 3,
    timestamp: '2025-05-20 22:15:30',
    imageUrl: 'pest.png', // Placeholder
    recognitionType: '病害',
    source: '高清摄像头',
    recognitionResult: '疑似叶斑病',
  },
  // Add more entries to test scrolling
  {
    id: 4,
    timestamp: '2025-05-20 21:05:00',
    imageUrl: 'pest.png', // Placeholder
    recognitionType: '害虫',
    source: '虫情测报灯',
    recognitionResult: '发现蚜虫 3 只',
  },
]);
</script>

<style scoped>
.pest-monitor-container {
  width: 350px; /* Approximate width from image */
  background-color: #0b1a25; /* Dark blue/teal background */
  color: #c0d0d8; /* Light grey/blue text */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Important for child border-radius and scroll */
  border: 1px solid #1c2f3e; /* Outer border */

  position: fixed; /* 或者使用 absolute */
  //bottom: 100px;
  left: 5vw;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  //padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.pm-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #112232; /* Slightly lighter header background */
  border-bottom: 2px solid #00f0ff; /* Teal bottom border for header */
}

.pm-title-icon {
  display: flex;
  align-items: center;
  color: #00f0ff; /* Bright teal for title */
  font-weight: bold;
  font-size: 18px;
}

.title-logo-icon {
  margin-right: 8px;
}

.pm-close-btn {
  background: none;
  border: none;
  color: #8a9faa;
  cursor: pointer;
}
.pm-close-btn:hover {
  color: #00f0ff;
}

.pm-filters {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #102533; /* Slightly different background for filters */
  gap: 8px; /* Spacing between filter elements */
}

.pm-filter-dropdown {
  background-color: #005f6b; /* Darker teal for dropdown */
  color: #e0f0f8;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.pm-filter-dropdown:hover {
  background-color: #007c8a;
}

.pm-arrow-down {
  margin-left: 6px;
  font-size: 10px;
}

.pm-date-input {
  background-color: #091f2c;
  border: 1px solid #1c3a4a;
  color: #c0d0d8;
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 13px;
  width: 80px; /* Adjust as needed */
}
.pm-date-input::placeholder {
  color: #506878;
}

.pm-date-separator {
  color: #506878;
}

.pm-calendar-btn {
  background: none;
  border: 1px solid #1c3a4a;
  color: #8a9faa;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pm-calendar-btn:hover {
  border-color: #00f0ff;
  color: #00f0ff;
}

.pm-content-scroll {
  flex-grow: 1; /* Allows this section to take remaining space */
  overflow-y: auto; /* Enables vertical scrolling */
  padding: 0 15px 15px 15px;
  max-height: 400px; /* Set a max height to demonstrate scrolling, adjust as needed */
  background-color: #0a1822; /* Slightly darker for content area */
}

/* Custom scrollbar styling (optional, for WebKit browsers) */
.pm-content-scroll::-webkit-scrollbar {
  width: 6px;
}
.pm-content-scroll::-webkit-scrollbar-track {
  background: #0b1a25;
  border-radius: 3px;
}
.pm-content-scroll::-webkit-scrollbar-thumb {
  background: #1c3a4a;
  border-radius: 3px;
}
.pm-content-scroll::-webkit-scrollbar-thumb:hover {
  background: #00f0ff;
}


.pm-entry {
  margin-top: 15px;
  background-color: #102533; /* Background for each entry card */
  border-radius: 6px;
  padding-bottom: 10px; /* Padding at the bottom of the card */
  border: 1px solid #15303d;
}
.pm-entry:first-child {
  margin-top: 10px; /* Less margin for the very first item */
}

.pm-entry-time {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  font-size: 14px;
  color: #00f0ff; /* Teal for timestamp */
  position: relative; /* For the decorative line */
  margin-bottom: 5px; /* Space before image */
}
.pm-entry-time::after { /* Decorative line under timestamp */
  content: '';
  position: absolute;
  left: 32px; /* Start after icon and some space */
  right: 10px;
  bottom: 0px; /* Positioned at the very bottom of the time div */
  height: 1px;
  background-color: #1c3a4a; /* Color of the line */
}

.pm-time-diamond {
  margin-right: 8px;
}

.pm-entry-image {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  max-height: 200px; /* Control max image height */
  object-fit: cover; /* Cover the area, might crop */
  display: block; /* Remove extra space below image */
  border-top: 1px solid #15303d; /* Separator line */
  border-bottom: 1px solid #15303d; /* Separator line */
}

.pm-entry-details {
  padding: 8px 10px 0px 10px; /* No bottom padding here, it's on .pm-entry */
  font-size: 13px;
}

.pm-detail-row {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping if content is too long */
  margin-bottom: 4px;
  line-height: 1.4;
}
.pm-detail-row:last-child {
  margin-bottom: 0;
}

.pm-detail-label {
  color: #8a9faa; /* Dimmer color for labels */
  margin-right: 5px;
}

.pm-detail-value {
  color: #00f0ff; /* Teal for values */
}

.pm-detail-source-label {
  margin-left: 15px; /* Space before the "来源" label */
}

</style>