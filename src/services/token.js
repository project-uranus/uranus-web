import { decode } from 'jsonwebtoken'

const setToken = (token) => localStorage.setItem('token', token)
const getToken = () => localStorage.getItem('token')
const getRole = (token) => decode(token).role
const getUserId = (token) => decode(token).aud
const getUsername = (token) => decode(token).username
const getPhone = (token) => decode(token).phone
const getExpiredTime = (token) => decode(token).exp
const clearToken = () => localStorage.removeItem('token')

export {
  setToken,
  getToken,
  getRole,
  getUserId,
  getUsername,
  getPhone,
  getExpiredTime,
  clearToken
}
