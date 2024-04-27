<template>
  <div class="school">
    <h1>School组件：演示vue-resouce</h1>
    <h2>{{ data }}</h2>
    <button @click="getMsg">点我发送网络请求</button>
  </div>
</template>

<script>


export default {
  name: 'School',
  components: {
  },
  data() {
    return {
      msg: 'vue2',
      data: {}
    }
  },
  methods: {
    getMsg() {
      this.$http.get('/api/index/hello')
      .then((res) => {
        console.log('@res', res);
        this.data = res.body
      }, (res) => {
        console.log(res);
      })
   /*    // POST /someUrl
      this.$http.post('/someUrl', { foo: 'bar' }).then(response => {

        // get status
        response.status;

        // get status text
        response.statusText;

        // get 'Expires' header
        response.headers.get('Expires');

        // get body data
        this.someData = response.body;

      }, response => {
        // error callback
      }); */
    }
  },
}
</script>

<style scoped>
.school {
  background-color: aqua;
}
</style>