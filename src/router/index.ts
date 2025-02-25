import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import HomeView from '../views/Homeview.vue'
import Category from '../views/Category.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import type { RouteRecordRaw } from 'vue-router'
import exp from 'constants'
import Orders from '@/views/Orders.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomeView },
  { path: '/category/:id', component: Category },
  { path: '/product/', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/login', component: Login },
  { path: '/account', component: Account },
  { path: '/Orders', component: Orders },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// export default new RouterLink({

//   router:[{
//     path:"/",
//     name:'home',
//     component:Home
//   }]
// })

export default router