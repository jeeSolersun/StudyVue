<template>
  <div class="demo">
    <h1>Student组件</h1>
    <h2>消息：{{ msg }}</h2>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="updateAge">点我myAge++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我是Student组件',
      myAge: this.age
    }
  },
  // 1、只接收
  // props: ['name', 'age', 'sex']
  // 2、限制类型
  /* props: {
    name: String,
    age: Number,
    sex: String
  } */
  props: {
    name: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 99
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  }
}
</script>

<style>
.demo {
  background-color: skyblue;
}
</style>