<template>
  <div class="container">
    <div class="header">
      <span class="title">种植方案</span>
      <button class="close-btn">×</button>
    </div>

    <button class="year-plan-btn">全年方案图</button>

    <section class="custom-process">
      <h3>种植方案定制流程</h3>
      <div class="steps">
        <div class="step">选择种植方案</div>
        <div class="step">选择播种日期/应用灌区</div>
        <div class="step">生成全年农事计划</div>
        <div class="step">完成</div>
      </div>
      <div class="info">您当前基地暂无未设置种植作物信息</div>
    </section>

    <section class="recommended-plan">
      <h3>我们猜测您需要以下方案</h3>
      <div class="plan">
        <div class="plan-title">青岛夏玉米高产创建技术方案</div>
        <div class="plan-yield">800kg/亩</div>
        <button class="custom-btn">定制</button>
      </div>
      <div class="plan">
        <div class="plan-title">青岛冬小麦种植方案</div>
        <div class="plan-yield">--kg/亩</div>
        <button class="custom-btn">定制</button>
      </div>
    </section>

    <section class="plan-records">
      <h3>种植方案生成记录</h3>
      <table class="record-table">
        <thead>
        <tr>
          <th>生成时间</th>
          <th>作物</th>
          <th>播种时间</th>
          <th>目标产量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2024/10/09</td>
          <td>夏玉米</td>
          <td>06月13日</td>
          <td>800kg/亩</td>
          <td>
            <span class="icon">🔍</span>
            <span class="icon">📥</span>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button class="page-btn">&lt;</button>
        <span class="page-num">1</span>
        <button class="page-btn">&gt;</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PlantingPlanComponent'
};
</script>

<style scoped>
.container {
  background: linear-gradient(to bottom right, #0f6f79, #032c30);
  color: white;
  padding: 16px;
  font-family: sans-serif;
  border-radius: 8px;
  width: 350px;

  position: fixed;
  bottom: 50px;
  right: 3px;
  z-index: 1000; /* 确保它位于其他内容之上 */
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
.close-btn {
  background: none;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.year-plan-btn {
  background: #4ef6f6;
  color: #000;
  padding: 6px;
  border-radius: 8px;
  border: none;
  margin: 10px 0;
  cursor: pointer;
  width: 100%;
}
.custom-process {
  margin: 10px 0;
}
.steps {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 8px 0;
}
.step {
  background: #114c4f;
  padding: 6px;
  border-radius: 4px;
  text-align: center;
}
.info {
  background: #003a3d;
  padding: 10px;
  border-radius: 4px;
}
.recommended-plan .plan {
  background: #005659;
  padding: 10px;
  margin: 6px 0;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.plan-title {
  flex: 1;
}
.plan-yield {
  color: #4ef6f6;
  margin: 0 10px;
}
.custom-btn {
  background: #4ef6f6;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
}
.plan-records {
  margin-top: 10px;
}
.record-table {
  width: 100%;
  border-collapse: collapse;
}
.record-table th, .record-table td {
  padding: 6px;
  border-bottom: 1px solid #aaa;
  text-align: center;
}
.icon {
  margin: 0 5px;
  cursor: pointer;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.page-btn {
  background: #008080;
  color: white;
  border: none;
  padding: 4px 8px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 4px;
}
.page-num {
  margin: 0 6px;
}
</style>
