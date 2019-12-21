import { api, dataHandler } from '../utils/http'
import 'mock/FlightPassenger'
import 'mock/PassengerList'
import 'mock/PassengerInfo'
import 'mock/Luggage'
import 'mock/GetLuggage'

const getPassenger = () => api.get('/api/passengerAll').then(dataHandler)

const getFlightPassenger = (data) => api.get('/api/passenger', data).then(dataHandler)

const getPassengerInfo = (data) => api.get('api/passenger/info', data).then(dataHandler)

const sendLuggage = (data) => api.post('api/passenger/luggage', data).then(dataHandler)

const getLuggage = (data) => api.get('api/passenger/luggage', data).then(dataHandler)

export {
  getPassenger,
  getFlightPassenger,
  getPassengerInfo,
  sendLuggage,
  getLuggage
}
