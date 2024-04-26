<template>
  <div class="student">
    <h1>Student组件</h1>
    <h2>消息：{{ msg}}</h2>
    <button @click="this.sendMsg">通过pubsub-js发送消息</button>
  </div>
</template>

<script>
// 引入PubSub
import PubSub from 'pubsub-js'

export default {
  data() {
    return {
      msg: '我是Student组件',
      inputStr: 'hello'
    }
  },
  mounted() {
    
  },
  methods: {
    sendMsg() {
      // 发布消息
      PubSub.publish('sendMsg', 'hello pubsub-js!!!')
    }
  },
}
</script> 

<style scoped>
.student {
  background-color: skyblue;
}
</style>