<template>
  <div ref="trend" id="trend" class="trend"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "trend",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    let option = {
     title: {
        left: 'center',
        text: 'tu1  '
    },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320,
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320
          ],
          type: "line",
          areaStyle: {}
        },
        {
          data: [180, 932, 94, 944, 410, 140, 130],
          type: "line"
          // areaStyle: {}
        }
      ]
    };
    echarts.init(this.$refs.trend).setOption(option);
  }
};
</script>

<style scoped>
.trend {
  width: 100%;
  height: 200px;
}
</style>
