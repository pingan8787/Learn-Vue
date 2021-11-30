<template>
  <div>
    <h1>没有添加 .capture 修饰符</h1>
    <div class="capture parent" @click="onClickParent">
      父节点
      <div class="child" @click="onClickChild">子节点</div>
    </div>
    <br>
    <h1>有添加 .capture 修饰符</h1>
    <div class="capture parent" @click.capture="onClickCaptureParent">
      父节点
      <div class="child" @click.capture="onClickCaptureChild">子节点</div>
    </div>
  </div>
</template>

<script>
/**
 * 通过 .capture 修饰符，将事件流从冒泡形式（由里向外）传递更改为捕获形式（由外向里）传递
 */
export default {
  name: 'capture',
  methods: {
    onClickParent () {
      console.log('我是父节点')
    },
    onClickChild () {
      console.log('我是子节点')
    },
    onClickCaptureParent () {
      console.log('我是 .capture 修饰符的父节点')
    },
    onClickCaptureChild () {
      console.log('我是 .capture 修饰符的子节点')
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