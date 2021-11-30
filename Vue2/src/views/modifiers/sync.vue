<template>
  <div class="sync">
    <Parent />
  </div>
</template>

<script>
/**
 * 实现父子组件之间对某个属性的双向数据绑定
 * 通常是子组件修改数据，父组件更新
 * 文档地址：https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6
 */
import Parent from '../../components/parent.vue'

export default {
  name: 'sync',
  components: {
    Parent
  }
}
</script>

<style>

</style>