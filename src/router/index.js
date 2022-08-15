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
       path: '/search',
       name: 'search',
       component: resolve => import('@/views/home/search')
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
  },
  //把usercenter移到外面了，因为要后面加路由
  {
    path: '/usercenter',
    name: 'usercenter',
    component: resolve => import('@/views/home/user/center'),
    children: [
      {
        path: '/usercenter/',
        name: 'userinfo',
        component: resolve => import('@/views/home/user/info')
      },
      {
        path: '/usercenter/collection',
        name: 'collection',
        component: resolve => import('@/views/home/user/collection/collection'),
        children: [
         {
           path: '/usercenter/collection/collected_books',
           name: 'collected_books',
           component: resolve => import('@/views/home/user/collection/collected_books')
         },
         {
           path: '/usercenter/collection/collected_courses',
           name: 'collected_courses',
           component: resolve => import('@/views/home/user/collection/collected_courses')
         },
         {
           path: '/usercenter/collection/collected_questions',
           name: 'collected_questions',
           component: resolve => import('@/views/home/user/collection/collected_questions')
         }
        ]
      },
      {
        path: '/usercenter/feedback',
        name: 'feedback',
        component: resolve => import('@/views/home/user/feedback')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
