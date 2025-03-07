<template>
<div>
  <h1>人员信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
</div>
</template>

<script setup lang="ts" name="Person">
import { ref,reactive} from 'vue'
const person = ref({
  name:'张三',
  age:18
})
const person2 = reactive({
  name:'李四',
  age:20
})
console.log('@@', person, person2);

</script>

<style lang="scss" scoped>

</style>