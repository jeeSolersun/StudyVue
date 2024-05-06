<template>
  <div>
    <!-- 获取query参数 -->
    <h2>{{ $route.query.msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MessageDetail',
  mounted() {
    console.log('@@this.$route', this.$route);
  },
}
</script>

<style>

</style>