// 封裝購物車component
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    // 1. 定義stat┤ - cartList
    const cartList = ref([])
    // 2. 定義action - addcart
    const addCart = (good) => {
      // 增加購物車操作
      // 已經增加過 - count + 1
      // 沒有增加過 - 直接push
      const item = cartList.value.find((item) => good.skuId === item.skuId)
      if (item) {
        // 有找到
        item.count++
      } else {
        cartList.value.push(good)
      }
    }
    // 刪除購物車
    const delCart = (skuId) => {
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }

    return {
      cartList,
      addCart,
      delCart
    }
  },
  {
    persist: true,
  }
)