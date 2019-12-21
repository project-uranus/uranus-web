import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/auth/login',
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
