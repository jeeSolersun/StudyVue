import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getPow(state) {
      return Math.pow(state.count, 2)
    }
  },
  mutations: {
    addCount(state, payload) {
        state.count+=payload;
    }
  },
  actions: {

  }
  // ...
})
export default store;