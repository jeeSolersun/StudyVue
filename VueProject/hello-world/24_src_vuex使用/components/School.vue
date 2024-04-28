<template>
  <div class="school">
    <h1>School组件：演示vuex的使用</h1>
    <h2>{{ getCount }}</h2>
    <Student>
    </Student>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Student from './Student.vue';


export default {
  name: 'School',
  components: {
    Student
  },
  computed: {
    ...mapGetters(['getCount'])
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