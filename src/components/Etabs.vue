<template>
    <div class="tabs">
        <div ref="nav_line" class="tabs__nav tabs__nav--line">
            <div class="tabs__line" :style="[tabsLineStyle]"></div>
            <div class="tab-item" :style="[currentTab==index?tabItemStyle:'']" v-for="(nav,index) of navs" :key="index" @click="selectTab(index)">
                <div class="tab-item-inner">{{nav.title}}</div>
            </div>
        </div>
        <div class="tabs__content">
          <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      originNavs: [],
      navs: [],
      currentTab: 0,
      tabLineWidth: 0, //导航下划线宽度
      currentContent: 0,
      color: `blue`
    };
  },
  computed: {
    tabLineOffsetLeft() {
      return this.currentTab * this.tabLineWidth * 2 + this.tabLineWidth * 0.5;
    },
    tabsLineStyle() {
      return {
        width: `${this.tabLineWidth}px`,
        transform: `translateX(${this.tabLineOffsetLeft}px)`
      };
    },
    tabItemStyle() {
      return {
        color: this.color
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.originNavs=this.$slots.default.filter(a=>a.componentInstance);
      this.navs = this.originNavs.filter(a=>a.componentInstance).reduce((a, b) => {
        return a.componentInstance.titles.concat(b.componentInstance.titles);
      });
      if (this.navs.length) {
        this.tabLineWidth =
          (this.$refs.nav_line.clientWidth / this.navs.length) * 0.5;
      }
      this.initTabContentShow();
    });
  },
  methods: {
    initTabContentShow() {
      this.originNavs.forEach((item, index) => {
        if (index == 0) {
          item.elm.style.display = "block";
        }
      });
    },
    selectTab(index) {
      this.currentTab = index;
    }
  },
  watch: {
    currentTab(val, old) {
      if (val <= 1) {
        this.originNavs[0].elm.style.display = "block";
        this.originNavs[1].elm.style.display = "none";
      } else {
        this.originNavs[0].elm.style.display = "none";
        this.originNavs[1].elm.style.display = "block";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  overflow: hidden;
  position: relative;
  .tabs__nav {
    position: relative;
    background: #ccc;
    color: #333;
    display: flex;
    height: 30px;
  }
  .tabs__line {
    background: blue;
    position: absolute;
    z-index: 1;
    bottom: 0;
    height: 1px;
    left: 0;
    transition-duration: 0.2s;
  }
  .tab-item {
    flex: 1;
    background: #ccc;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 30px;
    min-width: 0;
    text-align: center;
    font-size: 10px;
    &.tab-item--active {
      color: blue;
    }
    .tab-item-inner {
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .tabs__content {
    background: #fff;
  }
}
</style>
