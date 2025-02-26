import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import HomeView from '../views/Homeview.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import type { RouteRecordRaw } from 'vue-router'
import exp from 'constants'
import Orders from '@/views/Orders.vue'
import Commodity from '@/views/Commodity.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomeView }, // 默认路由（首页
  { path: '/category/:id', component: Category },  
  { path: '/login', component: Login }, // 登录注册
  { path: '/account', component: Account }, // 账户
  { path: '/Orders', component: Orders }, // 订单
  { path: '/Commodity', component: Commodity }, // 商品
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