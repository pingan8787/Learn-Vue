<template>
  <div class="parent" @click="onClickParent">
    这是父组件
    <div class="child" @click="onClickChild($event)">
      这是子组件
    </div>
  </div> 
</template>

<script>
/**
 * 添加 .stop 修饰符阻止事件冒泡
 */
export default {
  name: 'stop',
  methods: {
    onClickParent () {
      console.log('这是父组件')
    },
    onClickChild (event) {
      console.log('这是子组件')
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