import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/api/passenger',
  'get',
  () => ({
    value: [
      {
        name: 'Bob',
        id: '510107****',
        seat: '32B'
      }
    ]
  }
  ))
