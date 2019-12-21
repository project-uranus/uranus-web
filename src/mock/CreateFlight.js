import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/api/flight',
  'post',
  (option) => {
    console.log(option)
  }
)
