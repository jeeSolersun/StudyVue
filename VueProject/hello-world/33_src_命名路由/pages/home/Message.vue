<template>
  <div>
    <h1>/home/message</h1>
    <ul>
      <li v-for="item in msgs" :key="item.id">
        <!-- 传递query参数 -->
        <router-link :to="`/home/message/detail?msg=${item.msg}`">{{ item.msg }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      msgs: [
        { id: 1, msg: 'message001' },
        { id: 2, msg: 'message002' },
        { id: 3, msg: 'message003' },
      ]
    }
  },
}
</script>

<style></style>