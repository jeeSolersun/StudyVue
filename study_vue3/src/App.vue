<template>
  <div>{{ name }}--{{ age }}</div>
  <div>{{info.infoName}}--{{info.msg}}</div>
  <button @click="getInfo">changInfo</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 1、基本数据类型
    let name = ref("vue3");
    let age = ref(22);
    // 2、对象类型
    let info = ref({
      infoName: 'aa',
      msg: 'hello vue3-ref'
    });
    function getInfo() {
      // 1、操作普通对象
      // name = 'vue3 test01';
      // name.value = 'vue3 test01'
      // age.value = 23
      // 2、操作对象
      info.value.infoName = 'aa test01';
      info.value.msg = 'hello vue3-ref test01';
      console.log(name, age);
    }
    return {
      name,
      age,
      info,
      getInfo,
    };
  },
};
</script>

<style>
</style>