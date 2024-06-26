import Vue from 'vue'
import App from './App.vue'
import './assets/css/bootstrap.min.css'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({ 
  render: h => h(App)
}).$mount('#app')