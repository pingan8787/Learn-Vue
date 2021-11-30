<template>
  <div class="number">
    <h1>没有使用 .number 修饰符</h1>
    <div class="number-item">
      <input type="number" v-model="number">
    </div>
    <h1>有使用 type:text .number 修饰符</h1>
    <div class="number-item">
      <input type="text" v-model.number="number1">
    </div>
    <h1>有使用 type:number .number 修饰符</h1>
    <div class="number-item">
      <input type="number" v-model.number="number2">
    </div>
  </div>
</template>

<script>
/**
 * 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符
 * 文档地址：https://cn.vuejs.org/v2/guide/forms.html#number
 */
export default {
  name: 'lazy',
  data () {
    return {
      number: 0,
      number1: '',
      number2: '',
    }
  },
  watch: {
    number (newVal) {
      console.log(typeof newVal, newVal)
    },
    number1 (newVal) {
      console.log(typeof newVal, newVal)
    },
    number2 (newVal) {
      console.log(typeof newVal, newVal)
    },
  }
}
</script>

<style>
.number-item, p{
  padding-top: 10px;
}
</style>