import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import InscriptionsView from '@/components/InscriptionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/ContactView.vue')
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: () => import('../components/InscriptionsView.vue')
    }
  ]
})
export default router