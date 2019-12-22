import React from 'react'
import { Descriptions, Button } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { step } from 'redux/actions'

const styles = StyleSheet.create({
  card: {
    margin: 30
  }
})

const mapStateToProps = state => ({
  id: state.passengerId.id,
  info: state.passengerInfo.info
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(
      step({ current: 1 })
    )
  }
})
// "type": "luggage",
//     "message": [{
//         "information": {
//             "email": "john.doe@example.com",
//             "name": "John Doe",
//             "first_name": "John",
//             "last_name": "Doe",
//             "id_number": "00000000"
//         },
//         "spec": {
//             "compartment_code": "F",
//             "seat_number": "31A"
//         }
//     }]

const PassengerInfo = (props) => {
  console.log(props)
  const map = {
    id_number: '身份证号',
    name: '姓名',
    first_name: '名',
    last_name: '姓',
    email: '邮箱',
    compartment_code: '舱位',
    seat_number: '座位号'
  }
  const { info } = props
  const dataDescription = Object.keys(info).map(
    (key) => (
      <Descriptions.Item label={map[key]} span={3} key={key}>
        {info[key]}
      </Descriptions.Item>)
  )

  return (
    <div className={css(styles.card)}>
      <Descriptions title="乘客信息" >
        {dataDescription}
      </Descriptions>
      <Button type='primary' onClick={props.onClick}>确认乘客信息</Button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerInfo)
