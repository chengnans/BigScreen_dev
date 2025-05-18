<template>
  <div class="container">
    <!-- 当前生育时期氯磷钾用量图 -->
    <section class="section">
      <div class="header">
        <img src="../gggl/icon.png" class="icon" />
        <span class="title">当前生育时期氯磷钾用量图</span>
        <span class="corner-text">kg/亩</span>
      </div>
      <div class="empty">
        <img src="../gggl/empty-box.png" class="empty-img" />
        <div class="empty-text">暂无数据</div>
      </div>
    </section>

    <!-- 氯磷钾用量记录 -->
    <section class="section">
      <div class="header">
        <img src="../gggl/icon.png" class="icon" />
        <span class="title">氯磷钾用量记录</span>
      </div>
      <div class="dropdown">
        <label class="dropdown-label">轮次/茬口：</label>
        <select class="dropdown-select">
          <option>暂无数据演示</option>
        </select>
      </div>
      <div class="empty">
        <img src="../gggl/empty-box.png" class="empty-img" />
        <div class="empty-text">暂无数据</div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 无特殊逻辑，此处可空
</script>

<style scoped>
.container {
  background-color: #003c3c;
  min-height: 80vh;
  width: 20vw;
  color: white;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  box-sizing: border-box;

  position: fixed; /* 或者使用 absolute */
  bottom: 50px;
  right: 3px;
  //background-color: rgba(0, 0, 0, 0);
  //border: 1px solid #d3d3d3;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000; /* 确保它位于其他内容之上 */
}

.section {
  margin-bottom: 40px;
}

.header {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #0bd4c1;
  padding-bottom: 8px;
  position: relative;
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.corner-text {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  color: #ccc;
  font-style: italic;
}

.empty {
  text-align: center;
  margin-top: 40px;
}

.empty-img {
  width: 120px;
  margin-bottom: 8px;
}

.empty-text {
  font-size: 16px;
  color: #ccc;
}

.dropdown {
  margin-top: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.dropdown-label {
  font-size: 14px;
  margin-right: 8px;
}

.dropdown-select {
  background-color: #003c3c;
  border: 1px solid #aaa;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  appearance: none;
}
</style>
