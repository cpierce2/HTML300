// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {path: '/Products', name: 'products', component: () => ('@/views/Products.vue')},
      {path: '/order', name: 'order', component: () => ('@/views/order.vue')},
      {path: '/about', name: 'about', component: () => ('@/views/about.vue')},
      {path: '/contact', name: 'contact', component: () => ('@/views/contact.vue')},
      {path: '/review', name: 'review', component: () => ('@/views/review.vue')},
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
