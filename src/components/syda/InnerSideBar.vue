<template>
  <div class="container">
    <!-- 左侧菜单栏 -->
    <div class="left-panel">
      <div
          v-for="tab in tabs"
          :key="tab.id"
          @click="selectTab(tab.id)"
          class="menu-item"
          :class="{ active: selectedTab === tab.id }"
      >
        {{ tab.title }}
      </div>
    </div>

    <!-- 右侧弹窗内容 -->
    <div class="right-panel">
      <div v-if="selectedTab === 'productInfo'" class="popup-content">
        <h2>产品信息</h2>
        <p>这里是产品信息的详细内容。</p>
      </div>
      <div v-if="selectedTab === 'baseInfo'" class="popup-content">
        <h2>基地信息</h2>
        <p>这里是基地信息的详细内容。</p>
      </div>
      <div v-if="selectedTab === 'plantingRecord'" class="popup-content">
        <h2>种植记录</h2>
        <p>这里是种植记录的详细内容。</p>
      </div>
      <div v-if="selectedTab === 'processingRecord'" class="popup-content">
        <h2>加工记录</h2>
        <p>这里是加工记录的详细内容。</p>
      </div>
      <div v-if="selectedTab === 'salesRecord'" class="popup-content">
        <h2>销售记录</h2>
        <p>这里是销售记录的详细内容。</p>
      </div>
      <div v-if="selectedTab === 'queryRecord'" class="popup-content">
        <h2>查询记录</h2>
        <p>这里是查询记录的详细内容。</p>
      </div>
      <div v-if="selectedTab === 'producer'" class="popup-content">
        <h2>生产主体</h2>
        <p>这里是生产主体的详细内容。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'productInfo',
      tabs: [
        { id: 'productInfo', title: '产品信息' },
        { id: 'baseInfo', title: '基地信息' },
        { id: 'plantingRecord', title: '种植记录' },
        { id: 'processingRecord', title: '加工记录' },
        { id: 'salesRecord', title: '销售记录' },
        { id: 'queryRecord', title: '查询记录' },
        { id: 'producer', title: '生产主体' }
      ]
    };
  },
  methods: {
    selectTab(id) {
      this.selectedTab = id;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;

  position: fixed; /* 或者使用 absolute */
  top: 30px;
  left: 80px;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  padding: 20px;
  //box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.left-panel {
  width: 200px;
  background-color: rgba(0, 0, 0, 0);
  padding: 10px;
}

.menu-item {
  padding: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: #00796b;
  color: white;
  border-radius: 5px;
}

.menu-item.active {
  background-color: #0e3c40;
}

.right-panel {
  flex: 1;
  padding: 20px;
  background-color: #336666;
  color: white;
}

.popup-content {
  padding: 20px;
  background-color: #00796b;
  border-radius: 10px;
}
</style>