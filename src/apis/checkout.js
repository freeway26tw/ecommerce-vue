import request from '@/utils/http'

// 獲取詳情API
export const getCheckInfoAPI = () => {
  return request({
    url: '/member/order/pre',
  })
}

// 創建訂單
export const createOrderAPI = (data) => {
  return request({
    url: '/member/order',
    method: 'POST',
    data
  })
}