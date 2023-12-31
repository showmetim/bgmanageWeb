import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 样式
import "@/style/index.scss"
// svg图标
import 'virtual:svg-icons-register'
// 全局组件
import gloablComponent from "@/components/index"
// 路由
import router from './router'
import App from '@/App.vue'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
  .use(gloablComponent)
  .use(router)
  .mount('#app')
