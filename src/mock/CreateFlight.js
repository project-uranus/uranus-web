import Mock from 'mockjs'

Mock.mock(
  '/api/flight',
  'post',
  (option) => {
    console.log(option)
  }
)
