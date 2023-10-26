import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from "./routes";
// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router