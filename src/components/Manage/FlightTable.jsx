/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { Table, Card, Tag } from 'antd'
import { modal, flightList } from 'redux/actions'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import { getFlights } from 'services/flight'
import { getPassengers } from 'services/passenger'
import timeFormat from 'utils/time'

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
    getPassengers(flightNum).then((data) => {
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
    // {
    //   title: '登机时间',
    //   dataIndex: 'boarding_time',
    //   key: 'boarding_time',
    //   render: timeFormat
    // },
    // {
    //   title: '登机口',
    //   dataIndex: 'boarding_gate',
    //   key: 'boarding_gate'
    // },
    {
      title: '航班状态',
      dataIndex: 'status',
      key: 'status',
      render: (tag) => {
        if (tag === 'scheduled') return <Tag color='blue'>已排定</Tag>
        else if (tag === 'delayed') return <Tag color='magenta'>已延误</Tag>
        else if (tag === 'boarding') return <Tag color='lime'>登机中</Tag>
        else if (tag === 'departed') return <Tag color='cyan'>已出发</Tag>
        else if (tag === 'arrived') return <Tag color='green'>已到达</Tag>
        else if (tag === 'cancelled') return <Tag color='red'>已取消</Tag>
        else return <Tag color='blue'>无</Tag>
      }
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 150,
      render: (record) => (
        <a
          onClick={() => props.onClick(record.id)}
        >查看乘客信息</a>
      )
    }
  ]
  useEffect(() => {
    getFlights().then((data) => {
      data.map((item) => {
        item.origin_airport = item.origin_airport.position
        item.destination_airport = item.destination_airport.position
      })
      props.setFlightList(data)
    })
  }, [])
  return (
    <Card hoverable className={css(styles.card)}>
      <Table columns={columns} dataSource={props.dataSource} rowKey='id' scroll={{ x: 1300 }}/>
    </Card>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightTable)
