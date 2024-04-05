<template>
  <div class="school">
    <h1>School组件</h1>
    <h2>学生的名字：{{ studentName }}</h2>
    <!-- 1、绑定自定义事件-方式1 -->
    <!-- <Student @sendNameToSchool="getStudentName"/> -->
    <!-- once修饰符 -->
    <!-- <Student @sendNameToSchool.once="getStudentName"/> -->
    <Student ref="stu"/>
    <!-- 3、绑定原生事件.native -->
    <!-- <Student @click.native="nativeClick"/> -->
  </div>
</template>

<script>
import Student from './Student.vue'

export default {
  name: 'School',
  data() {
    return {
      msg: '',
      studentName: ''
    }
  },
  components: {
    Student
  },
  methods: {
    getStudentName(value) {
      console.log("获取到来自student组件的name: ", value);
      this.studentName = value;
    },
    nativeClick() {
      console.log("nativeClick事件");
    }
  },
  mounted() {
    // 2、绑定自定义事件-方式2
    // this.$refs.stu.$on('sendNameToSchool', this.getStudentName)
    // once修饰符
    this.$refs.stu.$once('sendNameToSchool', this.getStudentName)
  }
}
</script>

<style scoped>
.school {
  background-color: aqua;
}
</style>