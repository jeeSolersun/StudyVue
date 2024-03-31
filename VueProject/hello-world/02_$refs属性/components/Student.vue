<template>
  <div class="demo">
    <h1>Student组件</h1>
    <h2>消息：{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我是Student组件',
    }
  },
}
</script>

<style>
.demo {
  background-color: skyblue;
}
</style>