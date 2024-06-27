import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contador',
    name: 'contador',
    component: () => import( '../components/ContadorTest.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import( '../components/Parent.vue')
  },
  {
    path: '/child',
    name: 'child',
    component: () => import( '../components/Child.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
