<template>
  <div class=" IrrigationRecord bg-[#012524] text-white p-4 space-y-4">
    <!-- 灌溉记录 -->
    <section class="bg-[#013435] p-4 rounded">
      <h2 class="font-bold text-lg flex items-center">
        <img src="./icon.png" class="w-4 h-4 mr-2" />
        灌溉记录
      </h2>
      <div class="flex flex-col items-center justify-center mt-4">
        <img src="./empty-box.png" class="w-32 h-32" />
        <p class="text-gray-400 mt-2">暂无数据</p>
      </div>
    </section>

    <!-- 降水预报 -->
    <section class="bg-[#013435] p-4 rounded">
      <h2 class="font-bold text-lg flex items-center">
        <img src="./icon.png" class="w-4 h-4 mr-2" />
        降水预报
      </h2>
      <div class="flex justify-between items-center mt-4 text-center text-sm">
        <div v-for="(item, index) in rainForecast" :key="index" class="flex flex-col items-center">
          <img src="./no-rain.png" class="w-6 h-6 mb-1" />
          <span>{{ item.label }}</span>
          <span class="text-cyan-300">0mm</span>
        </div>
      </div>
    </section>

    <!-- 水分平衡示意图 -->
    <section class="bg-[#013435] p-4 rounded">
      <div class="flex justify-between items-center">
        <h2 class="font-bold text-lg flex items-center">
          <img src="./icon.png" class="w-4 h-4 mr-2" />
          水分平衡示意图
        </h2>
        <button class="bg-cyan-400 text-black text-xs px-3 py-1 rounded">趋势图</button>
      </div>
      <div class="flex flex-col items-center justify-center mt-4">
        <img src="./empty-plant.png" class="w-24 h-24" />
        <p class="text-gray-400 mt-2">暂无数据</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const rainForecast = [
  { label: '实时' },
  { label: '明天' },
  { label: '后天' },
  { label: '05-20' },
  { label: '05-21' }
]
</script>

<style scoped>
/* 可加入额外样式，如果不使用 Tailwind */
.IrrigationRecord {
  position: fixed;
  bottom: 5px;
  right: 10px;
  background: linear-gradient(to bottom, #00666f, #004d4d);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  font-family: 'Microsoft YaHei', sans-serif;
}
</style>
