<template>
  <h1>我是Hello组件</h1>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    id: String
  },
  mounted() {
    // console.log('@@this', this, this.id);
  },
}
</script>

<style>

</style>