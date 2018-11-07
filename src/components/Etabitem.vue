<template>
    <div class="tab-content-item">
       <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: [Object, Array],
      default: []
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.tab-content-item {
  display: none;
  box-sizing: border-box;
}
</style>
