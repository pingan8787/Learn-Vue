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
 * Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。
 * 文档地址：https://cn.vuejs.org/v2/api/#Vue-nextTick
 * 源码地址：https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js
 * 异步更新队列：https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97
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