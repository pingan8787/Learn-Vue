<template>
  <div class="prop">
    <h1>没有使用 .prop 修饰符</h1>
    <div class="prop-item" :my-name="prop" ref="prop"></div>
    <!-- 最终变成了 <div my-name="hello prop" class="prop-item"></div> -->

    <h1>有使用 .prop 修饰符</h1>
    <div class="prop-item" :my-name.prop="prop2" ref="prop2"></div>
    <!-- 最终变成了<div class="prop-item"></div> -->

    <button @click="onGetResult">获取结果</button>
  </div>
</template>

<script>
/**
 * 官方定义：作为一个 DOM property 绑定而不是作为 attribute 绑定。
 * 作用：
 * 1. 通过自定义属性存储变量，避免暴露数据
 * 2. 防止污染 HTML 结构
 */
export default {
  name: 'prop',
  data () {
    return {
      prop: 'hello prop',
      prop2: 'hello prop2'
    }
  },
  methods: {
    onGetResult () {
      const $refProp = this.$refs.prop
      const $refProp2 = this.$refs.prop2

      console.log($refProp.getAttribute('my-name'))
      console.log($refProp2.getAttribute('my-name'))
    }
  }
}
</script>

<style>

</style>