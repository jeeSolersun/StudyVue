<template>
  <div>
    <h1 ref="h1">School组件</h1>
    <Student ref="stu"/>
    <button @click="showInfo">点我提示h1或者student组件实例</button>
    <h2>msg from server: {{ msg }}</h2>
    <button @click="getInfoFromServer">点我getInfoFromServer</button>
  </div>
</template>

<script>
import Student from './Student.vue'
import axios from 'axios'

export default {
  name: 'School',
 data() {
  return {
    msg: ''
  }
 },
  components: {
    Student
  },
  methods: {
    showInfo() {
      // $refs属性拿到对应的真实dom元素或者组件实例对象
      console.log(this.$refs);
    },
    getInfoFromServer() {
      axios.post('/api/index/getInfo', {})
      .then(res => {
        console.log('res', res);
        this.msg = res?.data;
      })
    }
  },
}
</script>

<style>

</style>