import Mock from 'mockjs'

Mock.mock(
  '/api/passenger',
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
