<template>
  <div class="app">
    <!-- 湿度模块 -->
    <div class="module">
      <div class="module-header">
        <span class="module-title">💧 基础湿度模型</span>
        <button class="history-btn">历史数据</button>
      </div>
      <div class="module-content">
        <div class="title">实时湿度数据</div>
        <div id="humidity-chart" class="chart"></div>
        <div class="stats">
          <div class="stat">
            <div class="stat-box purple">--%RH</div>
            <div class="stat-label">最小湿度</div>
          </div>
          <div class="stat">
            <div class="stat-box green">--%RH</div>
            <div class="stat-label">最大湿度</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 风速模块 -->
    <div class="module">
      <div class="module-header">
        <span class="module-title">🌬 基础风速模型</span>
        <button class="history-btn">历史数据</button>
      </div>
      <div class="module-content">
        <div class="title">实时风速数据</div>
        <div id="wind-chart" class="chart"></div>
        <div class="stats">
          <div class="stat">
            <div class="stat-box purple">--m/s</div>
            <div class="stat-label">最小风速</div>
          </div>
          <div class="stat">
            <div class="stat-box green">--m/s</div>
            <div class="stat-label">最大风速</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "App",
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 湿度图表
      const humidityChart = echarts.init(document.getElementById("humidity-chart"));
      humidityChart.setOption(this.getGaugeOption("湿度", "%RH", 60, 95, 70, 85));

      // 风速图表
      const windChart = echarts.init(document.getElementById("wind-chart"));
      windChart.setOption(this.getGaugeOption("风速", "m/s", 0, 20, 1, 10));
    },
    getGaugeOption(title, unit, min, max, biasLow, biasHigh) {
      return {
        title: {
          text: title,
          left: "center",
          textStyle: { color: "#fff", fontSize: 16 },
        },
        series: [
          {
            type: "gauge",
            min,
            max,
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 10,
                color: [
                  [biasLow / max, "#1e90ff"],
                  [biasHigh / max, "#00fa9a"],
                  [1, "#ff4500"],
                ],
              },
            },
            pointer: { show: false },
            detail: {
              formatter: `--${unit}`,
              color: "#fff",
              fontSize: 20,
            },
          },
        ],
      };
    },
  },
};
</script>

<style scoped lang="scss">
.app {
  background: #0f2d37;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 20px;

  position: fixed; /* 或者使用 absolute */
  //bottom: 120px;
  right: 0.2vw;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  //padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */

  .module {
    background: #062c33;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 15px;

    .module-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .module-title {
        font-weight: bold;
        font-size: 16px;
      }

      .history-btn {
        background: #00bcd4;
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
      }
    }

    .module-content {
      .title {
        font-size: 14px;
        margin-bottom: 10px;
      }

      .chart {
        width: 100%;
        height: 200px;
        margin-bottom: 10px;
      }

      .stats {
        display: flex;
        justify-content: space-between;

        .stat {
          text-align: center;

          .stat-box {
            width: 80px;
            height: 40px;
            line-height: 40px;
            border-radius: 5px;
            margin-bottom: 5px;
            font-size: 14px;

            &.purple {
              background: #800080;
            }

            &.green {
              background: #008000;
            }
          }

          .stat-label {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>