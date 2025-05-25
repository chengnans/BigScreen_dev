<template>
  <div class="climate-monitoring">
    <!-- Header -->
    <div class="header">
      <img src="../gggl/icon.png" alt="icon" class="logo" />
      <span class="title">小气候监测</span>
      <i class="info-icon">i</i>
    </div>

    <!-- Location Selection -->
    <div class="section">
      <select class="dropdown">
        <option>实验地(休耕/休眠期)</option>
      </select>
      <button class="btn">灌区详情</button>
      <button class="btn">历史数据</button>
    </div>

    <!-- Soil Temperature Average Data -->
    <div class="section">
      <h3>土壤温度均值数据</h3>
      <div class="gauge">
        <div class="gauge-circle">
          <span class="gauge-value">15.16</span>
        </div>
        <div class="gauge-labels">
          <span>低 15℃</span>
          <span>偏低 25℃</span>
          <span>偏高 30℃</span>
          <span>高 35℃</span>
        </div>
      </div>
    </div>

    <!-- Soil Temperature Layers -->
    <div class="section">
      <h3>土壤温度各层次数据</h3>
      <div class="soil-temp">
        <img src="../gggl/device.png" alt="device" class="device-img" />
        <div class="soil-depth">
          <div>深度</div>
          <div>10cm</div>
          <div>20cm</div>
          <div>30cm</div>
          <div>40cm</div>
          <div>50cm</div>
          <div>60cm</div>
          <div>70cm</div>
        </div>
        <div class="soil-values">
          <div>土壤温度(℃)</div>
          <div>18.2</div>
          <div>16.8</div>
          <div>15.3</div>
          <div>14.5</div>
          <div>13.8</div>
          <div>13.8</div>
          <div>13.7</div>
        </div>
        <div class="soil-arrows">
          <div>&nbsp;</div>
          <div>⬇️</div>
          <div>⬇️</div>
          <div>⬇️</div>
          <div>⬇️</div>
          <div>⬇️</div>
          <div>⬇️</div>
          <div>⬇️</div>
        </div>
      </div>
    </div>

    <!-- Climate Values -->
    <div class="section">
      <h3>气候数值</h3>
      <button class="btn">历史数据</button>
      <div class="climate-values">
        <div class="value-icon air"></div>
        <div class="value-icon chart"></div>
        <div class="value-icon pm25"></div>
        <div class="value-icon pm10"></div>
        <div class="value-icon co2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.climate-monitoring {
  font-family: 'Microsoft YaHei', sans-serif;
  background: #0f2d3f;
  color: white;
  padding: 1rem;

  position: fixed; /* 或者使用 absolute */
  //bottom: 10px;
  left: 5vw;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  //padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}
.header {
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
}
.logo {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}
.title {
  font-size: 20px;
  flex-grow: 1;
}
.info-icon {
  background: #195e6f;
  padding: 0.2rem 0.5rem;
  border-radius: 50%;
}
.section {
  margin: 1rem 0;
}
.dropdown {
  background: #195e6f;
  color: white;
  border: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
}
.btn {
  background: #1dc1f3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}
.device-img {
  width: 40px;
  //height: 20%;
  //object-fit: contain;
  //margin-top: 10px;
}
.gauge {
  text-align: center;
  margin-top: 1rem;
}
.gauge-circle {
  background: #1e7fcf;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
}
.gauge-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 0.5rem;
}
.soil-temp {
  display: flex;
  justify-content: space-between;
  background: #2b3f4a;
  padding: 1rem;
  border-radius: 10px;
}
.soil-depth, .soil-values, .soil-arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  flex: 1;
}
.climate-values {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
.value-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #195e6f;
}
</style>

<script>
export default {
  name: 'ClimateMonitoring',
};
</script>
