import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Outlet from '../views/Outlet.vue'
import OutletDetail from '../views/OutletDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/outlet',
    name: 'outlet',
    component: Outlet
  },
  {
    path: '/outlet-detail',
    name: 'outlet detail',
    component: OutletDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
