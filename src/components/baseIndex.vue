<template>
  <div class="base-list-container">
    <div class="header">
      <span class="arrow">&gt;&gt;&gt;&gt;&gt;</span>
      <h2>基地列表</h2>
      <h4>（点击可快速导航）</h4>
      <button class="close-btn" @click="$emit('close')">关闭</button>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="请输入" v-model="searchTerm" />
      <button @click="search">搜 索</button>
      &nbsp;
      <button @click="reset">重 置</button>
    </div>
    <div class="base-item" v-for="base in bases" :key="base.name">
      <div class="base-name">{{ base.name }}</div>
      <div class="base-details">
        <div>种植：{{ base.crops }}&emsp;&emsp;设备数量：{{ base.equipmentCount }}&emsp;&emsp;面积：{{ base.area }}亩</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseList",
  data() {
    return {
      searchTerm: "",
      bases: [
        {
          name: "大河岔村基地",
          crops: "无",
          equipmentCount: 44,
          area: "422.81"
        }
      ]
    };
  },
  methods: {
    search() {
      console.log("Search triggered");
    },
    reset() {
      console.log("Reset triggered");
    }
  }
};
</script>

<style scoped>
.base-list-container {
  position: fixed; /* 固定位置，悬浮于地图之上 */
  top: 80px;
  left: 0px;
  width: 400px;
  height: 600px;
  background-color: #2c3e50;
  border-radius: 8px;
  color: white;
  z-index: 9999; /* 确保高于地图 */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #34495e;
    border-bottom: 1px solid #2ecc71;
  }

  .arrow {
    font-size: 18px;
    color: #2ecc71;
  }

  .close-btn {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .search-bar {
    display: flex;
    padding: 10px;
  }

  .search-bar input {
    flex: 1;
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #34495e;
    background-color: #34495e;
    color: white;
  }

  .search-bar button {
    background-color: #64e8e7;
    border: none;
    color: black;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 3px;
  }

  .base-item {
    padding: 10px;
    border-bottom: 1px solid #34495e;
  }
}
</style>
