<template>
  <div class="camel">
    <svg :viewBox="viewbox"></svg>
  </div>
</template>

<script>
/**
 * .camel 修饰符允许在使用 DOM 模板时将 v-bind property 名称驼峰化
 * 文档地址：https://cn.vuejs.org/v2/api/#v-bind
 */
export default {
  data () {
    return {
      viewbox: '0 0 100 100'
    }
  }
}
</script>

<style>

</style>