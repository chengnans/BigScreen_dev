<template>
  <div class="monitor">
  <div class="soil-monitor">
    <!-- Header -->
    <div class="header">
      <span class="label">土壤监测</span>
      <button class="close-btn" @click="close">×</button>
    </div>

    <!-- Experiment Selection -->
    <div class="experiment-section">
      <label for="experimentPeriod">实验地 (休耕/休眠期)</label>
      <select id="experimentPeriod" v-model="experimentPeriod" class="dropdown">
        <option value="休耕">休耕</option>
        <option value="休眠期">休眠期</option>
      </select>
      <span class="details-btn" @click="toggleDetails">潜区详情</span>
    </div>

    <!-- Basic Data -->
    <div class="basic-data">
      <div class="data-item">
        <span class="data-label">土壤类型</span>
        <span class="data-value">{{ soilType }}</span>
      </div>
      <div class="data-item">
        <span class="data-label">土壤容量</span>
        <span class="data-value">{{ soilVolume }}</span>
      </div>
    </div>

    <!-- Live Data Table -->
    <div class="live-data">
      <div class="sensor-info">
        <img src="https://ts1.tc.mm.bing.net/th/id/R-C.3788497f64eeedf38a4f016511c42fb6?rik=1ApM1v%2fv%2fhlS9A&riu=http%3a%2f%2ficon.chrafz.com%2fuploads%2fallimg%2f160919%2f1-1609191A3380-L.png&ehk=KtuaDMFbY29WzPwmvP72IokO%2bUcfXFwi%2bIQbI2Qh57g%3d&risl=&pid=ImgRaw&r=0" alt="sensor icon" class="sensor-icon" />
        <span class="sensor-id">{{ sensorId }}</span>
      </div>

      <!-- Data table for Depth, Moisture, EC, and Temperature -->
      <div class="data-table">
        <div class="data-row">
          <span class="data-depth">深度 (cm)</span>
          <span class="data-value">10</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
        </div>
        <div class="data-row">
          <span class="data-depth">20</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
        </div>
        <div class="data-row">
          <span class="data-depth">30</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
        </div>
        <div class="data-row">
          <span class="data-depth">40</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
        </div>
        <div class="data-row">
          <span class="data-depth">50</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
        </div>
        <div class="data-row">
          <span class="data-depth">60</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
          <span class="data-value">--</span>
        </div>
      </div>
    </div>

    <!-- Update Time -->
    <div class="update-time">
      <span>数据更新时间：</span>
      <span>{{ updateTime }}</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experimentPeriod: "休耕",
      soilType: "壤土",
      soilVolume: "1.40",
      sensorId: "868777050005820",
      updateTime: "2025-03-26 21:55:41",
    };
  },
  methods: {
    toggleDetails() {
      // 处理潜区详情按钮点击
      alert("潜区详情按钮点击");
    },
    close() {
      // 处理关闭按钮点击
      alert("关闭按钮点击");
    },
  },
};
</script>

<style scoped>
.monitor{
  position: fixed; /* 或者使用 absolute */
  bottom: 120px;
  right: 3px;
  background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}
.soil-monitor {
  font-family: Arial, sans-serif;
  background-color: #1f8b8f;
  color: white;
  padding: 20px;
  border-radius: 8px;
  width: 380px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  font-size: 18px;
  font-weight: bold;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.experiment-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.dropdown {
  padding: 5px;
  border-radius: 5px;
  border: none;
}

.details-btn {
  color: #2a93b2;
  cursor: pointer;
}

.basic-data {
  margin-top: 20px;
}

.data-item {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.data-label {
  font-size: 14px;
}

.data-value {
  font-size: 14px;
  font-weight: bold;
}

.live-data {
  margin-top: 20px;
}

.sensor-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.sensor-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.data-table {
  margin-top: 10px;
  border-top: 2px solid #93c5c9;
}

.data-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  background-color: #2d8d8f;
  border-radius: 4px;
}

.data-depth {
  width: 70px;
  text-align: left;
  padding-left: 10px;
}

.data-value {
  width: 60px;
  text-align: center;
}

.update-time {
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
}

.update-time span {
  color: #93c5c9;
}
</style>
