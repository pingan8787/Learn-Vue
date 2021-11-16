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