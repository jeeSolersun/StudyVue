import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue"

// 使用路由插件
Vue.use(VueRouter)
const routes = [
  {path: '/home', component: Home},
  {path: '/about', component: About},
]
// 定义路由
export default new VueRouter({
  routes
})