需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。
自定义指令总结：
一、定义语法：
（1）.局部指令：
    new Vue({
      directives:{指令名：配置对象}
    })
    或
    new Vue({
      directives (){}
    })
（2）.全局指令：
    Vue.directive(指令名，配置对象)或 Vue.directive(指令名，回调函数)
二、配置对象中常用的3个回调：
  (1).bind：指令与元素成功绑定时调用。
  (2).inserted：指令所在元素被插入页面时调用。
  (3).update：指令所在模板结构被重新解析时调用。
备注：
1.指令定义时不加v-，但使用时要加v-；
2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。