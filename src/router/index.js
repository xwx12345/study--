import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
   path: '/',
   component: resolve => require(['@/components/MainComponent.vue'], resolve),
   children: [
     {
       path: '/',
       name: 'home',
       component: resolve => import('@/views/home/home')
     },
     {
       path: '/books',
       name: 'books',
       component: resolve => import('@/views/home/books')
     },
     {
       path: '/courses',
       name: 'courses',
       component: resolve => import('@/views/home/courses')
     },
     {
       path: '/usercenter',
       name: 'usercenter',
       component: resolve => import('@/views/home/user/center'),
       children: [
         {
           path: '/usercenter/userinfo',
           name: 'userinfo',
           component: resolve => import('@/views/home/user/info')
         },
         {
           path: '/usercenter/collection',
           name: 'collection',
           component: resolve => import('@/views/home/user/collection')
         },
         {
           path: '/usercenter/feedback',
           name: 'feedback',
           component: resolve => import('@/views/home/user/feedback')
         }
       ]
     }
     ]
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/login/login'], resolve)
  },
  {
    path: '/signup',
    name: 'signup',
    component: resolve => require(['@/views/login/signup'], resolve)
  }
]

const router = new VueRouter({
  routes
})

export default router
