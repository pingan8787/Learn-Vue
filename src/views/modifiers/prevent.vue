<template>
  <div class="prevent">
    <h1>没有阻止默认事件</h1>
    <a href="https://juejin.cn/" @click="onNoPrevent">可以跳转掘金</a>
    <br />
    <h1>添加 .prevent 修饰符阻止默认事件</h1>
    <a href="https://juejin.cn/" @click.prevent="onPrevent">无法跳转掘金</a>
    <br />
    <h1>添加 event.preventDefault() 阻止默认事件</h1>
    <a href="https://juejin.cn/" @click="onPreventDefault">无法跳转掘金</a>
  </div>
</template>

<script>
/**
 * 阻止默认事件，有 2 种方式：
 * 1. .prevent 修饰符
 * 2. event.preventDefault()
 */
export default {
  name: 'prevent',
  methods: {
    onNoPrevent () {
      console.log('未阻止默认事件')
    },
    onPrevent () {
      console.log('.prevent 修饰符阻止默认事件')
    },
    onPreventDefault (event) {
      console.log('event.preventDefault()阻止默认事件')
      event.preventDefault()
    },
  }
}
</script>

<style>
.prevent{
  padding: 20px;
}
</style>