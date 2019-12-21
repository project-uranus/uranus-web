import React from 'react'
import { Steps, Card } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import Description from 'components/Ground/Description'
import Luggage from 'components/Ground/Luggage'
import BoardingPass from 'components/Ground/BoardingPass'
const { Step } = Steps

const styles = StyleSheet.create({
  card: {
    margin: 30
  }
})

const mapStateToProps = state => ({
  current: state.step.current
})

const PassengerDetail = (props) => {
  const steps = [
    {
      title: '确认乘客信息',
      content: <Description/>
    },
    {
      title: '托运行李',
      content: <Luggage />
    },
    {
      title: '发放登机牌',
      content: <BoardingPass/>
    }
  ]
  return (
    <Card hoverable className={css(styles.card)}>
      <Steps current={props.current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className={css(styles.card)}>{steps[props.current].content}</div>
    </Card>
  )
}

export default connect(mapStateToProps, null)(PassengerDetail)
