<template>
  <div class="trim">
    <h1>没有使用 .trim 修饰符</h1>
    <div class="trim-item">
      <input type="text" v-model="name">
      <p>用户名：<span>{{ name }}</span></p>
    </div>
    <br>
    <h1>有使用 .trim 修饰符</h1>
    <div class="trim-item">
      <input type="text" v-model.trim="name2">
      <p>用户名2：<span>{{ name2 }}</span></p>
    </div>
  </div>
</template>

<script>
/**
 * 过滤首尾空格
 * 文档地址：https://cn.vuejs.org/v2/guide/forms.html#trim
 */
export default {
  name: 'trim',
  data () {
    return {
      name: '',
      name2: '',
    }
  },
  watch: {
    name (newVal) {
      console.log(`'----${newVal}----'`)
    },
    name2 (newVal) {
      console.log(`'----${newVal}----'`)
    },
  }
}
</script>

<style scoped>
  .trim-item{
    padding: 20px;
  }

  p span{
    /* padding: 10px 0; */
    background-color: aquamarine;
  }
</style>