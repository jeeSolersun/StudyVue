<template>
  <h1>hello vue3</h1>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <button @click="sayHello">vue3--sayHello</button>
</template>

<script>
export default {
  name: 'App',
  setup() {
    let name = 'vue3--setup';
    let age = 1;
    function sayHello(){
      alert(`我是${name}, ${age}，你好！`);
    }
    return {
      name,
      age,
      sayHello
    }
  }
}
</script>

<style>

</style>