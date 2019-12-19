import Mock from 'mockjs'

Mock.mock(
  '/api/userAll',
  'get',
  () => {
    return [{

    }]
  }
)
