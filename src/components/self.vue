<template>
  <div class="self" @click.self="onClickSelf">11
    <div class="inner" @click="onClickInner">22</div>
  </div>
</template>
<script>
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