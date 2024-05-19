<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <nav class="navbar navbar-expand-sm bg-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/home/news">News</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/home/message">Message</router-link>
            </li>
          </ul>
        </nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    console.log('@@Home组件 created()');
  },
  // 路由组件被激活时触发
  activated() {
    console.log('@@Home组件 activated');
  },
  // 路由组件失活时触发
  deactivated() {
    console.log('@@Home组件 deactivated');
  }
  
}
</script>

<style></style>