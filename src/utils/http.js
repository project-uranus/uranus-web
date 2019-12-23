import { message } from 'antd'
import axios from 'axios'
import { getToken } from 'services/token'
import history from 'history.js'

const HTTPErrorHandler = (error) => {
  if (error.response) {
    // got a response with abnormal status code
    if (error.response.data && error.response.data.message) {
      // 401 -> unauthorized
      if (error.response.status === 401) {
        message.error('令牌不存在或已过期，请重新登录！')
        history.push('/')
      } else if (error.response.status === 409) {
        message.warn('航班已存在!')
      } else {
        console.error(error.response)
        message.error(error.response.data.message)
      }
    } else {
      console.error(error.response)
      message.error('发生未知错误!')
    }
  } else {
    console.error(error)
    message.error('发生未知错误!')
  }
  return Promise.reject(error)
}

// the http status code is in 2XX while the response body's code is not normal
const dataHandler = (response) => {
  const { data } = response
  // if (data.status !== '200') {
  //   const content = data.message ? data.message : '未知错误!'
  //   message.error(content)
  //   return Promise.reject(new Error(content))
  // }
  return data.value
}

const baseURL = 'http://10.0.0.116:5000'
// const baseURL = 'http://202.120.40.8:30379'

const api = axios.create({
  baseURL
})

api.interceptors.request.use(
  (config) => (getToken() ? {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${getToken()}`
    }
  } : config),
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  HTTPErrorHandler
)

export { api, dataHandler }
