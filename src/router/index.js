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
     },
     {
       path: '/bookDetails',
       name: 'bookDetails',
       component: resolve => import('@/views/home/book_details')
     },
     {
       path: '/courseDetails',
       name: 'courseDetails',
       component: resolve => import('@/views/home/course_details')
     },
     {
       path: '/questionDetails',
       name: 'questionDetails',
       component: resolve => import('@/views/home/question_details')
     },
     {
       path: '/recommend',
       name: 'recommend',
       component: resolve => import('@/views/home/recommend')
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
        component: resolve => import('@/views/home/user/collection/collection')
      },
      {
        path: '/usercenter/feedback',
        name: 'feedback',
        component: resolve => import('@/views/home/user/feedback')
      }
    ]
  },
  {
    path: '/subject',
    name: 'subject',
    component: resolve => require(['@/views/subject/center'], resolve),
    children: [
      {
        path: '/subject/',
        name: 'subjectinfo',
        component: resolve => require(['@/views/subject/info'], resolve)
      },
      {
        path: '/subject/collection',
        name: 'subjectCollection',
        component: resolve => require(['@/views/subject/collection'], resolve)
      },
      {
        path: '/subject/feedback',
        name: 'subjectFeedback',
        component: resolve => require(['@/views/subject/feedback'], resolve)
      },
      {
        path: '/subject/question',
        name: 'subjectQuestion',
        component: resolve => require(['@/views/subject/question'], resolve)
      },
      {
        path: '/subject/answer',
        name: 'subjectAnswer',
        component: resolve => require(['@/views/subject/answer'], resolve)
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: resolve => require(['@/views/admin/center'], resolve),
    children:[
      {
        path: '/admin/',
        name: 'admininfo',
        component: resolve => require(['@/views/admin/info'], resolve)
      },
      {
        path: '/admin/feedback',
        name: 'adminfeedback',
        component: resolve => require(['@/views/admin/feedback'], resolve)
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
