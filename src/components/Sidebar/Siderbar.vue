<template>
  <div class="sidebar">
    <div class="menu-item" v-for="item in menuItems" :key="item.text">
      <img :src="item.icon" alt="icon" class="menu-icon" />
      <span class="menu-text">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: "农事管理", icon: "src/components/Sidebar/icon1.png" },
        { text: "灌溉管理", icon: "src/components/Sidebar/icon2.png" },
        { text: "施肥管理", icon: "path/to/icon3.png" },
        { text: "小气候监测", icon: "path/to/icon4.png" },
        { text: "基地管理", icon: "path/to/icon5.png" },
        { text: "土壤监测", icon: "path/to/icon6.png" },
        { text: "生育期管理", icon: "path/to/icon7.png" },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 150px;
  height: 100%;
  background-color: #0f2d3e;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  box-sizing: border-box;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #1c3b50;
}

.menu-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.menu-text {
  font-size: 14px;
  color: #ffffff;
}
</style>
