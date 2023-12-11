import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
   
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/signUp.vue')
    },
   
    {
      path: '/forgotPasswordPage',
      name: 'forgotPasswordPage',
      component: () => import('../views/forgotPasswordPage.vue')
    },
    
    {
      path: '/askDetail',
      name: 'askDetail',
      component: () => import('../components/askDetail.vue')
    }, 
   
   
   
    
  ]
})

export default router
