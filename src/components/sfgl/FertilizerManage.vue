<template>
  <div class="fertilization-management">
    <div class="header">
      <h1>施肥管理</h1>
      <button class="close-btn">×</button>
    </div>

    <div class="selector">
      <select>
        <option>实验地(休耕/休眠期)</option>
      </select>
      <button class="zone-btn">灌区详情</button>
    </div>

    <div class="section">
      <h2>🟦 土壤EC均值数据</h2>
      <button class="history-btn">历史数据</button>
      <div class="ec-gauge">
        <div class="gauge">
          <div class="needle"></div>
          <div class="value">342.05</div>
        </div>
        <div class="gauge-labels">
          <span>低<br>1000us/cm</span>
          <span>偏低<br>1500us/cm</span>
          <span>偏高<br>3000us/cm</span>
          <span>高<br>4000us/cm</span>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🟦 土壤EC各层次数据</h2>
      <div class="soil-data">
        <img src="../gggl/device.png" alt="device" class="device-img" />
        <table>
          <tr>
            <th>深度</th>
            <th>土壤EC(us/cm)</th>
          </tr>
          <tr v-for="(item, index) in soilData" :key="index">
            <td>{{ item.depth }}</td>
            <td>{{ item.ec }} <span class="down">🔻</span></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="section">
      <h2>🟦 目标亩产</h2>
      <button class="edit-btn">修改目标亩产数据</button>
      <div class="target">
        <p>目标亩产：</p>
        <div class="target-value">--公斤/亩</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FertilizationManagement',
  data() {
    return {
      soilData: [
        { depth: '10cm', ec: 297.67 },
        { depth: '20cm', ec: 382.67 },
        { depth: '30cm', ec: 373.33 },
        { depth: '40cm', ec: 379 },
        { depth: '50cm', ec: 321 },
        { depth: '60cm', ec: 379.33 },
        { depth: '70cm', ec: 261.33 },
      ],
    };
  },
};
</script>

<style scoped>
.fertilization-management {
  font-family: 'Microsoft YaHei', sans-serif;
  background: #01232f;
  color: #c8f7ff;
  border-radius: 10px;
  width: 20vw;
  position: fixed;
  //bottom: 5vh;
  left: 5vw;
  padding: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000;
  font-size: 12px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: transparent;
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.selector {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
}

.zone-btn, .history-btn, .edit-btn {
  background-color: #29e3ff;
  border: none;
  color: #003b50;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
}

.section {
  margin-top: 8px;
}

.ec-gauge {
  background: radial-gradient(#031d2c, #01232f);
  padding: 5px;
  border-radius: 10px;
  text-align: center;
}

.gauge {
  position: relative;
  width: 70px;
  height: 70px;
  margin: auto;
  background: conic-gradient(#3bf0f9 0% 25%, #29e3ff 25% 50%, #fdd835 50% 75%, #f44336 75% 100%);
  border-radius: 50%;
}

.needle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 30px;
  background: #fff;
  transform: translate(-50%, -100%) rotate(10deg);
  transform-origin: bottom;
}

.value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: #fff;
}

.gauge-labels {
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  margin-top: 8px;
}

.soil-data table {
  width: 100%;
  border-spacing: 0 4px;
  font-size: 11px;
}

.soil-data td, .soil-data th {
  text-align: center;
  padding: 4px;
  color: #ff5f5f;
}

.soil-data {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  position: relative;
}

.device-img {
  width: 50px;
  //height: 20%;
  object-fit: contain;
  margin-top: 10px;
}

.down {
  color: #f00;
}

.target {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d3b4a;
  padding: 8px;
  border-radius: 6px;
  margin-top: 8px;
}

.target-value {
  color: #f8e71c;
  font-size: 16px;
  font-weight: bold;
}
</style>

