import { getToken } from '../services/token'

const websocket = (callback) => {
  const socketUrl = 'ws://'
  const socket = new WebSocket(socketUrl)
  socket.onopen = () => {
    socket.send(getToken())
  }
  socket.onmessage = () => callback()
}

export default websocket
