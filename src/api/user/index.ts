// 统一管理用户相关的接口
import request from "@/utils/request";
// 参数类型
import type { LoginForm, LoginResponse, LoginUserId, UserInfoRespon } from "./type";
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = 'user/info'
}

// 登录方法
export const reqLogin = (data: LoginForm) => request.post<any, LoginResponse>(API.LOGIN_URL, data);
// 用户信息
export const reqUserInfo = (params: LoginUserId) => request.get<any, UserInfoRespon>(API.USERINFO_URL, { params });