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
            name: 'detail',
            path: 'detail/:id/:title', // 使用占位符声明接收params参数
            component: MessageDetail,
            // props写法--解耦$route和组件，具体参考：
            // https://v3.router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F
            // 1、props的第1中写法-对象
            // props: {lan: 'go'}
            // 2、props的第2种写法-布尔值，为true时会将$route.params参数传递给组件的props属性
            // props: true
            // 2、 props的第3种写法-函数，更加灵活，将参数传递给组件的props属性
            props: (route) => {
              return {
                query: route.query,
                params: route.params
              }
            }
          },
        ]
      }
    ]
  },
  {
    // 1、命名路由
    name: 'about',
    path: '/about',
    component: About,
    // 2、路由独享的守卫
    beforeEnter: (to, from, next) => {
      // ...
      console.log('@@beforeEnter', 'About组件路由独享的守卫');
      next();
    }
  },
]
const router = new VueRouter({
  mode: 'history', // 启用history模式，默认是hash模式
  routes
})

// 1、全局路由守卫
// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('@@beforeEach', to, from, next);
  next();
})
// 全局后置守卫
router.afterEach((to, from) => {
  //
  console.log('@@afterEach');
})

/* 全局解析守卫
https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
2.5.0 新增
在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，
区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
# */
// 定义路由
export default router