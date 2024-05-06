import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue"
import News from '../pages/home/News.vue'
import Message from '../pages/home/Message.vue'
import MessageDetail from '../pages/home/MessageDetail.vue'

// 使用路由插件
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    component: Home,
    // 多级路由
    children: [
      {
        path: 'news', // 前面不用加/
        component: News
      },
      {
        path: 'message',
        component: Message,
        children: [
          {
            path: 'detail', // 前面不用加/
            component: MessageDetail
          },
        ]
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
]
// 定义路由
export default new VueRouter({
  routes
})