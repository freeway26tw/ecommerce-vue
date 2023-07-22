// 封裝購物車相關API
import request from '@/utils/http'

// 加入購物車
export const insertCartAPI = ({ skuId, count}) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 獲取最新的購物車列表
export const findNewCartListAPI = () => {
  return request({
    url: '/member/cart'
  })
}