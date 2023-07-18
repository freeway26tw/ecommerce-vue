import { useIntersectionObserver } from '@vueuse/core'

// 定義lazy loading plugin

export const lazyPlugin = {
  install(app) {
    // lazy loading logic
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令綁定的元素
        // binding: binding.value 指令等號後面表達式的值 ie: 圖片url
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(isIntersecting)
          if (isIntersecting) {
            // 進入viewport
            el.src = binding.value
            stop()
          }
        })
      },
    })
  },
}
