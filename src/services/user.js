import { api, dataHandler } from '../utils/http'
// import '../mock/Login'

const url = '/api/user'
const authUrl = '/api/auth'

const register = (data) => api.post(url, data).then(dataHandler)

const auth = (data) => api.post(authUrl, data).then(dataHandler)

export {
  register,
  auth
}
