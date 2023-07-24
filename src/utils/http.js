import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router'
const httpInstance = axios.create({
  baseURL: 'https://ecommerce-vg1b.onrender.com/api',
  timeout: 5000,
})

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 1. 從pinia獲取token數據
    const userStore = useUserStore()
    // 2. 按照後端的要求拼接token數據
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  // 統一錯誤提示
  (e) => Promise.reject(e)
)

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore()
    ElMessage({
      type: 'warning',
      message: e.response.data.message,
    })
    // 401 token失效處理
    // 1. 清除local user data
    // 2. redirect to login page
    if (e.response.status === 401) {
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(e)
  }
)

export default httpInstance