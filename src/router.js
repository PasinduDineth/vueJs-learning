import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Landing from './views/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    }
  ]
})
