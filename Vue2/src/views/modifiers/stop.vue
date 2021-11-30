<template>
  <div class="parent" @click="onClickParent">
    这是父组件
    <h1>添加 .stop 修饰符</h1>
    <div class="child" @click.stop="onClickNoStopChild()">
      这是子组件
    </div>
    <h1>添加 event.stopPropagation()</h1>
    <div class="child" @click="onClickChild($event)">
      这是子组件
    </div>
  </div> 
</template>

<script>
/**
 * 添加 .stop 修饰符阻止事件冒泡，有 2 种方式：
 * 1. .stop 修饰符
 * 2. event.stopPropagation()
 */
export default {
  name: 'stop',
  methods: {
    onClickParent () {
      console.log('这是父组件')
    },
    onClickNoStopChild () {
      console.log('这是子组件( .stop 修饰符)')
    },
    onClickChild (event) {
      console.log('这是子组件(event.stopPropagation)')
      event.stopPropagation()
    }
  }
}
</script>

<style scoped>
.parent{
  padding: 20px;
}

.child{
  padding: 10px;
}
</style>