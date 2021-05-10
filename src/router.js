import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Search from './views/search.vue';
import Cookies from './views/cookies.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path:'/', component: Home},
    {path:'/search', component: Search},
    {name: "cookies", path:'/cookies', component: Cookies, props: true}
  ]
})

export default router;