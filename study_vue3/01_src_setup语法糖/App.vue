<template>
  <div class="main">
    <h1>name : {{ name }}</h1>
    <h1>age : {{ age }}</h1>
    <h1>address : {{ address }}</h1>
    <button @click="showAddress">查看地址</button>
  </div>
</template>

<!-- setup语法糖 -->
<script setup lang="ts">
let name = 'codeify'
let age = 22
let address = '深圳龙岗区坂田街道'
function showAddress() {
  alert(address)
}
</script>

<style scoped>
.main {
  background-color: aliceblue;
}
</style>