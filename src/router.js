import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Landing from './views/Landing'
import Dashboard from './views/Dashboard'
import Rooms from './views/Rooms'

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
      component: Landing,
      children:[
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/rooms',
          name: 'rooms',
          component: Rooms
        }
      ]
    }
  ]
})
