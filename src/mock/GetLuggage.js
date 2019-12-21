import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/api/passenger/luggage',
  'get',
  (option) => {
    console.log(option)
    return ({
      value: { weight: '20' }
    })
  }
)
