import React, { useEffect } from 'react'
import { Descriptions, Button } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { step, passengerInfo } from 'redux/actions'
import { getPassengerInfo } from 'services/passenger'

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
  },
  setPassengerInfo: (data) => {
    dispatch(
      passengerInfo({ info: data })
    )
  }
})

const PassengerInfo = (props) => {
  console.log(props)
  const map = {
    id_number: '身份证号',
    first_name: '名',
    last_name: '姓',
    email: '邮箱'
  }
  const { info } = props
  const dataDescription = Object.keys(info).map(
    (key) => (
      <Descriptions.Item label={map[key]} span={3} key={key}>
        {info[key]}
      </Descriptions.Item>)
  )

  useEffect(() => {
    getPassengerInfo(props.id).then((data) => {
      console.log(data)
      props.setPassengerInfo(data)
    })
  }, [])

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
