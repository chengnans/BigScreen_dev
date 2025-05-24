<template>
  <div class="calendar">
    <div class="calendar-header">
      <button @click="prevMonth">&lt;</button>
      <span>{{ currentYear }}年{{ currentMonth }}月</span>
      <button @click="nextMonth">&gt;</button>
    </div>
    <table>
      <thead>
      <tr>
        <th v-for="day in weekDays" :key="day">{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in calendarRows" :key="index">
        <td v-for="cell in row" :key="cell.date" :class="{ 'current-day': cell.isCurrentDay }">
          <div class="date">{{ cell.day }}</div>
          <div class="lunar-date">{{ cell.lunarDay }}</div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      weekDays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      calendarRows: []
    };
  },
  mounted() {
    this.generateCalendar();
  },
  methods: {
    generateCalendar() {
      const firstDay = moment(`${this.currentYear}-${this.currentMonth}-01`).startOf('month').day();
      const daysInMonth = moment(`${this.currentYear}-${this.currentMonth}-01`).daysInMonth();
      let calendarData = [];
      let count = 1;

      for (let i = 0; i < 6; i++) { // 可以保持最大行数为6，但不一定全用
        let row = [];
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            row.push({date: '', day: '', lunarDay: ''});
          } else if (count <= daysInMonth) {
            const date = `${this.currentYear}-${this.currentMonth}-${count}`;
            const isCurrentDay = moment(date).isSame(moment(), 'day');
            row.push({
              date,
              day: count,
              lunarDay: moment(date).format('D'),
              isCurrentDay
            });
            count++;
          } else {
            break; // 如果当前月的所有天数都已添加，则跳出循环
          }
        }
        calendarData.push(row);
        if (count > daysInMonth) break; // 确保在填满本月所有日期后停止添加新行
      }

      this.calendarRows = calendarData;
    },
    prevMonth() {
      if (this.currentMonth === 1) {
        this.currentMonth = 12;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
      this.generateCalendar();
    },
    nextMonth() {
      if (this.currentMonth === 12) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
      this.generateCalendar();
    }
  }
};
</script>

<style scoped>
.calendar {
  //width: 80%;
  //margin: 0 auto;
  background-color: #005f5f;
  color: white;
  border-radius: 10px;


  position: fixed;
  //bottom: 25vh;
  left: 5vw;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-header button {
  background-color: #00bfa5;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.calendar-header span {
  font-size: 18px;
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #00bfa5;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #004d4d;
}

.date {
  font-size: 14px;
  font-weight: bold;
}

.lunar-date {
  font-size: 12px;
  color: #ffffff;
}

.current-day {
  background-color: #00a157;
}
</style>
