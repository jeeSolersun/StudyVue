import Vue from 'vue'
import App from './App.vue'
// import {mixin1, mixin2} from './mixins.js'
Vue.config.productionTip = false

// 全局混入
// Vue.mixin(mixin1,)
// Vue.mixin(mixin2)

new Vue({ 
  render: h => h(App),
}).$mount('#app')
console.log('@@env', process.env.NODE_ENV)