import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

// 引入初始化樣式文件
import '@/styles/common.scss'

// 引入lazy loading plugin且註冊
import { lazyPlugin } from '@/directives'
// 引入全局組件plugin
import { componentPlugin } from '@/components'

const app = createApp(App)
const pinia = createPinia()
// 註冊持久化plugin
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')