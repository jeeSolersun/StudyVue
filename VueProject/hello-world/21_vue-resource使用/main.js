import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
Vue.config.productionTip = false
// 使用VueResource
Vue.use(VueResource)

new Vue({ 
  render: h => h(App)
}).$mount('#app')