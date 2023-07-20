// 把components中的所有組件進行全局化註冊
// 透過plugin方式
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    // app.component('組件名字', 組件配置對象)
    app.component('ImageView', ImageView)
    app.component('Sku', Sku)
  }
}