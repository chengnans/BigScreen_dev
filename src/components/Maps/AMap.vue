<template>
  <div id="map-container" style="width: 100%; height: 100%;"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  name: "AMap",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap() {
      window._AMapSecurityConfig = {
        securityJsCode: "a6fa99ffd17a0661fd502a3a7ae92306",
      };

      // 加载高德地图 SDK
      AMapLoader.load({
        key: "ca563e87baf97464e4582445d994867e", // 替换为你的高德地图 API Key
        version: "2.0",
        plugins: ["AMap.Marker", "AMap.Polygon", "AMap.LabelMarker", "AMap.TileLayer.Satellite"], // 加载必要的插件
      })
          .then((AMap) => {
            // 使用卫星图层初始化地图
            this.map = new AMap.Map("map-container", {
              zoom: 16.7,
              center: [119.997042, 36.611681], // 设置地图的初始中心点
              layers: [
                new AMap.TileLayer.Satellite(), // 添加卫星图层
              ],
            });

            // 添加多边形边框
            this.addPolygonBorders(AMap);

            // 添加标记
            this.addMarkers(AMap);
          })
          .catch((e) => {
            console.error("地图加载失败：", e);
          });
    },
    addPolygonBorders(AMap) {
      // 定义红色边框区域
      const redPolygon = new AMap.Polygon({
        path: [
          [119.993527, 36.613344],
          [119.999407, 36.613800],
          [119.999879, 36.609092],
          [119.994028, 36.608609],
        ],
        fillColor: "red", // 无填充
        strokeColor: "red", // 边框颜色
        strokeWeight: 4, // 自定义边框宽度
      });
      // 定义蓝色边框区域
      const bluePolygon = new AMap.Polygon({
        path: [
          [119.993605, 36.613244],//左上
          [119.999307, 36.613700],//右上
          [119.999538, 36.611479],//右下
          [119.993865, 36.610989],//左下
        ],
        fillColor: "blue", // 无填充
        strokeColor: "blue", // 边框颜色
        strokeWeight: 4, // 自定义边框宽度
      });
      // 定义绿色边框区域
      const greenPolygon = new AMap.Polygon({
        path: [
          [119.993865, 36.610902],//左上
          [119.999538, 36.611389],//右上
          [119.999800, 36.609132],//右下
          [119.994108, 36.608679],//左下
        ],
        fillColor: "green", // 无填充
        strokeColor: "green", // 边框颜色
        strokeWeight: 4, // 自定义边框宽度
      });

      // 将多边形边框添加到地图
      this.map.add([redPolygon, greenPolygon, bluePolygon]);
    },
    addMarkers(AMap) {
      // 示例标记数据
      const markersData = [
        {
          position: [119.993865, 36.610902],
          data: [
            {text: "环境湿度 : 58%RH", status: "偏高"},
            {text: "温度 : 22°C", status: "正常"},
            {text: "土壤水分 : 27%", status: "正常"},
          ],
        },
        {
          position: [119.999307, 36.613700],
          data: [
            {text: "土壤EC1 : 1uS/cm", status: "正常"},
            {text: "环境湿度 : 88%RH", status: "偏高"},
            {text: "土壤水分 : 40%", status: "偏高"}
          ],
        },
      ];

      markersData.forEach((marker, index) => {
        // 动态生成轮播内容，自定义HTML
        const customMarkerContent = `
      <div id="marker-${index}" style="
        position: relative;
        width: 180px;
        height: 30px;
        overflow: hidden;
        background-color: rgba(0, 128, 192, 0.9);
        border: 1px solid #00ffff;
        border-radius: 5px;
        color: white;
        font-size: 12px;
        text-align: center;
      ">
        <div class="carousel" id="carousel-${index}" style="
          position: absolute;
          width: 100%;
          transition: transform 0.5s ease-in-out; /* 快速滚动动画 */
        ">
          ${marker.data
            .map((item) => {
              if (typeof item === "string") {
                return `<div style="height: 30px; display: flex; align-items: center; justify-content: center;">
                  ${item}
                </div>`;
              } else {
                return `<div style="height: 30px; display: flex; align-items: center; justify-content: center;">
                  ${item.text}
                  <span style="
                    display: inline-block;
                    margin-left: 8px;
                    background-color: ${
                    item.status === "正常" ? "green" : "rgb(192, 0, 0)"
                };
                    color: white;
                    padding: 0 5px;
                    border-radius: 3px;">
                    ${item.status}
                  </span>
                </div>`;
              }
            })
            .join("")}
        </div>
        <div style="
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 10px solid rgba(0, 128, 192, 0.9);">
        </div>
      </div>
    `;

        // 创建标记
        const customMarker = new AMap.Marker({
          position: marker.position,
          content: customMarkerContent,
          offset: new AMap.Pixel(-10, -30), // 调整标记位置
        });

        // 将标记添加到地图
        this.map.add(customMarker);

        // 轮播逻辑
        const carousel = document.getElementById(`carousel-${index}`);
        const dataLength = marker.data.length;
        let currentIndex = 0;

        if (carousel) {
          // 复制第一组数据到末尾，形成循环
          carousel.innerHTML += carousel.innerHTML;

          setInterval(() => {
            currentIndex++;
            carousel.style.transform = `translateY(-${currentIndex * 30}px)`; // 每次滚动 30px

            // 当滚动到新增的第一条时，重置位置，形成无缝循环
            if (currentIndex === dataLength) {
              setTimeout(() => {
                carousel.style.transition = "none"; // 关闭动画
                carousel.style.transform = `translateY(0px)`; // 重置位置
                currentIndex = 0; // 重置索引
                // 恢复动画
                setTimeout(() => {
                  carousel.style.transition = "transform 0.5s ease-in-out";
                }, 50);
              }, 500); // 等待动画完成后重置
            }
          }, 2000); // 每隔 1 秒轮播一次
        }
      });
    }
  }
}
</script>

<style>
#map-container {
  width: 100%;
  height: 500px; /* 设置地图容器的高度 */
}

/* 快速滚动动画 */
.carousel {
  transition: transform 1s ease-in-out; /* 滚动时动画持续 0.5 秒 */
}

</style>
