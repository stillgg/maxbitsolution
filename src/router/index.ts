import { createRouter, createWebHistory } from 'vue-router'
import { AVAILABLE_COCTAILS_CODES } from '@/constants'

import BlankLayout from '@/layouts/BlankLayout.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        return { path: `/coctails/${AVAILABLE_COCTAILS_CODES[0].path}` }
      }
    },
    {
      path: '/coctails/:coctailCode',
      meta: {
        layout: AppLayout
      },
      component: () => import('@/views/coctail/Index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      meta: {
        layout: BlankLayout
      },
      component: () => import('@/views/errors/404.vue')
    }
  ]
})

export default router
