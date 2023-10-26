// 注册全局组件方法
import SvgIcon from './SvgIcon/index.vue'

const allGolablComponents = { SvgIcon }

export default {
  install(app) {
    for (const key in allGolablComponents) {
      app.component(key, allGolablComponents[key])
    }
  }
}