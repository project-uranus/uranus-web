import React from 'react'
import { Card } from 'antd'
import Flight from '../../components/Manage/FlightForm'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  userCard: {
    margin: 30
  }
})

const Create = (props) => {
  return (
    <Card title="航班基本信息" hoverable className={css(styles.userCard)}>
      <Flight/>
    </Card>
  )
}

export default Create
