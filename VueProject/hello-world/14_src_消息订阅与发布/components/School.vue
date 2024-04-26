<template>
  <div class="school">
    <h1>School组件</h1>
    <Student />
    <h2>来自Student的msg: {{ msg }}</h2>
    <!-- 取消订阅 -->
    <button @click="cancelSubscrib">取消订阅</button>
  </div>
</template>

<script>
// 引入PubSub
import PubSub from 'pubsub-js'
import Student from './Student.vue'

export default {
  name: 'School',
  components: {
    Student
  },
  data() {
    return {
      msg: ''
    }
  },
  created() {
    // 订阅消息
    this.subToken = PubSub.subscribe('sendMsg', (msg , data) => {
      console.log('@@msg %s, %s', msg, data);
      this.msg = data;
    });
    // 只订阅一次
    /* PubSub.subscribeOnce('sendMsg', (msg, data) => {
      console.log('@@msg %s, %s', msg, data);
      this.msg = data;
    }); */
  },
  methods: {
    cancelSubscrib() {
      // 取消订阅
      PubSub.unsubscribe(this.subToken);
    }
  },
}
</script>

<style scoped>
.school {
  background-color: aqua;
}
</style>