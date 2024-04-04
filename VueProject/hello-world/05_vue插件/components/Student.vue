<template>
  <div class="student">
    <h1>Student组件</h1>
    <h2>消息：{{ msg | sliceStr}}</h2>
    <input type="text" v-inputfocus="inputStr"/>
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
}
</script> 

<style scoped>
.student {
  background-color: skyblue;
}
</style>