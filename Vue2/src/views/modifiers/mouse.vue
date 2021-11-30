<template>
  <div class="mouse" @mousedown="onMousedown">
    <button @click.left="onClickBtn('left')">left</button>
    <button @click.middle="onClickBtn('middle')">middle</button>
    <button @click.right="onClickBtn('right')">right</button>
  </div>
</template>

<script>
/**
 * 监听用户点击了左键、右键或者中键时的修饰符
 * https://cn.vuejs.org/v2/guide/events.html#%E9%BC%A0%E6%A0%87%E6%8C%89%E9%92%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6
 */
export default {
  name: 'mouse',
  mounted () {

  },
  methods: {
    onClickBtn (msg) {
      console.log(msg)
    },
    onMousedown (event) {
      const mosueMsgMap = {
        0: '鼠标左键',
        1: '鼠标中键',
        2: '鼠标右键'
      }
      console.log('点击了', mosueMsgMap[event.button])
    }
  }
}
</script>

<style scoped>
.mouse button{
  margin: 0 10px;
  padding: 5px 10px;
}
</style>