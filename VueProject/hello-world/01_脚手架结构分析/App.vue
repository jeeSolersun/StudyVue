<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home/> -->
    <DownloadFile></DownloadFile>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue';
import DownloadFile from './components/DownloadFile.vue';

export default {
  name: 'App',
  components: {
    // Home
    DownloadFile
  }
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
