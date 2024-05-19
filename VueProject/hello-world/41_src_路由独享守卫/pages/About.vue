<template>
  <div>
    <h1>我是About组件</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  created() {
    console.log('@@About组件 created()');
  },
  // 路由组件被激活时触发
  activated() {
    console.log('@@About组件 activated');
  },
  // 路由组件失活时触发
  deactivated() {
    console.log('@@About组件 deactivated');
  }
}
</script>

<style>

</style>