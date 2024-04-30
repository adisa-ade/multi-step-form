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
    // {
    //   path:'/select-plan',
    //   name: 'plan',
    //   component: () => import ("../views/CardTwo.vue")
    // },
    // {
    //   path: '/adds-on',
    //   name:'adds-on',
    //   component: () => import ("../views/CardThree.vue")
    // },
  ]
})

export default router
