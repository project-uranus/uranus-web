/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { Card, Table } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import history from 'history.js'
import { connect } from 'react-redux'
import { passengerId } from 'redux/actions'
import { getPassenger } from 'services/passenger'

const styles = StyleSheet.create({
  card: {
    margin: 30
  }
})

const mapDispatchToProps = dispatch => ({
  onClick: (id) => {
    dispatch(
      passengerId({ id })
    )
    history.push({ pathname: 'detail', search: id })
    history.go()
  }
})

const Home = (props) => {
  const [list, setList] = useState([])
  const columns = [
    {
      title: '身份证号',
      dataIndex: 'id_number',
      key: 'id_number'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: '操作',
      key: 'action',
      render: (record) => {
        return (
          <a onClick={() => props.onClick(record.id_number)}>值机</a>
        )
      }
    }
  ]
  useEffect(() => {
    getPassenger().then((list) => {
      setList(list)
    })
  }, [])

  return (
    <Card hoverable className={css(styles.card)}>
      <Table
        columns={columns}
        dataSource={list}
        rowKey='id_number' scroll={{ x: 1300 }}
      />
    </Card>
  )
}

export default connect(null, mapDispatchToProps)(Home)
