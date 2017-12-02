import { API, request } from 'utils'

const query = () => request({
  url: API.tokenVerify,
  method: 'get',
  token: true
})

export { query }
