import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-right' },
    },
    {
      path: '/expanding-cards',
      name: 'expanding-cards',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExpandingCards.vue'),
      meta: { transition: 'slide-right' },
    },
    {
      path: '/progress-steps',
      name: 'progress-steps',
      component: () => import('../views/ProgressSteps.vue'),
      meta: { transition: 'slide-right' },
    }
  ]
})

export default router
