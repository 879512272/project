import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/auth/Login'], resolve)
    },
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../components/home/Home'], resolve)
    }
  ]
})
