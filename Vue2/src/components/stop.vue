<template>
  <div class="parent" @click="onClickParent">
    我是爸爸
    <div class="child" @click.stop="onClickChild">
      我是儿子
    </div>
  </div> 
</template>
<script>
export default {
  name: 'stop',
  methods: {
    onClickParent () {
      console.log('我是爸爸')
    },
    onClickChild () {
      console.log('我是儿子')
    }
  }
}
</script>