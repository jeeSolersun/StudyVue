export default {
  namespaced: true, // 启用命名空间
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
}