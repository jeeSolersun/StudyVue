<template>
  <div class="stu">
    <h1>我是Student组件</h1>
    <!-- 1、默认插槽 -->
    <!-- <slot></slot> -->
    <!-- 2、具名插槽 -->
    <!-- <div class="flex-container">
      <div class="flex-item"><slot name="header"></slot></div>
      <div class="flex-item"><slot name="footer"></slot></div>
    </div> -->
    <!-- 作用域插槽 -->
    <div class="flex-container">
      <div class="flex-item"><slot name="header" :lans="lans"></slot></div>
      <div class="flex-item"><slot name="footer"></slot></div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      lans: ['java', 'js', 'go', 'vue', 'react']
    }
  }
}
</script>

<style lang="scss" scoped>
.stu {
  background-color: skyblue;
}
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 400px;
  // height: 250px;
  & .flex-item {
    // width: 100px;
    // height: 100px;
    margin: 10px;
    background-color: coral;
  }
}
</style>