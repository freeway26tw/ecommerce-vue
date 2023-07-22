// 封裝購物車component
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 1. 定義stat┤ - cartList
    const cartList = ref([])
    // 獲取最新購物車array action
    const updateNewList = async () => {
      const res = await findNewCartListAPI()
      cartList.value = res.result
    }
    // 2. 定義action - addcart
    const addCart = async (good) => {
      const { skuId, count } = good
      if (isLogin.value) {
        // 登入之後的加入購物車邏輯
        await insertCartAPI({ skuId, count })
        updateNewList()
      } else {
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
    }
    // 刪除購物車
    const delCart = async (skuId) => {
      if (isLogin.value) {
        // 使用cart API delete功能
        await delCartAPI([skuId])
        updateNewList()
      } else {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
      }
    }

    // 清除購物車
    const clearCart = () => {
      cartList.value = []
    }

    // 單選功能
    const singleCheck = (skuId, selected) => {
      // 通過skuId找到要修改的對象，然後修改其selected
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }

    // 計算屬性
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    )
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    )

    // 是否全選
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    // 全選功能
    const allCheck = (selected) => {
      // 把cartList中的每一項selected都設置為當前的全選框狀態
      cartList.value.forEach((item) => (item.selected = selected))
    }

    // 已選擇數量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    )
    //  已選擇數量
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    )

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
      clearCart,
      updateNewList,
    }
  },
  {
    persist: true,
  }
)
