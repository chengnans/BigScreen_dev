<template>
  <div class="dashboard">
    <div v-for="(panel, index) in panels" :key="index" class="panel">
      <div class="panel-header">
        <div class="title">
          <span class="icon">💧</span>
          {{ panel.title }}
        </div>
        <button class="history-btn" v-if="panel.showHistory">历史数据</button>
      </div>
      <div class="chart" :ref="el => chartRefs[index] = el"></div>
      <div class="labels">
        <span>低<br />{{ panel.ranges.min }}{{ panel.unit }}</span>
        <span>偏低<br />{{ panel.ranges.low }}{{ panel.unit }}</span>
        <span>偏高<br />{{ panel.ranges.high }}{{ panel.unit }}</span>
        <span>高<br />{{ panel.ranges.max }}{{ panel.unit }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRefs = []

const panels = [
  {
    title: '环境温度',
    unit: '℃',
    showHistory: true,
    ranges: { min: 15, low: 25, high: 30, max: 35 },
  },
  {
    title: '环境湿度',
    unit: 'RH',
    showHistory: true,
    ranges: { min: 60, low: 70, high: 85, max: 95 },
  },
  {
    title: '光照',
    unit: 'Lux',
    showHistory: true,
    ranges: { min: 10000, low: 20000, high: 90000, max: 100000 },
  },
  {
    title: '风速',
    unit: 'm/s',
    showHistory: true,
    ranges: { min: 0, low: 1, high: 10, max: 20 },
  },
]

onMounted(() => {
  panels.forEach((panel, index) => {
    const chart = echarts.init(chartRefs[index])
    const { min, low, high, max } = panel.ranges
    const lowRate = (low - min) / (max - min)
    const highRate = (high - min) / (max - min)

    chart.setOption({
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: min,
          max: max,
          splitNumber: 5,
          radius: '100%',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [lowRate, '#3457b1'],
                [highRate, '#00d4b4'],
                [1 - 0.1, '#ffc72c'],
                [1, '#f03e3e'],
              ],
            },
          },
          pointer: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          detail: {
            valueAnimation: true,
            formatter: '--',
            offsetCenter: [0, '0%'],
            fontSize: 24,
            color: '#00d4b4',
          },
        },
      ],
    })
  })
})
</script>

<style scoped>
.dashboard {
  background-color: #00212e;
  padding: 20px;
  color: #fff;

  position: fixed; /* 或者使用 absolute */
  bottom: 0px;
  right: 8px;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}
.panel {
  margin-bottom: 0px;
  background: #001a24;
  padding: 20px;
  border-radius: 12px;
}
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #00d4b4;
  font-weight: bold;
  margin-bottom: 1px;
}
.title {
  display: flex;
  align-items: center;
}
.icon {
  font-size: 15px;
  margin-right: 3px;
}
.history-btn {
  background: linear-gradient(to right, #30cfd0, #330867);
  border: none;
  border-radius: 10px;
  padding: 3px 5px;
  color: white;
  font-size: 12px;
  cursor: pointer;
}
.chart {
  width: 100%;
  height: 100px;
}
.labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 2px;
  color: #fff;
  text-align: center;
}
</style>
