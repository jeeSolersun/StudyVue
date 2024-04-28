<template>
  <div class="stu">
    <h1>我是Student组件</h1>
    <!-- <h2>{{ this.$store.state.count }}</h2> -->
    <h2>{{ this.count }}</h2>
    <button @click="addCount">点我count++</button><br/>
    <button @click="asyncAddCount">点我异步addCount</button>
    <input type="text" v-model="myCount"/>

    <h2>{{ count1 }}</h2><br/>
    <button @click="moduleCount2AddCount">module count2 addCount</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Student',
  computed: {
    // ...mapState(['count'])
    // ...mapState({count: 'count'})
    ...mapState('count2', {count1: 'count'}),
    count() {
      console.log('count变化了， myCount跟着变化了');
      let {count} = this.$store.state;
      this.myCount = count;
      return count;
    }
  },
  data() {
    return {
      myCount: this.count
    }
  },
  created() {
    this.myCount = this.count
    console.log('@@this.$store', this.$store);
  },
  /* watch: {
    count(newVal) {
      this.myCount = newVal
    }
  }, */
  methods: {
    ...mapMutations(['SET_COUNT']),
    ...mapMutations('count2', {count2SetCount: 'SET_COUNT'}),
    addCount() {
      this.SET_COUNT(1)
    },
    asyncAddCount() {
      this.$store.dispatch('asyncSetCount', 1)
    },
    moduleCount2AddCount() {
      this.count2SetCount(1)
    }
  },
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