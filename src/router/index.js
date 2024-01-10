import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/Foods/FoodsView.vue'
import FoodDetailView from '../views/Foods/FoodDetailView.vue'
import AboutView from '../views/AboutView.vue'
import CartView from '../views/CartView.vue'
import NotFound from '../views/NotFound.vue'
import OrderSuccess from '../views/OrderSuccess.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'foods',
    component: FoodsView
  },
  {
    path: '/food/:id',
    name: 'food',
    component: FoodDetailView
  },
  {
    path: '/success',
    name: 'success',
    component: OrderSuccess
  },
  {
    path: '/cart/:message?',
    name: 'cart',
    component: CartView,
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutView
  },
  {
    path: '/:catchAll(.*)',
    name : 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
