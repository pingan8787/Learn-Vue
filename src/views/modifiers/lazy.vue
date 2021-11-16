<template>
  <div class="lazy">
    <h1>没有使用 .lazy 修饰符</h1>
    <div class="lazy-item">
      <input type="text" v-model="text">
      <p>无.lazy: {{ text }}</p>
    </div>

    <h1>有使用 .lazy 修饰符</h1>
    <div class="lazy-item">
      <input type="text" v-model.lazy="text2">
      <p>.lazy: {{ text2 }}</p>
      <p>添加了.lazy修饰符之后，第二个输入框输入的值不会实时反应在下面，而是光标离开实，text2的数据才更新了</p>
    </div>
  </div>
</template>

<script>
/**
 * 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。
 * 你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步
 * 
 * 文档地址：https://cn.vuejs.org/v2/guide/forms.html#lazy
 */
export default {
  name: 'lazy',
  data () {
    return {
      text: '',
      text2: ''
    }
  }
}
</script>

<style>
.lazy-item, p{
  padding-top: 10px;
}
</style>