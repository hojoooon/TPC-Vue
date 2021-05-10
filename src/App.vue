<template>
  <div>
    <TopNav />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNav from './components/layout/topNav.vue'

export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
