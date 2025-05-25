<template>
  <div class="element-monitor">
    <!-- 主要元素数据 -->
    <div class="section">
      <div class="section-header">
        <img src="../gggl/icon.png" class="section-icon" />
        <span>主要元素数据</span>
        <span class="section-time">时间：--</span>
      </div>
      <table class="element-table">
        <thead>
        <tr>
          <th>项目</th>
          <th>测定值</th>
          <th>状态</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in mainElements" :key="item.name" >
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.status }}</td>
        </tr>
        </tbody>
      </table>
      <div class="advice">建议：{{ mainAdvice }}</div>
    </div>

    <!-- 重金属元素数据 -->
    <div class="section">
      <div class="section-header">
        <img src="../gggl/icon.png" class="section-icon" />
        <span>重金属元素数据</span>
      </div>
      <table class="element-table">
        <thead>
        <tr>
          <th>项目</th>
          <th>测定值</th>
          <th>状态</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in heavyMetals" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.status }}</td>
        </tr>
        </tbody>
      </table>
      <div class="advice">建议：{{ heavyMetalAdvice }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mainElements = ref([
  { name: '氮', value: '--', status: '--' },
  { name: '磷', value: '--', status: '--' },
  { name: '钾', value: '--', status: '--' },
  { name: '有机质', value: '--', status: '--' }
])

const heavyMetals = ref([
  { name: '镉', value: '--', status: '--' },
  { name: '汞', value: '--', status: '--' },
  { name: '砷', value: '--', status: '--' },
  { name: '铜', value: '--', status: '--' },
  { name: '铅', value: '--', status: '--' },
  { name: '铬', value: '--', status: '--' },
  { name: '锌', value: '--', status: '--' },
  { name: '镍', value: '--', status: '--' }
])

const mainAdvice = '补充氮肥15公斤/亩，磷肥（五氧化二磷）7公斤/亩'
const heavyMetalAdvice = '补充钾（氧化钾）11公斤/亩，硫肥2.3公斤/亩，锌肥0.5公斤/亩'
</script>

<style scoped>
.element-monitor {
  background: #002c2f;
  color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 14px;
  width: 360px;

  position: fixed; /* 或者使用 absolute */
  //bottom: 50px;
  right: 0.2vw;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.section {
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #00ffea;
  font-size: 16px;
  margin-bottom: 8px;
  position: relative;
}

.section-icon {
  width: 20px;
  margin-right: 6px;
}

.section-time {
  position: absolute;
  right: 0;
  font-size: 12px;
}

.element-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  background: #134141;
  border-radius: 6px;
  overflow: hidden;
}

.element-table th,
.element-table td {
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #0e3a3a;
}

.element-table th {
  background-color: #007a7a;
  color: white;
}
/* 悬停高亮 */
.element-table tbody tr:hover {
  background-color: #016666;
  cursor: pointer;
}

.advice {
  margin-top: 6px;
  color: #ffcc00;
  font-size: 13px;
}
</style>
