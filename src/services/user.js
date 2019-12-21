import { api, dataHandler } from '../utils/http'
// import 'mock/Login'

const register = (data) => api.post('/auth/sign_up', data).then(dataHandler)

const auth = (data) => api.post('/auth/login', data).then(dataHandler)

export {
  register,
  auth
}
