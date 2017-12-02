import { API, request } from 'utils'

const check = () => request({
  url: API.tokenVerify,
  method: 'get',
  token: true
})

const login = (data) => request({
  url: API.login,
  method: 'post',
  data
})

const logout = () => request({
  url: API.logout,
  method: 'get',
  token: true
})

export { check, login, logout }
