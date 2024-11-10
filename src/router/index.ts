import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'
import Category from '../views/Category.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomeView },
  { path: '/category/:id', component: Category },
  { path: '/product/:id', component: ProductDetail },
  { path: '/cart', component: Cart }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router