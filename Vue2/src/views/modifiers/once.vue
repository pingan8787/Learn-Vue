<template>
  <div>
    <h1>没有添加 .once 修饰符</h1>
    <div class="once" @click="onClickAll">
      触发多次
    </div>
    <br>
    <h1>有添加 .once 修饰符</h1>
    <div class="once" @click.once="onClickOnce">
      只触发一次
    </div>
  </div>
</template>

<script>
/**
 * 顾名思义，事件只会触发一次
 */
export default {
  name: 'once',
  methods: {
    onClickAll () {
      console.log('没有添加 .once 修饰符，触发多次')
    },
    onClickOnce () {
      console.log('有添加 .once 修饰符，只触发一次')
    }
  }
}
</script>

<style>

</style>