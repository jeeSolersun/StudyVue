import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'


Vue.use(Vuex)
// 创建sotre对象
export default new Vuex.Store({
  modules: {
    // 命名为count2
    count2:count
  },
  state: {
    count: 0
  },
  getters: {
    getCount(state, getters) {
      return state.count;
    }
  },
  mutations: {
    SET_COUNT(state, payload) {
      state.count += payload
    }
  },
  actions: {
    asyncSetCount({dispatch, commit}, payload) {
    // asyncSetCount(context, payload) {
      // console.log('@@asyncSetCount', context);
      setTimeout(() => {
        commit('SET_COUNT', payload)
      }, 1000);
    }
  }
})
