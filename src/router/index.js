import {
  createRouter,
  createWebHistory,
} from 'vue-router'

const HomeView = () =>
  import('@/views/HomeView.vue')

const BookingView = () =>
  import('@/views/BookingView.vue')

const DashboardView = () =>
  import('@/views/DashboardView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/booking',
    name: 'booking',
    component: BookingView,
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router