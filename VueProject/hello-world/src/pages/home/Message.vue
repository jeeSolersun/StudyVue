<template>
  <div>
    <h1>/home/message</h1>
    <ul>
      <li v-for="item in msgs" :key="item.id">{{ item.msg }}</li>
    </ul>
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