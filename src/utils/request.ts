import axios from "axios"
import { ElMessageBox } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 30000
})
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // 请求前将token塞到请求头
  const token = sessionStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // 响应后将token存储
  const { authorization } = response.headers
  authorization && sessionStorage.setItem("token", authorization)

  return response.data;

}, function (error) {
  const { status, data } = error.response
  if (status === 401) {
    ElMessageBox.confirm(
      data.msg,
      '操作提示',
      {
        confirmButtonText: '确认',
        showCancelButton: false,
        type: 'warning',
      }
    )
      .then(() => {
        window.location.href = "/login"
      })
      .catch(() => {
        window.location.href = "/login"
      })
  }
  return Promise.reject(error);
});

export default request