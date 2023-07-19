// 封裝category data 相關code
import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())

  // 目標: 路由參數變化的時候，可以把重新發送分類API
  onBeforeRouteUpdate((to) => {
    console.log('router changed')
    // 存在問題: 使用最新路油的路由參數請求最新的分類數據
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}