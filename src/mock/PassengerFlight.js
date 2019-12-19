import Mock from 'mockjs'

Mock.mock(
  '/api/flight',
  'get',
  () => ({
    value: [
      {
        flight_number: 'A312',
        date_of_flight: '2019-12-19'
      }
    ]
  }
  ))
