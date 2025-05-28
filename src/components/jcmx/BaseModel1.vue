<template>
  <div class="model-container">
    <div class="header">
      <h3>基础模型</h3>
<!--      <button class="close-btn">X</button>-->
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
        <!-- 添加 Donut Labels -->
        <div class="donut-labels">
          <div
              v-for="(segment, index) in averageSoilMoisture.segments"
              :key="index"
              class="donut-label"
              :style="getDonutLabelPosition(index)"
          >
            <span class="label-text">{{ segment.label }}</span>
            <span class="label-value">{{ segment.threshold }}</span>
          </div>
        </div>
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
        <!-- 添加 Donut Labels -->
        <div class="donut-labels">
          <div
              v-for="(segment, index) in averageSoilMoisture.segments"
              :key="index"
              class="donut-label"
              :style="getDonutLabelPosition(index)"
          >
            <span class="label-text">{{ segment.label }}</span>
            <span class="label-value">{{ segment.threshold }}</span>
          </div>
        </div>
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
      // 添加 Donut Labels 数据
      averageSoilMoisture: {
        value: 37.5,
        segments: [
          { label: '萎蔫点', threshold: '10%', color: '#D3605C', percentage: 12, angleOffset: 135 }, // Reddish - approx visual size
          { label: '灌溉下限', threshold: '15%', color: '#E8A43F', percentage: 18, angleOffset: 180 }, // Yellowish
          { label: '灌溉上限', threshold: '25%', color: '#5DA5DA', percentage: 35, angleOffset: 245 }, // Blueish
          { label: '饱和持水量', threshold: '30%', color: '#8B5FBF', percentage: 35, angleOffset: 30 }  // Purplish
        ]
      }
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
            // 去掉刻度和分割线
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
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
            data: [{value: this.lightValue}],
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
            // 去掉刻度和分割线
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
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
            data: [{value: this.tempValue}],
          },
        ],
      });
    },
    // 添加 Donut Labels 的位置计算方法
    getDonutLabelPosition(index) {
      const segment = this.averageSoilMoisture.segments[index];
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
    }
  }
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
  left: 5vw;
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

/* 添加 Donut Labels 的样式 */
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
</style>