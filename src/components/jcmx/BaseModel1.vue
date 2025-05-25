<template>
  <div class="model-container">
    <div class="header">
      <h1>基础模型</h1>
      <button class="close-btn">X</button>
    </div>

    <div class="dropdown-container">
      <select v-model="selectedArea">
        <option>实验地(休耕/休眠期)</option>
        <option>对照地(休耕/休眠期)</option>
      </select>
      <button class="area-detail">灌区详情</button>
    </div>

    <div class="section">
      <div class="section-header">
        <span>基础光照模型</span>
        <button class="history-btn">历史数据</button>
      </div>

      <div class="gauge">
        <div ref="lightChart" class="chart"></div>
        <div class="sub-label">光补偿点<br />10000Lux</div>
      </div>

      <div class="info">有效日照时数：--小时</div>
    </div>

    <div class="section">
      <div class="section-header">
        <span>基础温度模型</span>
        <button class="history-btn">历史数据</button>
      </div>

      <div class="gauge">
        <div ref="tempChart" class="chart"></div>
        <div class="sub-label">低<br />15°C</div>
      </div>

      <div class="temperature-info">
        <div>--°C<br />日平均温度</div>
        <div>--°C<br />3日平均温度</div>
      </div>

      <div class="temperature-info">
        <div>--°C<br />最大温差</div>
        <div>--°C<br />最高气温</div>
        <div>--°C<br />最低气温</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      selectedArea: '实验地(休耕/休眠期)',
      lightValue: 45000,
      tempValue: 28,
    };
  },
  mounted() {
    this.initLightChart();
    this.initTempChart();
  },
  methods: {
    initLightChart() {
      const chart = echarts.init(this.$refs.lightChart);
      chart.setOption({
        series: [
          {
            type: 'gauge',
            startAngle: 210,
            endAngle: -30,
            min: 0,
            max: 100000,
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 15,
                color: [
                  [0.1, '#643dbb'],
                  [0.2, '#1476b8'],
                  [0.6, '#17c2c2'],
                  [0.9, '#f1c40f'],
                  [1, '#e74c3c'],
                ],
              },
            },
            axisLabel: {
              distance: 25,
              color: '#fff',
              fontSize: 10,
              formatter: function (value) {
                if (value === 10000) return '光补偿点';
                if (value === 20000) return '偏低';
                if (value === 90000) return '光饱和点';
                if (value === 100000) return '高';
                return '';
              },
            },
            pointer: {
              width: 5,
              length: '70%',
            },
            detail: {
              valueAnimation: true,
              fontSize: 16,
              color: '#fff',
              formatter: '{value}Lux',
            },
            data: [{ value: this.lightValue }],
          },
        ],
      });
    },
    initTempChart() {
      const chart = echarts.init(this.$refs.tempChart);
      chart.setOption({
        series: [
          {
            type: 'gauge',
            startAngle: 210,
            endAngle: -30,
            min: 0,
            max: 35,
            splitNumber: 7,
            axisLine: {
              lineStyle: {
                width: 15,
                color: [
                  [0.2, '#643dbb'],
                  [0.4, '#1476b8'],
                  [0.6, '#17c2c2'],
                  [0.85, '#f1c40f'],
                  [1, '#e74c3c'],
                ],
              },
            },
            axisLabel: {
              distance: 25,
              color: '#fff',
              fontSize: 10,
              formatter: function (value) {
                if (value === 15) return '低';
                if (value === 25) return '偏低';
                if (value === 30) return '偏高';
                if (value === 35) return '高';
                return '';
              },
            },
            pointer: {
              width: 5,
              length: '70%',
            },
            detail: {
              valueAnimation: true,
              fontSize: 16,
              color: '#fff',
              formatter: '{value}°C',
            },
            data: [{ value: this.tempValue }],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.model-container {
  background: #003b41;
  color: #fff;
  padding: 0.5rem;
  border-radius: 10px;
  font-family: sans-serif;
  width: 100%;
  max-width: 400px;


  position: fixed; /* 或者使用 absolute */
  //bottom: 0px;
  left: 5vw;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  //padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}
.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}
.dropdown-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.8rem 0;
}
.dropdown-container select {
  flex-grow: 1;
  padding: 0.3rem;
  margin-right: 0.5rem;
}
.area-detail,
.history-btn {
  background-color: #17c2c2;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  border-radius: 4px;
}
.section {
  margin-bottom: 1rem;
  border-top: 1px solid #17c2c2;
  padding-top: 1rem;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.gauge {
  background-color: #002e33;
  padding: 0.5rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
}
.chart {
  width: 100%;
  height: 150px;
}
.sub-label {
  font-size: 0.8rem;
  margin-top: 0.3rem;
}
.info {
  text-align: center;
  margin-top: 0.5rem;
}
.temperature-info {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.85rem;
}
</style>
