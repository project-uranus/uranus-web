import Mock from 'mockjs'

Mock.mock(
  'https://private-anon-9674dcfccd-uranus.apiary-mock.com/passengers',
  'get',
  () => {
    return {
      value: [{
        id: '1576897149915', // passenger id
        seat: '001A',
        name: 'ZhouXin',
        email: 'cgcg96@sjtu.edu.cn',
        id_number: '119037910039',
        first_name: 'Xin',
        last_name: 'Zhou'
      }]
    }
  }
)
