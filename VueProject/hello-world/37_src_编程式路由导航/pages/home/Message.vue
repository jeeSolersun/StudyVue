<template>
  <div>
    <h1>/home/message</h1>
    <ul>
      <li v-for="item in msgs" :key="item.id">
        <!-- 传递query参数 -->
        <!-- <router-link :to="`/home/message/detail?msg=${item.msg}`">{{ item.msg }}</router-link> -->
        <!-- 传递query参数：对象写法 -->
        <!-- <router-link :to="{
          name: 'detail',
          query: {
            msg: item.msg
          }
        }">{{ item.msg }}</router-link> -->
        <!-- 传递params参数 -->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.msg}`">{{ item.msg }}</router-link> -->
        <!-- 传递params参数：对象写法 -->
        <!-- <router-link replace :to="{
          // ！！！注意，path与params不能一起，需要使用name或者使用完整的path
          // path: '/home/message/detail', 
          name: 'detail',
          query: {
            msg: item.msg
          },
          params: {
            id: item.id,
            title: item.msg,
            msg22: item.msg
          },
        }">{{ item.msg }}</router-link> -->
        <a href="#" @click="handleClick(item)">{{ item.msg }}</a>
      </li>

    </ul>
    <button @click="back">后退</button>
    <button @click="goForward">前进</button>
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
  methods: {
    handleClick(item) {
      // 编程式导航
      this.$router.push({
        name: 'detail',
        params: {
          id: item.id,
          title: item.msg
        },
        query: {
          msg: item.msg
        }
      })
    },
    goForward() {
      // 前进，相当于window.history.forward();
      this.$router.go(1)
    },
    back() {
      // 后退，相当于window.history.back();
      this.$router.go(-1)
    }
  },
  
}
</script>

<style></style>