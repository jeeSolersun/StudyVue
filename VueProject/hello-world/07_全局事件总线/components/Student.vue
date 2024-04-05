<template>
  <div class="student">
    <h1>Student组件</h1>
    <h2>消息：{{ msg}}</h2>
    <button @click="sendDataToApp">点我发送数据给App组件</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: '我是Student组件',
      inputStr: 'hello'
    }
  },
  methods: {
    sendDataToApp() {
      this.$bus.$emit('sendDataToApp', this.msg);
    }
  },
}
</script> 

<style scoped>
.student {
  background-color: skyblue;
}
</style>