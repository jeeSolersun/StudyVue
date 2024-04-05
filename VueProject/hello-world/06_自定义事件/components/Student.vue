<template>
  <div class="student">
    <h1>Student组件</h1>
    <h2>消息：{{ msg}}</h2>
    <!-- 1、触发自定义事件 -->
    <button @click="sendNameToSchool">点我发送name给School组件</button>
    <button @click="offEvent">点我解绑事件</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: 'Student组件',
      msg: '我是Student组件',
      inputStr: 'hello'
    }
  },
  methods: {
    sendNameToSchool() {
      // 触发自定义事件
      this.$emit('sendNameToSchool', this.name)
    },
    offEvent() {
      console.log("offEvent被调用了");
      // 解绑自定义事件
      this.$off('sendNameToSchool')
      // this.$off(); // 解绑所有的事件
    }
  },
}
</script> 

<style scoped>
.student {
  background-color: skyblue;
}
</style>