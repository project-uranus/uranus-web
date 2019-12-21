import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/api/passenger/info',
  'get',
  () => ({
    value:
      {
        id_number: '510107****',
        first_name: 'Meixian',
        last_name: 'Jiang',
        email: 'jmxse1997@outlookc.com'
      }
  }
  ))
