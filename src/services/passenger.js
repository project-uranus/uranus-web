import { api, dataHandler } from '../utils/http'
// import 'mock/PassengerList'
// import 'mock/PassengerInfo'
// import 'mock/Luggage'
// import 'mock/GetLuggage'
// import 'mock/SendSecurity'

const getPassengers = (flightNum) => api.get('/passengers', { params: { flight: flightNum } }).then(dataHandler)

const sendLuggage = (data) => api.post('/luggages', data).then(dataHandler)

const sendSecurity = (data) => api.put('/luggages', data).then(dataHandler)

export {
  getPassengers,
  sendLuggage,
  sendSecurity
}
