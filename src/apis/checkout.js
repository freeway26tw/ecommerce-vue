import request from '@/utils/http'

// 獲取詳情API
export const getCheckInfoAPI = () => {
  return request({
    url: '/member/order/pre',
  })
}