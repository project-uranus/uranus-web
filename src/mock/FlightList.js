import Mock from 'mockjs'

Mock.mock(
  '/api/flightAll',
  'get',
  () => {
    return {
      value: [{
        airline: '中国东方航空',
        flight_number: 'MU291',
        aircraft: 'Airbus A320',
        date_of_flight: '2019-12-19',
        departure_time: '2019-12-19T17:15:00Z',
        arrival_time: '2019-12-19T20:40:00Z',
        origin_airport: {
          name: '上海浦东国际机场',
          IATA: 'PVG',
          position: '上海',
          position_code: 'SHA',
          latitude: '31.143333',
          longitude: '121.805278'
        },
        destination_airport: {
          name: '上海浦东国际机场',
          IATA: 'PVG',
          position: '上海',
          position_code: 'SHA',
          latitude: 31.143333,
          longitude: 121.805278
        },
        boarding_time: '2019-12-19T16:30:00Z',
        boarding_gate: '2',
        status: 0
      }]
    }
  }
)
