<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>我是APP1</h1>
    <!-- 垂直导航栏 -->
    <nav class="navbar bg-light navbar-light">
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- 使用路由 -->
          <router-link class="nav-link" to="/home">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">关于</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msgFromStudent: ''
    }
  },
  components: {
  },
  mounted() {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
