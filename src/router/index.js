import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlanView from '@/views/PlanView.vue'
import AddsOnView from '@/views/AddsOnView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/select-plan',
      name: 'plan',
      component: PlanView
    },
    {
      path: '/adds-on',
      name:'adds-on',
      component: AddsOnView
    },
  ]
})

export default router
