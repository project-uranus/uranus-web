import { decode } from 'jsonwebtoken'

const setToken = (token) => localStorage.setItem('token', token)
const getToken = () => localStorage.getItem('token')
const getRole = (token) => decode(token).role
const getExpiredTime = (token) => decode(token).exp
const clearToken = () => localStorage.removeItem('token')

export {
  setToken,
  getToken,
  getRole,
  getExpiredTime,
  clearToken
}
