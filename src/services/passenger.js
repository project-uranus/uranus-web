import { api, dataHandler } from '../utils/http'
import '../mock/FlightPassenger'
import '../mock/PassengerList'

const getPassenger = () => api.get('/api/passengerAll').then(dataHandler)

const getFlightPassenger = (data) => api.get('/api/passenger', data).then(dataHandler)

export {
  getPassenger,
  getFlightPassenger
}
