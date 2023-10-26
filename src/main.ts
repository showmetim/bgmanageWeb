import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 样式
import "@/style/index.scss"
import App from '@/App.vue'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
import 'virtual:svg-icons-register'
import gloablComponent from "@/components/index"
app.use(gloablComponent)
app.mount('#app')
