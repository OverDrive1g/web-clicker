import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Settings from './views/Settings.vue'
import Roadmap from './views/Roadmap.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/roadmap',
      name: 'Roadmap',
      component: Roadmap
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})
