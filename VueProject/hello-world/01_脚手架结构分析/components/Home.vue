<template>
  <div>
    <h1>我是Home组件</h1>
    <div>{{this.$store.state.count}}</div>
    <div>{{this.$store.getters.getPow}}</div>
    <button @click="addCount">点我使state.count加1</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'hello'
    }
  },
  methods: {
    addCount() {
      this.$store.commit('addCount', 1)
      console.log(this.$store);
      // console.log(this);
    }
  }
}
</script>

<style>

</style>