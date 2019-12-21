import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/api/passengerAll',
  'get',
  () => {
    return {
      value: [{
        name: 'Tom',
        id_number: '510107****',
        status: '1'
      }]
    }
  }
)
