<template>
  <div class="soil-monitor">
    <div class="header">
      <img src="../gggl/icon.png" class="header-icon" />
      <span>土壤监测</span>
      <i class="el-icon-close close-btn"></i>
    </div>

    <el-select v-model="selectedField" class="field-select" placeholder="选择区域">
      <el-option
          v-for="item in fields"
          :key="item"
          :label="item"
          :value="item"
      />
    </el-select>
    <el-button type="primary" size="small" class="area-btn">灌区详情</el-button>

    <div class="section-title">🌱 土壤基础数据</div>
    <div class="basic-info">
      <span>土壤类型：<strong>{{ soilType }}</strong></span>
      <span>土壤容量：<strong>{{ soilCapacity }}</strong></span>
    </div>

    <div class="section-title">
      🌱 土壤实时数据
      <el-checkbox v-model="isOnline" class="online-checkbox">在线</el-checkbox>
    </div>

    <div class="device-select">
      <el-select v-model="deviceModel" placeholder="选择设备">
        <el-option label="微型气象仪XPro" value="XPro" />
      </el-select>
      <el-input v-model="deviceId" placeholder="设备编号" />
    </div>

    <!-- soil-probe 和 表格并列显示 -->
    <div class="soil-data-wrapper">
      <div class="soil-probe"></div>
      <div class="soil-data-table">
        <div class="data-header">
          <div>深度 (cm)</div>
          <div>水分 (%)</div>
          <div>EC (us/cm)</div>
          <div>温度 (℃)</div>
        </div>
        <div class="data-rows" v-for="item in soilData" :key="item.depth">
          <div>{{ item.depth }} cm</div>
          <div>{{ item.moisture }} %</div>
          <div>{{ item.ec }} us/cm</div>
          <div>{{ item.temp }} ℃</div>
        </div>
      </div>
    </div>

    <div class="update-time">数据更新时间：{{ updateTime }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedField = ref('实验地(休耕/休眠期)')
const fields = ['实验地(休耕/休眠期)']
const soilType = '壤土'
const soilCapacity = '1.40'
const isOnline = ref(true)
const deviceModel = ref('XPro')
const deviceId = ref('866804050488715')

const soilData = ref([
  { depth: 10, moisture: 16, ec: 37, temp: 19.8 },
  { depth: 20, moisture: 24, ec: 194, temp: 18.2 },
  { depth: 30, moisture: 18, ec: 125, temp: 16.8 },
  { depth: 40, moisture: 33, ec: 66, temp: 15.9 },
  { depth: 50, moisture: 39, ec: 152, temp: 15.3 },
  { depth: 60, moisture: 36, ec: 420, temp: 14.7 },
])

const updateTime = '2025-05-21 18:19:33'
</script>

<style scoped>
.soil-monitor {
  background: #002c2f;
  color: #ffffff;
  padding: 12px;
  width: 360px;
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 14px;
  border-radius: 8px;
  position: fixed;
  left: 5vw;
  //bottom: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: #00ffea;
}

.header-icon {
  width: 24px;
  margin-right: 6px;
}

.close-btn {
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
}

.field-select {
  margin: 10px 0;
  width: 200px;
}

.area-btn {
  margin-left: 10px;
}

.section-title {
  margin-top: 12px;
  border-top: 1px solid #00ffea;
  padding-top: 8px;
  font-weight: bold;
  color: #00ffea;
}

.basic-info {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
}

.device-select {
  display: flex;
  gap: 8px;
  margin: 10px 0;
}

.soil-data-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}

.soil-probe {
  width: 40px;
  height: 240px;
  background: url('../gggl/device.png') no-repeat center top;
  background-size: contain;
}
.data-header {
  display: contents;
  font-weight: bold;
  color: #00ffea;
  border-bottom: 1px solid #00ffea;
  margin-bottom: 4px;
}
.soil-data-table {
  display: grid;
  grid-template-columns: 50px 60px 70px 70px;
  gap: 6px;
  background: #134141;
  padding: 8px;
  border-radius: 6px;
  flex: 1;
}

.data-rows {
  display: contents;
}

.update-time {
  font-size: 12px;
  color: #cccccc;
  text-align: center;
}
</style>
