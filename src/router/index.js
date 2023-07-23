// createRouter: 創建router instance
// createWebHistory: 創建history模式路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Payback from '@/views/Pay/Payback.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component對應關係的位置
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory,
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail,
        },
        {
          path: 'cartlist',
          name: 'cartList',
          component: CartList,
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: Checkout,
        },
        {
          path: 'paycallback/:orderId',
          name: 'paycallback',
          component: Payback,
        },
        {
          path: 'member',
          name: 'member',
          component: Member,
          children: [
            {
              path: '',
              name: 'user',
              component: UserInfo,
            },
            {
              path: 'order',
              name: 'order',
              component: UserOrder,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404/index.vue'),
    },
  ],
  // 路由滾動行為訂製
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
