import { getToken } from '../services/token'

const websocket = (url, callback) => {
  // const baseUrl = 'ws://localhost:5000'
  const baseUrl = 'ws://202.120.40.8:30379'
  const socketUrl = baseUrl + url
  const token = getToken()
  // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cmFudXMiLCJleHAiOjE1NzcxMTk2MzcsImlhdCI6MTU3NzAzMzIzNywicm9sZSI6InBhc3NlbmdlciIsImlkZW50aWZpZXIiOjE1NzY4OTYzODI1NjF9.OFjoYjnVNzUnxop8RpEilOXV3Zpd0ncm7mTLi4of5sY'
  const socket = new WebSocket(socketUrl + token)
  socket.onmessage = (data) => callback(data)
  socket.onclose = () => console.log(`closed socket with ${socketUrl}`)
  return socket
}

export default websocket
