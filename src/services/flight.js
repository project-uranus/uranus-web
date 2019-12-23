import { api, dataHandler } from '../utils/http'
// import 'mock/FlightList'
// import 'mock/CreateFlight'
// import 'mock/ImportPassenger'

const getFlights = (passengerId) => api.get('/flights', { params: { passenger_id: passengerId } }).then(dataHandler)

const createFlight = (data) => api.post('/flights', data).then(dataHandler)

const importPassenger = (data) => api.post('/passengers', data).then(dataHandler)

const getAirport = () => api.get('/airports').then(dataHandler)

export {
  getFlights,
  createFlight,
  importPassenger,
  getAirport
}
