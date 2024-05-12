<template>
  <div>
    <!-- 获取query参数 -->
    <h1>1、query参数值：</h1>
    <h2>msg: {{ $route.query.msg }}</h2>
    <br />
    <h1>2、params参数：</h1>
    <h2>id: {{ $route.params.id }}</h2>
    <h2>title: {{ this.$route.params.title }}</h2>
    <!-- <h1>user: {{ this.user }}</h1>
    <button @click="user.name = 'go'">点我change user.name为go</button>
    <button @click="handleClick">点我change user.name为go</button> -->
  </div>
</template>

<script>
export default {
  name: 'MessageDetail',
  data() {
    return {
      user: {
        name: 'codeify'
      }
    }
  },
  watch: {
    // user() {
    //   console.log('@@newVal', newVal);
    // }
    user: {
      deep: true,
      handler(newVal) {
        console.log('@@newVal', newVal);
      }
    }
  },
  mounted() {
    console.log('@@this.$route', this.$route);
  },
  methods: {
    handleClick() {
      this.user.name = 'go'
    }
  }
}
</script>

<style></style>