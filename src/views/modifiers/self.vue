<template>
  <div>
    <h1>没有添加 .self 修饰符</h1>
    <div class="self-container">
      <div class="self" @click="onClickSelf">
        <div class="inner" @click="onClickInner"></div>
      </div>
    </div>
    <br>
    <h1>有添加 .self 修饰符</h1>
    <div class="self-container">
      <div class="self" @click.self="onClickSelf">
        <div class="inner" @click="onClickInner"></div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 只有当 event.target 是当前元素自身时才会触发事件回调函数
 * 避免其他元素也触发事件
 */
export default {
  name: 'self',
  methods: {
    onClickSelf () {
      console.log('我是self节点')
    },
    onClickInner () {
      console.log('我是inner节点')
    }
  }
}
</script>

<style scoped>
  .self-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .self{
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  }
</style>