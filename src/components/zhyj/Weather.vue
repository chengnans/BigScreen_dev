<template>
  <div class="weather-widget">
    <div class="widget-title">
      <div class="widget-title-icon"></div>
      每小时实时气象
    </div>
    <div class="title-underline"></div>

    <div class="hourly-forecast-container">
      <button class="nav-arrow" @click="scrollHourly(-1)" :disabled="hourlyScrollIndex <= 0">&lt;</button>
      <div class="hourly-cards-wrapper" ref="hourlyCardsWrapperRef">
        <div class="hourly-cards" :style="{ transform: `translateX(-${hourlyScrollIndex * scrollStep}px)` }">
          <div v-for="hour in hourly" :key="hour.time + hour.date" class="hour-card">
            <div class="icon">{{ hour.icon }}</div>
            <div class="temp">{{ hour.temp }}°</div>
            <div class="humidity">💧 {{ hour.humidity }}%</div>
            <div class="time-date">
              <span>{{ hour.date.substring(5) }}</span>
              <span>{{ hour.time }}</span>
            </div>
          </div>
        </div>
      </div>
      <button class="nav-arrow" @click="scrollHourly(1)" :disabled="hourlyScrollIndex >= maxScrollIndex">&gt;</button>
    </div>

    <p class="precipitation-summary">
      【降水量每日概要】未来24小时降水量预计{{ precipitationSummary.next24h }}mm, 今日降水量为{{ precipitationSummary.today }}mm。
    </p>

    <div class="forecast-period-buttons">
      <button
          v-for="period in forecastPeriods"
          :key="period.id"
          :class="{ active: activePeriod === period.id }"
          @click="setActivePeriod(period.id)">
        {{ period.text }}
      </button>
    </div>

    <div class="daily-forecast-list">
      <div v-for="day in displayedDailyForecast" :key="day.date" class="day-forecast-card">
        <div class="day-info">
          <div class="day-name">{{ day.dayName }}</div>
          <div class="date">{{ day.date }}</div>
        </div>
        <div class="weather-details">
          <div class="humidity">湿度: {{ day.humidity }}%</div>
          <div class="temp-range">{{ day.tempLow }}° ~ {{ day.tempHigh }}°</div>
          <div class="precipitation">【降水强度】降水总量{{ day.precipitation }}mm</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from 'vue';

// --- 数据定义 ---
const hourly = reactive([
  { icon: '🌙', temp: 25, humidity: 61, date: '2025-05-21', time: '20:00' },
  { icon: '🌙', temp: 22, humidity: 77, date: '2025-05-21', time: '21:00' },
  { icon: '🌙', temp: 22, humidity: 77, date: '2025-05-21', time: '22:00' },
  { icon: '🌙', temp: 22, humidity: 79, date: '2025-05-21', time: '23:00' },
  // 可以添加更多小时数据以测试滚动
  { icon: '☀️', temp: 26, humidity: 55, date: '2025-05-22', time: '00:00' },
  { icon: '☀️', temp: 27, humidity: 50, date: '2025-05-22', time: '01:00' },
]);

const precipitationSummary = reactive({
  next24h: '0.0',
  today: '0.0'
});

const forecastPeriods = reactive([
  { id: '3day', text: '3日天气预报', days: 3 },
  { id: '7day', text: '7日天气预报', days: 7 },
  { id: '15day', text: '15日天气预报', days: 15 }
]);

const activePeriod = ref('3day'); // 默认激活3日

const allDailyForecasts = reactive([ // 存储所有可能的每日预报数据
  { dayName: '今天', date: '2025-05-21', humidity: 62, tempLow: 19, tempHigh: 31, precipitation: '0.0' },
  { dayName: '星期四', date: '2025-05-22', humidity: 43, tempLow: 14, tempHigh: 26, precipitation: '3.0' },
  { dayName: '星期五', date: '2025-05-23', humidity: 42, tempLow: 14, tempHigh: 21, precipitation: '0.0' },
  { dayName: '星期六', date: '2025-05-24', humidity: 45, tempLow: 15, tempHigh: 23, precipitation: '0.0' },
  { dayName: '星期日', date: '2025-05-25', humidity: 50, tempLow: 16, tempHigh: 24, precipitation: '1.0' },
  { dayName: '星期一', date: '2025-05-26', humidity: 55, tempLow: 17, tempHigh: 25, precipitation: '0.5' },
  { dayName: '星期二', date: '2025-05-27', humidity: 60, tempLow: 18, tempHigh: 26, precipitation: '0.0' },
  // ...可以添加更多数据以支持7天和15天预报
]);

// --- 小时预报滚动逻辑 ---
const hourlyScrollIndex = ref(0);
const hourlyCardsWrapperRef = ref(null); // 用于获取容器宽度
const cardWidthPlusGap = ref(75); // 单个卡片宽度 (65px) + 间隙 (10px)
const cardsToShow = ref(4); // 容器内同时显示多少个卡片
const scrollStep = computed(() => cardWidthPlusGap.value); // 每次滚动的距离

const maxScrollIndex = computed(() => {
  const totalCards = hourly.length;
  if (totalCards <= cardsToShow.value) return 0;
  return totalCards - cardsToShow.value;
});

function scrollHourly(direction) {
  const newIndex = hourlyScrollIndex.value + direction;
  if (newIndex >= 0 && newIndex <= maxScrollIndex.value) {
    hourlyScrollIndex.value = newIndex;
  }
}

// --- 每日预报显示逻辑 ---
const displayedDailyForecast = computed(() => {
  const period = forecastPeriods.find(p => p.id === activePeriod.value);
  const daysToShow = period ? period.days : 3;
  return allDailyForecasts.slice(0, daysToShow);
});

function setActivePeriod(periodId) {
  activePeriod.value = periodId;
  // 在真实应用中，如果数据不足，这里可能需要异步获取更多数据
}

// --- 动态计算小时卡片相关尺寸 ---
onMounted(async () => {
  await nextTick(); // 等待DOM渲染完成
  if (hourlyCardsWrapperRef.value) {
    const wrapperWidth = hourlyCardsWrapperRef.value.offsetWidth;
    const firstCard = hourlyCardsWrapperRef.value.querySelector('.hour-card');
    if (firstCard) {
      const cardStyle = window.getComputedStyle(firstCard);
      const cardMarginRight = parseFloat(cardStyle.marginRight) || 10; // 10px是gap
      const actualCardWidth = firstCard.offsetWidth;
      cardWidthPlusGap.value = actualCardWidth + cardMarginRight;
      cardsToShow.value = Math.floor(wrapperWidth / cardWidthPlusGap.value);
    }
  }
});

</script>

<style scoped>
/* 样式与之前HTML版本中的 <style> 标签内容基本一致， */
/* 这里为了简洁省略，请将之前提供的CSS复制到这里。 */
/* 确保将所有选择器保持原样，scoped 会自动处理作用域。 */

body { /* 这个可以移除，因为SFC通常嵌入到更大的应用中 */
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
  /* background-color: #f0f2f5; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: flex-start; */
  /* min-height: 100vh; */
  /* margin: 0; */
  /* padding: 20px; */
  /* box-sizing: border-box; */
}

.weather-widget {
  background-color: #0e3c40; /* Dark teal background */
  color: #e0f2f1; /* Light text color */
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 380px; /* Approximate width from image */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  margin: 20px auto; /* For centering if used standalone on a page */

  position: fixed; /* 或者使用 absolute */
  //bottom: 10px;
  right: 0.2vw;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  //padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.widget-title {
  display: flex;
  align-items: center;
  font-size: 1.5em; /* Approx 24px */
  font-weight: bold;
  margin-bottom: 5px;
}

.widget-title-icon {
  width: 28px; /* Approximate size */
  height: 28px;
  margin-right: 8px;
  background: linear-gradient(135deg, #4db6ac 25%, #00796b 25%, #00796b 50%, #4db6ac 50%, #4db6ac 75%, #00796b 75%, #00796b 100%);
  background-size: 14px 14px; /* Adjust for finer pattern */
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.title-underline {
  height: 3px;
  background: linear-gradient(to right, #4db6ac, #0e3c40); /* Gradient green to transparent (bg color) */
  width: 60px; /* Approximate width */
  margin-bottom: 15px;
}

.hourly-forecast-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.nav-arrow {
  background: none;
  border: none;
  color: #b2dfdb;
  font-size: 1.8em;
  cursor: pointer;
  padding: 0 5px;
  flex-shrink: 0; /* 防止箭头被压缩 */
}
.nav-arrow:hover:not(:disabled) {
  color: #ffffff;
}
.nav-arrow:disabled {
  color: #547875; /* 暗色表示禁用 */
  cursor: not-allowed;
}

.hourly-cards-wrapper {
  flex-grow: 1;
  overflow: hidden; /* 关键：隐藏超出容器的部分 */
  margin: 0 5px;
}

.hourly-cards {
  display: flex;
  /* gap: 10px; */ /* gap 由卡片 margin-right 控制，以便精确计算滚动 */
  transition: transform 0.3s ease-in-out; /* 平滑滚动效果 */
  padding-bottom: 5px; /* 如果有滚动条，给一点空间 */
}

.hour-card {
  background-color: #1a5156; /* Slightly lighter teal for cards */
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  min-width: 65px; /* 确保卡片有一定宽度 */
  flex-shrink: 0; /* 防止卡片被压缩 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  margin-right: 10px; /* 卡片之间的间隙 */
}
.hour-card:last-child {
  margin-right: 0; /* 最后一个卡片不需要右边距 */
}


.hour-card .icon {
  font-size: 1.8em; /* Larger icon */
  margin-bottom: 5px;
}
.hour-card .temp {
  font-size: 1.3em; /* Larger temperature */
  font-weight: bold;
  margin-bottom: 5px;
}
.hour-card .humidity, .hour-card .time-date {
  font-size: 0.85em;
  color: #b2dfdb; /* Lighter color for secondary info */
}
.hour-card .humidity {
  margin-bottom: 5px;
}
.hour-card .time-date span {
  display: block;
}


.precipitation-summary {
  font-size: 0.9em;
  color: #b2dfdb;
  margin-bottom: 15px;
  padding: 8px;
  background-color: #1a5156;
  border-radius: 6px;
  text-align: center;
}

.forecast-period-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.forecast-period-buttons button {
  background-color: #00796b; /* Green button color */
  color: white;
  border: none;
  padding: 10px 0; /* Vertical padding, horizontal will be flex-grow */
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  flex-grow: 1; /* Make buttons take equal width */
  margin: 0 3px; /* Small gap between buttons */
  transition: background-color 0.3s;
  /* 模拟斜角按钮的 clip-path 示例 (可能需要浏览器前缀) */
  /* clip-path: polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%); */
}
.forecast-period-buttons button:first-child { margin-left: 0; }
.forecast-period-buttons button:last-child { margin-right: 0; }


.forecast-period-buttons button.active {
  background-color: #004d40; /* Darker green for active */
  font-weight: bold;
}
.forecast-period-buttons button:hover:not(.active) {
  background-color: #009688; /* Lighter green on hover */
}

.daily-forecast-list .day-forecast-card {
  background-color: #1a5156; /* Card background */
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.daily-forecast-list .day-forecast-card:last-child {
  margin-bottom: 0;
}

.day-info .day-name {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 3px;
}
.day-info .date {
  font-size: 0.85em;
  color: #b2dfdb;
}

.weather-details {
  text-align: right;
}
.weather-details .humidity,
.weather-details .temp-range,
.weather-details .precipitation {
  font-size: 0.9em;
  margin-bottom: 3px;
}
.weather-details .precipitation {
  color: #b2dfdb;
  margin-bottom: 0;
}
.weather-details .temp-range {
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 360px) {
  .weather-widget {
    padding: 15px;
  }
  .widget-title {
    font-size: 1.3em;
  }
  .hour-card {
    min-width: 60px; /* 调整卡片最小宽度 */
    padding: 8px;
  }
  .hour-card .temp {
    font-size: 1.2em;
  }
  .forecast-period-buttons button {
    font-size: 0.8em;
    padding: 8px 0;
  }
  .daily-forecast-list .day-forecast-card {
    padding: 12px;
    flex-direction: column; /* 在非常窄的屏幕上，每日预报卡片内容堆叠 */
    align-items: flex-start;
  }
  .daily-forecast-list .day-forecast-card .weather-details {
    text-align: left;
    margin-top: 8px;
  }
  .day-info .day-name {
    font-size: 1.1em;
  }
}
</style>