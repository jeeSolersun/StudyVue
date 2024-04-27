<template>
  <div class="school">
    <h1>School组件：演示$nextTick()</h1>
    <input ref="input1" v-model="msg"/>
    <button @click="changeMsg">点我changeMsg</button>
    
  </div>
</template>

<script>


export default {
  name: 'School',
  components: {
  },
  data() {
    return {
      msg: 'vue2',
    }
  },
  methods: {
    changeMsg() {
      this.msg = 'vue3'
      // 直接修改value值无效
      // this.$refs.input1.value = 'go'
      // 有效
      this.$nextTick(function () {
        this.$refs.input1.value = 'go'
      })
    }
  },
}
</script>

<style scoped>
.school {
  background-color: aqua;
}
</style>