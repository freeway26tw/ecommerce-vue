<script setup>
import { onMounted } from 'vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 觸發獲取導航列表的action
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>


<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key 破壞複用機制 強制銷毀重建 -->
  <!-- <RouterView :key="$route.fullPath"/> -->
  <RouterView />
  <LayoutFooter />
</template>