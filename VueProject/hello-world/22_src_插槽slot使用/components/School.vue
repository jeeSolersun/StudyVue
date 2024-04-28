<template>
  <div class="school">
    <h1>School组件：演示slot</h1>
    <Student>
      <!-- <h2>默认插槽的内容</h2> -->
      <!-- <template slot="header" slot-scope="scopeObj"> -->
        <!-- v-slot指令 -->
      <!-- <template v-slot:header="scopeObj"> -->
        <!-- v-slot简写形式 -->
      <template #header="scopeObj">
        <h2>我是header</h2>
        <ul>
          <template v-for="(item, index) in scopeObj.lans" >
            <li :key="index">{{ item }}</li>
          </template>
        </ul>
      </template>
      <template slot="footer">
        <h2>我是footer</h2>
      </template>
    </Student>
  </div>
</template>

<script>
import Student from './Student.vue';


export default {
  name: 'School',
  components: {
    Student
  },
  data() {
    return {
      msg: 'vue2',
    }
  },
}
</script>

<style scoped lang="scss">
.school {
  background-color: aqua;
}
</style>