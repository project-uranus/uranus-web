import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/api/flight',
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
