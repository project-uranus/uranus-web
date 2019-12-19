import Mock from 'mockjs'

Mock.mock(
  '/api/auth',
  'post',
  (option) => {
    const { userId, password } = JSON.parse(option)
    if (userId === 'teststaff' && password === 'testpassword') {
      return {
        status: '200',
        message: 'success',
        data: { token: 'tokenTest' }
      }
    }
    return {
      status: '303',
      message: '账号或密码错误',
      data: null
    }
  }
)
