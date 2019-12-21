import { api, dataHandler } from '../utils/http'
import 'mock/FlightList'
import 'mock/PassengerFlight'
import 'mock/CreateFlight'

const getFlight = () => api.get('/api/flightAll').then(dataHandler)

const getPassengerFlight = (data) => api.get('/api/flight', data).then(dataHandler)

const createFlight = (data) => api.post('/api/flight', data).then(dataHandler)

const getAirport = () => api.get('/airports').then(dataHandler)

export {
  getFlight,
  getPassengerFlight,
  createFlight,
  getAirport
}
