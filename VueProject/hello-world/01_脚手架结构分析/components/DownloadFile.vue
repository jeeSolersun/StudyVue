<template>
  <div>
    <h1>DownloadFile.vue</h1>
    <button @click="download">点我下载</button>
  </div>
</template>

<script>
  export default {
    name : 'DownloadFile',
    methods: {
      download() {
        window.location.href = "http://localhost:8081/file/downloadExcel"
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>