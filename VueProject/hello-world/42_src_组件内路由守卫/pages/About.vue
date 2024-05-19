<template>
  <div>
    <h1>我是About组件</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  created() {
    console.log('@@About组件 created()');
  },
  // 路由组件被激活时触发
  activated() {
    console.log('@@About组件 activated');
  },
  // 路由组件失活时触发
  deactivated() {
    console.log('@@About组件 deactivated');
  },
  // 3、组件内的路由守卫
  // 注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫。
  // 对于 beforeRouteUpdate 和 beforeRouteLeave 来说，this 已经可用了，所以不支持传递回调，因为没有必要了。
  /* beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
  }， */
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('@@beforeRouteEnter About组件');
    next()
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('@@beforeRouteUpdate About组件');
    next()
  },
  // 这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('@@beforeRouteLeave About组件');
    next()
  }
}
</script>

<style>

</style>