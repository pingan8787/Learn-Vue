<template>
  <div class="child">
    我是子组件: 
    <input type="text" :value="value" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'child',
  props: ['value'],
  methods: {
    onInput ($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style>
.child{
  padding-left: 10px;
}
</style>