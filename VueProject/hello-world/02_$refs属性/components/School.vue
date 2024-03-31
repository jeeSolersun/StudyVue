<template>
  <div>
    <h1 ref="h1">School组件</h1>
    <Student ref="stu"/>
    <button @click="showInfo">点我提示h1或者student组件实例</button>
  </div>
</template>

<script>
import Student from './Student.vue'

export default {
  name: 'School',
  components: {
    Student
  },
  methods: {
    showInfo() {
      // $refs属性拿到对应的真实dom元素或者组件实例对象
      console.log(this.$refs);
    }
  },
}
</script>

<style>

</style>