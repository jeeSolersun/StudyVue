<template>
  <div class="school">
    <h1>School组件</h1>
    <Student/>
  </div>
</template>

<script>
import Student from './Student.vue'

export default {
  name: 'School',
 data() {
  return {
    msg: ''
  }
 },
  components: {
    Student
  }
}
</script>

<style scoped>
.school {
  background-color: aqua;
}
</style>