import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/default'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue')
        },
        {
          path: '/setmenu',
          name: 'setmenu',
          component: () => import('./views/Setmenu.vue')
        }
      ]
    }
  ]
})
