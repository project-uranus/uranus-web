import React from 'react'
import { Descriptions, Button } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { checkinList, step } from 'redux/actions'
import history from 'history.js'

const styles = StyleSheet.create({
  card: {
    margin: 30
  }
})

const mapStateToProps = state => ({
  id: state.passengerId.id,
  info: state.passengerInfo.info,
  dataSource: state.checkinList.dataSource,
  weight: state.luggage.weight
})

const mapDispatchToProps = dispatch => ({
  onClick: (props) => {
    const newDataSource = props.dataSource.filter((item) => item.id_number !== props.id)
    console.log(newDataSource)
    dispatch(
      checkinList({
        dataSource: newDataSource
      })
    )
    dispatch(
      step({ current: 0 })
    )
    history.push('/ground/checkin')
    history.go()
  }
})
const map = {
  id_number: '身份证号',
  first_name: '名',
  last_name: '姓',
  email: '邮箱',
  compartment_code: '舱位',
  seat_number: '座位号'
}
const BoardingPass = (props) => {
  const { info } = props
  const infoDescription = Object.keys(info).map(
    (key) => (
      <Descriptions.Item label={map[key]} span={3} key={key}>
        {info[key]}
      </Descriptions.Item>)
  )

  const luggageDescription =
      <Descriptions.Item label={'重量'} span={3} >
        {props.weight}kg
      </Descriptions.Item>

  return (

    <div className={css(styles.card)}>
      <Descriptions title="乘客信息" >
        {infoDescription}
      </Descriptions>
      <Descriptions title="行李信息" >
        {luggageDescription}
      </Descriptions>
      <Button type='primary'
        onClick={() => {
          props.onClick(props)
        }}>
          确认信息并发放登机牌
      </Button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardingPass)
