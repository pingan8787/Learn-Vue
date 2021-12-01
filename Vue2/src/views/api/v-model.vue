<template>
  <div>
    <h1>v-model 参数</h1>
    <v-model-child v-model="title"></v-model-child>
    <!-- 
        等价于
        <custom-input
            v-bind:value="title"
            v-on:input="title = $event"
        ></custom-input>
     -->
    <div>父组件的值：{{title}}</div>
  </div>
</template>
<script>
/**
 * 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。
 * v-model 等同于 :value="title" @input="title=$event.target.value"
 * 文档地址：https://cn.vuejs.org/v2/guide/components-custom-events.html
 */
import vModelChild from '../../components/v-model-child.vue'

export default {
  components: { vModelChild },
  data() {
    return {
      title: 'hello leo',
    };
  },
  methods: {
      onChange(val){
          this.title = val;
      }
  },
};
</script>