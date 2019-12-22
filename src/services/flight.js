import { api, dataHandler } from '../utils/http'
import 'mock/FlightList'
import 'mock/CreateFlight'
import 'mock/ImportPassenger'

const getFlights = (data) => api.get('/flights', data).then(dataHandler)

const createFlight = (data) => api.post('/flights', data).then(dataHandler)

const importPassenger = (data) => api.post('/passenger', data).then(dataHandler)

const getAirport = () => api.get('/airports').then(dataHandler)

export {
  getFlights,
  createFlight,
  importPassenger,
  getAirport
}
