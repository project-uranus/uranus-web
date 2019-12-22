import { getToken } from '../services/token'

const websocket = (url, callback) => {
  const baseUrl = 'ws://10.0.0.116:5000'
  const socketUrl = baseUrl + url
  const token = getToken()
  // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cmFudXMiLCJleHAiOjE1NzcxMTk2MzcsImlhdCI6MTU3NzAzMzIzNywicm9sZSI6InBhc3NlbmdlciIsImlkZW50aWZpZXIiOjE1NzY4OTYzODI1NjF9.OFjoYjnVNzUnxop8RpEilOXV3Zpd0ncm7mTLi4of5sY'
  const socket = new WebSocket(socketUrl + token)
  socket.onmessage = (data) => callback(data)
}

export default websocket
