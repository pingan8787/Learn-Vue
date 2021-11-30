<template>
  <div>
    <h1>没有添加 .native 修饰符</h1>
    <div class="custom">
      <NativeCustom @onKeydown="onKeydown" @click="onClick" />
    </div>
    <br>
    <h1>有添加 .native 修饰符</h1>
    <div class="custom">
      <!-- 加上.native之后原生事件才得以监听成功 -->
      <NativeCustom @onKeydown="onKeydown" @click.native="onClick" />
    </div>
  </div>
</template>

<script>
/**
 * 由于自定义组件只能监听自定义事件，无法直接触发原生事件（如 click）
 * 可以使用 .native 修饰符解决
 */

import NativeCustom from '../../components/native.vue'

export default {
  name: 'custom',
  components: {
    NativeCustom
  },
  methods: {
    onKeydown () {
      console.log('onKeydown')
    },
    onClick () {
      console.log('onClick')
    }
  }
}
</script>

<style>

</style>