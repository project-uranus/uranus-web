/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { Table, Card, Tag } from 'antd'
import { modal, flightList } from 'redux/actions'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import { getFlight } from '../../services/flight'
import { getFlightPassenger } from '../../services/passenger'
import timeFormat from '../../utils/time'

const styles = StyleSheet.create({
  card: {
    margin: 30
  }
})

const mapStateToProps = state => ({
  dataSource: state.flightList.dataSource
})

const mapDispatchToProps = dispatch => ({
  onClick: (flightNum) => {
    getFlightPassenger(flightNum).then((data) => {
      dispatch(
        modal({
          visible: true,
          dataSource: data
        })
      )
    })
  },
  setFlightList: (data) => {
    dispatch(
      flightList({ dataSource: data })
    )
  }
})

const FlightTable = (props) => {
  const columns = [
    {
      title: '航班号',
      dataIndex: 'flight_number',
      key: 'flight_num',
      fixed: 'left',
      width: 100
    },
    {
      title: '航空公司',
      dataIndex: 'airline',
      key: 'airline'
    },
    {
      title: '执飞飞机',
      dataIndex: 'aircraft',
      key: 'aircraft'
    },
    {
      title: '起飞机场',
      dataIndex: 'origin_airport',
      key: 'origin_airport'
    }, {
      title: '到达机场',
      dataIndex: 'destination_airport',
      key: 'destination_airport'
    }, {
      title: '飞行日期',
      dataIndex: 'date_of_flight',
      key: 'date_of_flight'
    }, {
      title: '起飞时间',
      dataIndex: 'departure_time',
      key: 'departure_time',
      render: timeFormat
    },
    {
      title: '到达时间',
      dataIndex: 'arrival_time',
      key: 'arrival_time',
      render: timeFormat
    },
    {
      title: '登机时间',
      dataIndex: 'boarding_time',
      key: 'boarding_time',
      render: timeFormat
    },
    {
      title: '登机口',
      dataIndex: 'boarding_gate',
      key: 'boarding_gate'
    },
    {
      title: '航班状态',
      dataIndex: 'status',
      key: 'status',
      render: (tag) => {
        if (tag === 0) return <Tag color='green'>飞行中</Tag>
        else return <Tag color='blue'>飞行结束</Tag>
      }
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      render: (record) => (
        <a
          onClick={() => props.onClick(record.flight_number)}
        >查看乘客信息</a>
      )
    }
  ]
  useEffect(() => {
    getFlight().then((data) => {
      data.map((item) => {
        item.origin_airport = item.origin_airport.name
        item.destination_airport = item.destination_airport.name
      })
      props.setFlightList(data)
    })
  }, [])
  return (
    <Card hoverable className={css(styles.card)}>
      <Table columns={columns} dataSource={props.dataSource} rowKey='flight_number' scroll={{ x: 1300 }}/>
    </Card>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightTable)
