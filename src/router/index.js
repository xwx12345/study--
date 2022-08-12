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
       component: resolve => import('@/views/home/usercenter')
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
