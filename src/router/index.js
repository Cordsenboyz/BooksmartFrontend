import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AuthView from '../views/AuthView.vue'
import CartView from '../views/CartView.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:barcode',
      name: 'product',
      component: ProductView
    },
    {
      path: '/login',
      name: 'login',
      component: AuthView
    },
    {
      path: "/cart",
      name: 'cart',
      component: CartView
    },
    {
      path: "/user",
      name: 'user',
      component: UserView
    }
  ]
})

export default router
