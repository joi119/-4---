import Vue from 'vue'
import Router from 'vue-router'
import access from '@/components/access'
import chat from '@/components/chat'
import creategroup from '@/components/creategroup'
import profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/access'
    },
    {
      path: '/access',
      name: 'access',
      component: access
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/creategroup',
      name: 'creategroup',
      component: creategroup
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
  ]
})
