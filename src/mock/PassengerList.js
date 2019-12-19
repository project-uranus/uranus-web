import Mock from 'mockjs'

Mock.mock(
  '/api/passengerAll',
  'get',
  () => {
    return {
      value: [{
        name: 'Tom',
        id_number: '510107****'

      }]
    }
  }
)
