<template>
    <div>
        <Etabs>
           <Etabitem :titles="tabItem1">12</Etabitem>
           <Etabitem :titles="tabItem2">345</Etabitem>
        </Etabs>
    </div>
</template>

<script>
// import stockTrend from "@/components/stockTrend";
// import stockKLine from "@/components/stockKLine";
import Etabs from "@/components/Etabs";
import Etabitem from "@/components/Etabitem";
export default {
  name: "index",
  components: {
    // stockTrend,
    // stockKLine,
    Etabs,
    Etabitem
  },
  data() {
    return {
      //   navTitle: ["分时", "五日", "日K", "周K", "月K"]
      tabItem1: [
        {
          title: "分时"
        },
        {
          title: "五日"
        }
      ],
      tabItem2: [
        {
          title: "日K"
        },
        {
          title: "周K"
        },
        {
          title: "月K"
        }
      ]
    };
  }
};
</script>

<style>
</style>
