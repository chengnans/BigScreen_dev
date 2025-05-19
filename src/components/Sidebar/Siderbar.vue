<template>
  <div class="sidebar">
    <div class="menu-list">
      <div class="menu-item"
        v-for="item in menuItems"
        :key="item.id"
        @click="handleMenuClick(item.id)"
      >
        <div class="menu-icon">
          <img :src="item.icon" :alt="item.text">
        </div>
        <span class="menu-text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data() {
    return {
      showFarmingDialog: false,
      showIrrigationDialog: false,
      menuItems: [
        { id: 1, text: '农事管理', icon: 'src/components/Sidebar/icon1.png', route: '/nsgl'},
        { id: 2, text: '灌溉管理', icon: 'src/components/Sidebar/icon2.png', route: '/gggl'},
        { id: 3, text: '施肥管理', icon: 'src/components/Sidebar/icon3.png', route: '/sfgl'},
        { id: 4, text: '小气候监测', icon: 'src/components/Sidebar/icon4.png', route: '/xqhjc'},
        { id: 5, text: '基础管理', icon: 'src/components/Sidebar/icon5.png', route: '/jcmx'},
        { id: 6, text: '土壤监测', icon: 'src/components/Sidebar/icon6.png' },
        { id: 7, text: '生育期管理', icon: 'src/components/Sidebar/icon7.png' },
        { id: 8, text: '病虫害监测', icon: 'src/components/Sidebar/icon8.png' },
        { id: 9, text: '灾害预警', icon: 'src/components/Sidebar/icon3.png' },
        { id: 10, text: '产品与品质预测', icon: 'src/components/Sidebar/icon9.png' },
        { id: 11, text: '溯源档案', icon: 'src/components/Sidebar/icon3.png' }
      ]
    }
  },
  methods: {
    handleMenuClick(id) {
      // if (id === 1) {
      //   this.showFarmingDialog = true
      // } else if (id === 2) {
      //   this.showIrrigationDialog = true
      // }
      // // 后续可以添加其他菜单项的处理逻辑


      // router 跳转实现
      const item = this.menuItems.find(item => item.id === id)
      if (item && item.route) {
        this.$router.push(item.route)
      }
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 80px;
  height: 100vh;
  background-color: rgb(15, 45, 62);
  overflow: hidden;
}

.menu-list {
  height: 100%;
  padding: 60px 0 20px;
  overflow-y: auto;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
}

.menu-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
}

.menu-icon img {
  width: 100%;
  height: 100%;
  filter: brightness(0) invert(0.7);
}

.menu-text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
}

.menu-item:hover {
  background-color: rgba(0, 255, 255, 0.1);
}

.menu-item:hover .menu-icon img {
  filter: brightness(0) invert(1);
}

.menu-item:hover .menu-text {
  color: #fff;
}

/* 自定义滚动条样式 */
.menu-list::-webkit-scrollbar {
  width: 4px;
}

.menu-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

.menu-list::-webkit-scrollbar-track {
  background: transparent;
}
</style>
