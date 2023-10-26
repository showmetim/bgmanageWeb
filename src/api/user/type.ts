// 登录接口参数类型
// 登录提交参数类型
export interface LoginForm {
  username: string
  password: string
}

// 登录返回参数类型
export interface LoginResponse {
  success: boolean
  msg: string
}
// 用户查询接口id类型
interface UserParams {
  id: number
}
export interface LoginUserId {
  params: UserParams
}
// 用户查询接口返回类型
interface UserInfoData {
  id: number
  username: string
  password: string
  role: number
  gender: number
  introduction: string
  avatar: string
  status: number
}
interface User {
  UserInfo: UserInfoData
}
export interface UserInfoRespon {
  success: boolean
  msg: string
  data: User
}