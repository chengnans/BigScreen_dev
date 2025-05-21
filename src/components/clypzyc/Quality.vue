<template>
  <div class="disaster-warning-container">
    <header class="dw-header">
      <div class="dw-title-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="title-logo-icon">
          <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-5h16V6H4v2z"/> <!-- Simple placeholder icon -->
        </svg>
        <span>产量与品质预测</span>
      </div>
      <button class="dw-close-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </header>

    <section class="dw-filters-row">
      <div class="dw-dropdown-display">
        <span>实验地(休耕/休眠期)</span>
        <span class="dw-arrow-down">▼</span>
      </div>
      <button class="dw-action-btn">灌区详情</button>
    </section>

<!--    <section class="dw-filters-row">-->
<!--      <div class="dw-dropdown-display">-->
<!--        <span>全部灾害类型</span>-->
<!--        <span class="dw-arrow-down">▼</span>-->
<!--      </div>-->
<!--      <div class="dw-dropdown-display">-->
<!--        <span>全部发生概率</span>-->
<!--        <span class="dw-arrow-down">▼</span>-->
<!--      </div>-->
<!--    </section>-->

    <section class="dw-table-section">
      <header class="dw-section-header">
        <div class="dw-title-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#00f0ff" class="dw-diamond-icon">
            <path d="M12 2L2 12l10 10 10-10L12 2zm0 16.59L5.41 12 12 5.41 18.59 12 12 18.59z"/>
          </svg>
          <span>作物品质模型</span>
        </div>
      </header>
      <div class="dw-title-divider"></div>

      <table class="dw-table">
        <thead>
        <tr>
          <th>生育时期</th>
          <th>品质模型指标</th>
          <th>评价等级</th>
        </tr>
        </thead>
        <tbody>
<!--        <tr v-if="paginatedDisasters.length === 0">-->
<!--          <td colspan="4" class="dw-no-data">暂无数据</td>-->
<!--        </tr>-->
<!--        <tr v-for="disaster in paginatedDisasters" :key="disaster.rank">-->
<!--          <td>{{ disaster.rank }}</td>-->
<!--          <td><a href="#" @click.prevent class="dw-disaster-name">{{ disaster.name }}</a></td>-->
<!--          <td>{{ disaster.type }}</td>-->
<!--          <td>{{ disaster.probability }}</td>-->
<!--        </tr>-->
        </tbody>
      </table>
      <img src="../gggl/empty-box.png" class="empty-img" />
<!--      <div class="dw-pagination" v-if="totalPages > 0">-->
<!--        <span class="dw-page-info">{{ currentPage }}/{{ totalPages }}</span>-->
<!--        <button @click="prevPage" :disabled="currentPage === 1" class="dw-page-btn">&lt;</button>-->
<!--        <button-->
<!--            v-for="pageNumber in pageButtons"-->
<!--            :key="pageNumber"-->
<!--            @click="goToPage(pageNumber)"-->
<!--            :class="['dw-page-btn', { active: currentPage === pageNumber }]"-->
<!--        >-->
<!--          {{ pageNumber }}-->
<!--        </button>-->
<!--        <button @click="nextPage" :disabled="currentPage === totalPages" class="dw-page-btn">&gt;</button>-->
<!--        <span class="dw-jump-text">跳转至</span>-->
<!--        <input type="number" v-model.number="jumpPageInput" @keyup.enter="jumpToPage" class="dw-jump-input" min="1" :max="totalPages" />-->
<!--        <span class="dw-jump-text">页</span>-->
<!--      </div>-->
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const allDisasters = ref([
  { rank: 1, name: '小满寒', type: '气象灾害'},
  { rank: 2, name: '冷害', type: '气象灾害' },
]);

// const currentPage = ref(1);
// const itemsPerPage = ref(10); // As per image, 10 items per page
// const jumpPageInput = ref(null);
//
// const totalPages = computed(() => {
//   return Math.ceil(allDisasters.value.length / itemsPerPage.value);
// });
//
// const paginatedDisasters = computed(() => {
//   const start = (currentPage.value - 1) * itemsPerPage.value;
//   const end = start + itemsPerPage.value;
//   return allDisasters.value.slice(start, end);
// });

// Generate page buttons to display (e.g., 1, 2 in the image)
// const pageButtons = computed(() => {
//   const buttons = [];
//   // For simplicity, showing fixed number of buttons like in image
//   // A more complex logic would be needed for many pages (e.g., with ellipses)
//   if (totalPages.value <= 2) {
//     for (let i = 1; i <= totalPages.value; i++) {
//       buttons.push(i);
//     }
//   } else {
//     // Example: if current page is 1, show 1, 2. If current page is 2, show 1, 2.
//     // If current page is 3, show 2, 3 (if totalPages allows)
//     // This logic needs to be adapted if more than 2 buttons are desired.
//     // Based on image, it seems to show up to 2 page numbers.
//     if (currentPage.value === 1 && totalPages.value > 0) {
//       buttons.push(1);
//       if (totalPages.value >=2) buttons.push(2);
//     } else if (currentPage.value > 1) {
//       buttons.push(currentPage.value -1);
//       buttons.push(currentPage.value);
//       if (currentPage.value + 1 <= totalPages.value && buttons.length < 2) { // Ensure we don't add too many
//         buttons.splice(0,0, currentPage.value-1); // if current is last, show prev, current
//         if(buttons.length < 2 && currentPage.value -2 >=1) buttons.splice(0,0, currentPage.value-2)
//       } else if (currentPage.value === totalPages.value && totalPages.value > 1) {
//         buttons.splice(0,1, currentPage.value-1); // show prev, current
//       }
//     }
//     // Ensure unique and sorted, and not more than 2 for this specific UI
//     let uniqueButtons = [...new Set(buttons.filter(b => b > 0 && b <= totalPages.value))].sort((a,b) => a-b);
//     if (uniqueButtons.length > 2) {
//       if (uniqueButtons.includes(currentPage.value)) {
//         const currentIndex = uniqueButtons.indexOf(currentPage.value);
//         if (currentIndex === 0) uniqueButtons = uniqueButtons.slice(0,2);
//         else uniqueButtons = uniqueButtons.slice(currentIndex -1, currentIndex +1);
//       } else {
//         uniqueButtons = uniqueButtons.slice(0,2);
//       }
//     }
//     return uniqueButtons;
//
//   }
//   // Simplified logic for the image's case (max 2 buttons shown)
//   if (totalPages.value === 0) return [];
//   if (totalPages.value === 1) return [1];
//   if (currentPage.value === 1) return [1, 2].filter(p => p <= totalPages.value);
//   if (currentPage.value === totalPages.value) return [totalPages.value -1, totalPages.value].filter(p => p > 0);
//   return [currentPage.value -1, currentPage.value, currentPage.value +1 ].filter(p => p > 0 && p <= totalPages.value).slice(0,2); // this is still not perfect for all cases, but tries to match the image
// });
//
//
// function nextPage() {
//   if (currentPage.value < totalPages.value) {
//     currentPage.value++;
//     jumpPageInput.value = null;
//   }
// }
//
// function prevPage() {
//   if (currentPage.value > 1) {
//     currentPage.value--;
//     jumpPageInput.value = null;
//   }
// }
//
// function goToPage(pageNumber) {
//   if (pageNumber >= 1 && pageNumber <= totalPages.value) {
//     currentPage.value = pageNumber;
//     jumpPageInput.value = null;
//   }
// }
//
// function jumpToPage() {
//   const page = parseInt(jumpPageInput.value);
//   if (!isNaN(page) && page >= 1 && page <= totalPages.value) {
//     currentPage.value = page;
//   }
//   jumpPageInput.value = null; // Clear input after attempt
// }

</script>

<style scoped>
.disaster-warning-container {
  width: 360px; /* Approximate width */
  background-color: #0b1a25;
  color: #c0d0d8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid #1c2f3e;
  overflow: hidden;

  position: fixed; /* 或者使用 absolute */
  bottom: 150px;
  left: 80px;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  //padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.dw-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #112232;
  border-bottom: 2px solid #00f0ff; /* Teal bottom border for header */
}

.dw-title-icon {
  display: flex;
  align-items: center;
  color: #00f0ff;
  font-weight: bold;
  font-size: 18px;
}

.title-logo-icon {
  margin-right: 8px;
}

.dw-close-btn {
  background: none;
  border: none;
  color: #00f0ff;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  background-color: #1c3a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.dw-close-btn svg {
  width: 14px;
  height: 14px;
}
.dw-close-btn:hover {
  background-color: #2a5063;
}

.dw-filters-row {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #102533;
  gap: 10px;
  border-bottom: 1px solid #0b1a25; /* Separator if multiple filter rows */
}
.dw-filters-row:last-of-type { /* Assuming this is the last filter row before table section */
  border-bottom: none;
}


.dw-dropdown-display {
  background-color: #091f2c;
  border: 1px solid #1c3a4a;
  color: #c0d0d8;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1; /* Allow dropdowns to take space */
}
.dw-dropdown-display:hover {
  border-color: #00f0ff;
}

.dw-arrow-down {
  margin-left: 8px;
  font-size: 10px;
  color: #607888;
}

.dw-action-btn {
  background-color: #00a0b0;
  color: white;
  border: none;
  padding: 7px 15px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
}
.dw-action-btn:hover {
  background-color: #00c0d0;
}

.dw-table-section {
  padding: 10px 15px 15px 15px;
  background-color: #0a1822;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.dw-section-header {
  display: flex;
  justify-content: space-between; /* This might not be needed if no close button here */
  align-items: center;
}

.dw-diamond-icon {
  margin-right: 8px;
}

.dw-title-divider {
  height: 1px;
  background-color: #1c3a4a;
  margin-top: 8px;
  margin-bottom: 10px;
}

.dw-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.dw-table th, .dw-table td {
  padding: 8px 6px; /* Reduced padding slightly */
  text-align: left;
  border-bottom: 1px solid #15303d; /* Line between rows */
}

.dw-table thead {
  background-color: #005f6b; /* Teal background for header */
  color: #e0f0f8;
}
.dw-table thead th {
  border-bottom: none; /* Header bottom border handled by its background */
}


.dw-table tbody tr:hover {
  background-color: #102c36;
}

.dw-table td:first-child { /* Rank column */
  text-align: center;
  color: #8a9faa;
}

.dw-disaster-name {
  color: #00f0ff;
  text-decoration: underline;
  cursor: pointer;
}
.dw-disaster-name:hover {
  color: #50ffff;
}

.dw-no-data td {
  text-align: center;
  color: #708898;
  padding: 20px;
}

.dw-pagination {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align to the right as per image */
  font-size: 13px;
  color: #8a9faa;
  gap: 5px; /* Spacing between pagination elements */
}

.dw-page-info {
  margin-right: 10px;
}

.dw-page-btn {
  background-color: #005f6b; /* Teal for buttons */
  color: #e0f0f8;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  min-width: 30px; /* Ensure consistent button size */
  text-align: center;
}
.dw-page-btn:hover:not(:disabled) {
  background-color: #007c8a;
}
.dw-page-btn:disabled {
  background-color: #102c36;
  color: #506878;
  cursor: not-allowed;
}
.dw-page-btn.active {
  background-color: #00a0b0; /* Brighter teal for active page */
  color: white;
  font-weight: bold;
}

.dw-jump-text {
  margin-left: 5px;
}

.dw-jump-input {
  width: 40px;
  padding: 5px;
  text-align: center;
  background-color: #091f2c;
  border: 1px solid #1c3a4a;
  color: #c0d0d8;
  border-radius: 4px;
  margin: 0 3px;
  -moz-appearance: textfield; /* Firefox */
}
.dw-jump-input::-webkit-outer-spin-button,
.dw-jump-input::-webkit-inner-spin-button {
  -webkit-appearance: none; /* Chrome, Safari, Edge, Opera */
  margin: 0;
}

</style>