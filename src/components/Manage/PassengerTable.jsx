/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { Table, Card } from 'antd'
import { modal, passengerList } from 'redux/actions'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import { getPassenger } from '../../services/passenger'
import { getPassengerFlight } from '../../services/flight'

const styles = StyleSheet.create({
  card: {
    margin: 30
  }
})

const mapStateToProps = state => ({
  dataSource: state.passengerList.dataSource
})

const mapDispatchToProps = dispatch => ({
  onClick: (name) => {
    getPassengerFlight(name).then((data) => {
      dispatch(
        modal({
          visible: true,
          dataSource: data
        })
      )
    })
  },
  setPassengerList: (data) => {
    dispatch(
      passengerList({ dataSource: data })
    )
  }
})

const PassengerTable = (props) => {
  const columns = [
    {
      title: '昵称',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 100
    },
    {
      title: '身份证号',
      dataIndex: 'id_number',
      key: 'id_number',
      fixed: 'left',
      width: 100
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
    }, {
      title: '姓',
      dataIndex: 'last_name',
      key: 'last_name'
    }, {
      title: '名',
      dataIndex: 'first_name',
      key: 'first_name'
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 200,
      render: (record) => (
        <a
          onClick={() => props.onClick(record.name)}
        >查看历史航班信息</a>
      )
    }
  ]
  useEffect(() => {
    getPassenger().then((data) => {
      props.setPassengerList(data)
    })
  }, [])
  return (
    <Card hoverable className={css(styles.card)}>
      <Table columns={columns} dataSource={props.dataSource} rowKey='id_number' scroll={{ x: 1300 }}/>
    </Card>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerTable)
