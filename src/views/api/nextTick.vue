<template>
  <div>
    <h1>没有使用 nextTick</h1>
    <p v-if="show" ref="node">内容</p>
    <button @click="handleShow">显示</button>

    <h1>有使用 nextTick</h1>
    <p v-if="nextTickShow" ref="nextTickNode">内容</p>
    <button @click="handleNextTickShow">显示</button>
  </div>
</template>
<script>
/**
 * 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
 * 文档地址：https://cn.vuejs.org/v2/api/#Vue-nextTick
 * 源码地址：https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js
 */
export default {
  data() {
    return {
      show: false,
      nextTickShow: false,
    };
  },
  methods: {
    handleShow() {
      this.show = true;
      console.log(this.$refs.node); // undefined
    },
    handleNextTickShow() {
      this.nextTickShow = true;
      console.log(this.$refs.nextTickNode); // undefined
      this.$nextTick(() => {
        console.log(this.$refs.nextTickNode); // <p>内容</p>
      });
    },
  },
};
</script>