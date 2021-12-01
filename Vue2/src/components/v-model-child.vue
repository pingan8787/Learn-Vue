<template>
  <div class="child">
    我是子组件: 
    <input type="text" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'child',
  props: ['value'],
  methods: {
    onChange ($event) {
      this.$emit('change', $event.target.value)
    }
  }
}
</script>

<style>
.child{
  padding-left: 10px;
}
</style>