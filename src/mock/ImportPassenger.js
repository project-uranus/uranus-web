import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/passenger',
  'post',
  (option) => {
    console.log(option)
    return { value: null }
  }
)
