// 管理用戶數據相關

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    // 1. 定義管理用戶數據的state
    const userInfo = ref({})
    // 2. 定義獲取API數據的action函數
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result
      // 合併購物車操作
      await mergeCartAPI(cartStore.cartList.map(item => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
        }
      }))
      cartStore.updateNewList()
    }

    // 登出時清楚用戶資料
    const clearUserInfo = () => {
      userInfo.value = {}
      // 執行清除購物車的action
      cartStore.clearCart()
    }

    // 3. 以object的方式把state與action return
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  }
)