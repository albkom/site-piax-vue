import { createRouter, createWebHistory } from 'vue-router'

// @ Routes
import PageHome from '@/routes/home/PageHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome,
  },
    {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/routes/home/PageGallery.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('@/routes/about/PageAbout.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const routeExists = routes.some((route) => route.path === to.path)
  if (!routeExists) {
    next('/')
  } else {
    next()
  }
})

export default router
