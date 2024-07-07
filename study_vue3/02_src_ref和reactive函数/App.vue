<template>
  <div class="main">
   <Person/>
  </div>
</template>

<!-- setup语法糖 -->
<script setup lang="ts" name="App">
import Person from '@/components/Person.vue'

</script>

<style scoped>
.main {
  background-color: aliceblue;
}
</style>