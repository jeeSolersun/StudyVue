import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

new Vue({ 
  render: h => h(App),
  beforeCreate() {
    // 绑定全局事件总线对象到Vue的原型对象上
    Vue.prototype.$bus = this
  }
}).$mount('#app')
console.log('@@env', process.env.NODE_ENV)