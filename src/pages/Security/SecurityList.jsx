/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { Card, Table, Divider, Tag } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { message, securityList } from 'redux/actions'
import { sendSecurity } from 'services/passenger'
import Modal from 'components/Security/Modal'
import websocket from 'utils/websocket'

const styles = StyleSheet.create({
  card: {
    margin: 30
  }
})

const mapStateToProps = state => ({
  dataSource: state.securityList.dataSource
})

const mapDispatchToProps = dispatch => ({
  setSecurityList: (list) => {
    console.log(list)
    dispatch(securityList({ dataSource: list }))
  },
  pass: (id, props) => {
    sendSecurity({
      id: id,
      passed: false,
      message: ''
    }).then(() => {
      console.log(id)
      const newDataSource = props.dataSource.filter((item) => item.id_number !== id)
      console.log(newDataSource)
      dispatch(
        securityList({
          dataSource: newDataSource
        })
      )
    })
  },
  fail: (id) => {
    dispatch(
      message({
        visible: true,
        id: id
      })
    )
  }
})

// "message": {
//   "information": {
//       "email": "john.doe@example.com",
//       "name": "John Doe",
//       "first_name": "John",
//       "last_name": "Doe",
//       "id_number": "00000000"
//   },
//   "luggages": 1576930163000
// }

const Home = (props) => {
  const columns = [
    {
      title: '身份证号',
      dataIndex: 'id_number',
      key: 'id_number'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '姓',
      dataIndex: 'last_name',
      key: 'last_name'
    },
    {
      title: '名',
      dataIndex: 'first_name',
      key: 'first_name'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: '行李编号',
      dataIndex: 'luggages',
      key: 'luggages'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: tag => {
        const color = tag === 'uncheck' ? 'blue' : 'red'
        const value = tag === 'uncheck' ? '未检查' : '检查不通过'
        return (
          <Tag color={color} key={tag}>
            {value}
          </Tag>
        )
      }
    },
    {
      title: '操作',
      key: 'action',
      render: (record) => {
        return (
          <span>
            <a onClick={() => props.pass(record.luggages, props)}>行李审核通过</a>
            <Divider type="vertical" />
            <a onClick={() => props.fail(record.luggages)}>行李审核不通过</a>
          </span>
        )
      }
    }
  ]
  useEffect(() => {
    // getPassengers().then((list) => {
    //   props.setSecurityList(list)
    // })
    // "message": {
    //   "information": {
    //       "email": "john.doe@example.com",
    //       "name": "John Doe",
    //       "first_name": "John",
    //       "last_name": "Doe",
    //       "id_number": "00000000"
    //   },
    //   "luggages": 1576930163000
    // }
  }, [])

  websocket('/security/', (data) => {
    console.log(data)
    props.setSecurityList([
      ...props.dataSource, {
        ...JSON.parse(data.data).message.information,
        luggages: JSON.parse(data.data).message.luggages,
        status: 'uncheck'
      }])
  })

  return (
    <Card
      title='乘客行李检查'
      hoverable
      className={css(styles.card)}>
      <Table
        columns={columns}
        dataSource={props.dataSource}
        rowKey='id_number'
      />
      <Modal/>
    </Card>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
