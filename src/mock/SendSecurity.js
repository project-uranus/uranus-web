import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/api/passenger/security',
  'put',
  (option) => {
    console.log(option)
    return {
      value: null
    }
  }
)
