import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/api/passenger/luggage',
  'post',
  (option) => {
    console.log(option.body)
    return ({
      value: {}
    })
  }
)
