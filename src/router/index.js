import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: App
//     }
//   ]
// })
