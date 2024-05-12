<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>我是APP1</h1>
    <div class="row">
      <div class="col-sm-2">
        <nav class="navbar bg-light navbar-light navbar-light">
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- 使用路由 -->
              <router-link class="nav-link" to="/home" active-class="active">首页</router-link>
            </li>
            <li class="nav-item">
              <!-- 2、使用命名路由，可以简化路由的跳转 -->
              <router-link class="nav-link" :to="{name: 'about'}" active-class="active">关于</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-sm-10">
        <router-view></router-view>

      </div>
    </div>

    <!-- 垂直导航栏 -->

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
.active {
  background-color: aqua !important;
}
</style>
