import React, { useEffect, useState } from 'react'
import { Descriptions, Button } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { getLuggage } from 'services/passenger'
import history from 'history.js'

const styles = StyleSheet.create({
  card: {
    margin: 30
  }
})

const mapStateToProps = state => ({
  id: state.passengerId.id,
  info: state.passengerInfo.info
})

const BoardingPass = (props) => {
  const [luggage, setLuggage] = useState([])
  console.log(props)
  const map = {
    weight: '重量'
  }
  const { info } = props
  const infoDescription = Object.keys(info).map(
    (key) => (
      <Descriptions.Item label={map[key]} span={3} key={key}>
        {info[key]}
      </Descriptions.Item>)
  )

  const luggageDescription = Object.keys(luggage).map(
    (key) => (
      <Descriptions.Item label={map[key]} span={3} key={key}>
        {luggage[key]}
      </Descriptions.Item>)
  )

  useEffect(() => {
    getLuggage(props.id).then((data) => {
      console.log(data)
      setLuggage(data)
    })
  }, [])

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
          history.push('/ground/checkin')
          history.go()
        }}>
          确认信息并发放登机牌
      </Button>
    </div>
  )
}

export default connect(mapStateToProps, null)(BoardingPass)
