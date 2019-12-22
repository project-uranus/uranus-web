import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-f805d5d4e5-uranus.apiary-mock.com/flights',
  'get',
  () => {
    return {
      value: [
        {
          airline: '中国东方航空',
          flight_number: 'MU291',
          aircraft: 'Airbus A320',
          date_of_flight: '2019-12-19',
          departure_time: '2019-12-19T17:15:00Z',
          arrival_time: '2019-12-19T20:40:00Z',
          origin_airport: {
            position: '上海',
            position_code: 'SHA'
          },
          destination_airport: {
            position: '名古屋',
            position_code: 'NGO'
          },
          status: 'scheduled'
        }
      ]
    }
  }
)
