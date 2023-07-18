import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化樣式文件
import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定義全局指令

app.directive('img-lazy', {
  mounted(el, binding) {
    // el: 指令綁定的元素
    // binding: binding.value 指令等號後面表達式的值 ie: 圖片url
    console.log(el, binding)
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting)
      if (isIntersecting) {
        // 進入viewport
        el.src = binding.value
      }
    })
  },
})
