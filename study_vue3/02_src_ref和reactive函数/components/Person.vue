<template>
  <div>
    <h2>求和：{{ sum }}</h2>
    <button @click="add">sum++</button>
    <hr/>
    <h2>人员信息:</h2>
    <h2>{{ person.name }}</h2>
    <h2>{{ person.gender }}</h2>
    <h2>{{ person.age }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeGender">change gender</button>
    <button @click="changeAge">change age</button>
</div>
</template>

<script setup lang="ts" name="Person">
import { reactive, ref } from 'vue';
// ref定义基本类型和对象类型数据
let sum = ref(0)
function add() {
  sum.value += 1
}

// reactive只能定义对象类型数据
let person = reactive({
  name: 'codeify',
  gender: 'male',
  age: 22
})
function changeName() {
  person.name = '张三'
}
function changeGender() {
  person.gender = 'xxx'
}
function changeAge() {
  person.age += 1;
}
</script>

<style lang="scss" scoped>

</style>