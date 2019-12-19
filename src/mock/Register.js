import Mock from 'mockjs'

Mock.mock(
  '/api/user',
  'post',
  (option) => {
    const { userId, phone, role } = JSON.parse(option.body)
    // eslint-disable-next-line no-console
    console.log(typeof role)
    if (userId === 'unique1' && phone === 'unique2') {
      return {
        status: '200',
        message: 'success',
        data: null
      }
    }
    return {
      status: '400',
      message: '用户已存在!',
      data: null
    }
  }
)
