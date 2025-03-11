import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import HomeView from '../views/Homeview.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import type { RouteRecordRaw } from 'vue-router'
import Orders from '@/views/Orders.vue'
import Commodity from '@/views/Commodity.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomeView }, // 默认路由（首页
  { path: '/category/:id', component: Category },  
  { path: '/login', component: Login }, // 登录注册
  { path: '/account', component: Account }, // 账户
  { path: '/Orders', component: Orders }, // 订单
  {
    path: '/commodity/:id',
    component: Commodity,
    beforeEnter: (to, from, next) => {
      // 验证ID格式
      if (!/^\d+$/.test(to.params.id as string)) {
        next('/404')
        return
      }
      
      // 验证ID是否存在
      fetch('/products.json')
        .then(res => res.json())
        .then(products => {
          const exists = products.some((p: any) => p.id.toString() === to.params.id)
          exists ? next() : next('/404')
        })
        .catch(() => next('/500'))
    }
  },

  {
    path: '/search/:keyword',
    name: 'Search',
    component: () => import('@/views/SearchResults.vue'),
    props: true
  }
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