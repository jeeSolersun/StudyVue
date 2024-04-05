<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>我是APP1</h1>
    <h2>来自Student组件的消息：{{ msgFromStudent }}</h2>
    <School></School>
  </div>
</template>

<script>
import School from './components/School.vue';

export default {
  name: 'App',
  data() {
    return {
      msgFromStudent: ''
    }
  },
  components: {
    School
  },
  mounted() {
    this.$bus.$on('sendDataToApp', (value) => {
      console.log("接收到来自Student组件的消息", value);
      this.msgFromStudent = value;
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
