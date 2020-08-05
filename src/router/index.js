import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/dial',
          component:()=>import('@/components/views/dial')
        },
        {
          path:'/contactsList',
          component:()=>import('@/components/views/contactsList')
        }
      ]
    }
  ]
})
