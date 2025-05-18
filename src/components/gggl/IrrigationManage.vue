<template>
  <div class="IrrigationManage">
    <div ref="container" class="p-4 text-white rounded-lg shadow-md w-[360px] font-bold">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-lg">灌溉管理</h1>
        <button class="text-xs px-2 py-1">设置</button>
      </div>

      <div class="mb-2">
        <select class="w-full p-1">
          <option>实验地(休耕/休眠期)</option>
        </select>
        <button class="w-full mt-1 text-xs p-1">灌区详情</button>
      </div>

      <div class="section-box mb-4">
        <h2 class="section-title">🔷 建议下次浇水时间</h2>
        <div class="text-center mt-2 value-box">15天内不需要浇水</div>
        <button class="mt-2 text-xs w-full p-1">去浇水</button>
        <div ref="barChart" class="mt-2 w-full" style="height: 120px;"></div>
      </div>

      <div class="section-box mb-4">
        <h2 class="section-title">🔷 土壤含水量均值数据</h2>
        <button class="text-xs w-full mt-1 p-1">历史数据</button>
        <div ref="gaugeChart" class="w-full mt-2" style="height: 160px;"></div>
      </div>

      <div class="section-box">
        <h2 class="section-title">🔷 土壤含水量各层次数据</h2>
        <div  class="device-flex" style="display: flex">
          <!-- 图片 -->
          <img src="./device.png" style="height: 150px;" />

          <!-- 数据区域作为一个整体 -->
          <div class="space-y-1">
            <div v-for="(item, index) in soilData" :key="index" class="flex justify-between">
              <span>{{ item.depth }}</span>
              <span>{{ item.value }}% <span class="text-cyan-300">↑</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      barData: [25, 30, 32, 33, 36, 36, 30, 29, 28, 27, 26],
      soilData: [
        { depth: '10cm', value: 27 },
        { depth: '20cm', value: 34 },
        { depth: '30cm', value: 34 },
        { depth: '40cm', value: 40.5 },
        { depth: '50cm', value: 43.5 },
        { depth: '60cm', value: 35.5 },
        { depth: '70cm', value: 28.5 },
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initBarChart();
        this.initGaugeChart();
      }, 100);
    });
  },
  methods: {
    initBarChart() {
      const chart = echarts.init(this.$refs.barChart);
      chart.setOption({
        xAxis: {
          type: 'category',
          data: this.barData.map((_, i) => '05-' + (11 + i)),
          axisLabel: { color: '#fff', fontSize: 10 }
        },
        yAxis: {
          type: 'value',
          axisLabel: { color: '#fff' }
        },
        series: [{
          data: this.barData,
          type: 'bar',
          itemStyle: { color: '#22d3ee' }
        }],
        grid: { left: 20, right: 20, bottom: 20, top: 20 }
      });
      window.addEventListener('resize', () => chart.resize());
    },
    initGaugeChart() {
      const chart = echarts.init(this.$refs.gaugeChart);
      chart.setOption({
        series: [{
          type: 'gauge',
          progress: { show: true, width: 10 },
          axisLine: { lineStyle: { width: 10 } },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          pointer: { width: 5 },
          detail: {
            valueAnimation: true,
            formatter: '{value}%',
            color: '#fff'
          },
          data: [{ value: 34.7 }]
        }]
      });
      window.addEventListener('resize', () => chart.resize());
    }
  }
};
</script>

<style scoped>
.IrrigationManage {
  width: 360px;
  position: fixed;
  bottom: 30px;
  left: 60px;
  background: linear-gradient(to bottom, #00666f, #004d4d);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  font-family: 'Microsoft YaHei', sans-serif;
}

button, select {
  background-color: #00bcd4;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 12px;
}
button:hover {
  background-color: #26c6da;
}
select {
  background-color: #006064;
  padding: 4px;
}

.section-box {
  background-color: #006064;
  padding: 8px;
  border-radius: 6px;
}
.section-title {
  font-size: 13px;
  border-bottom: 1px solid #fff;
  padding-bottom: 4px;
}
.value-box {
  background-color: #00acc1;
  padding: 6px;
  border-radius: 4px;
  font-size: 12px;
}

select:focus,
button:focus {
  outline: none;
}
</style>
