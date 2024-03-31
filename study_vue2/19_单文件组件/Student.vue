<template>
  <div>
    <h1>School组件</h1>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Stuent',
  data() {
    return {
      name: 'vue',
      age: 22
    }
  }
}
</script>

<style>

</style>