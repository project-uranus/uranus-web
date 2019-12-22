/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { Card, Table } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import history from 'history.js'
import { connect } from 'react-redux'
import { passengerId, checkinList, passengerInfo } from 'redux/actions'
// import { getPassengers } from 'services/passenger'
import websocket from 'utils/websocket'

const styles = StyleSheet.create({
  card: {
    margin: 30
  }
})

const mapStateToProps = state => ({
  dataSource: state.checkinList.dataSource
})

const mapDispatchToProps = dispatch => ({
  onClick: (id) => {
    console.log({ id })
    dispatch(passengerId({ id }))
  },
  setCheckinList: (list) => {
    dispatch(checkinList({ dataSource: list }))
  },
  setPassengerInfo: (data) => {
    dispatch(
      passengerInfo({ info: data })
    )
  }
})

// "type": "luggage",
//     "message": [{
//         "information": {
//             "email": "john.doe@example.com",
//             "name": "John Doe",
//             "first_name": "John",
//             "last_name": "Doe",
//             "id_number": "00000000"
//         },
//         "spec": {
//             "compartment_code": "F",
//             "seat_number": "31A"
//         }
//     }]

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
      title: '舱位',
      dataIndex: 'compartment_code',
      key: 'compartment_code'
    },
    {
      title: '座位号',
      dataIndex: 'seat_number',
      key: 'seat_number'
    },
    {
      title: '操作',
      key: 'action',
      render: (record) => {
        return (
          <a onClick={() => {
            props.onClick(record.id)
            props.setPassengerInfo(record)
            console.log(record)
            history.push({ pathname: 'detail', search: record.id.toString() })
            history.go()
          }
          }>值机</a>
        )
      }
    }
  ]
  useEffect(() => {
    // getPassengers().then((list) => {
    //   props.setCheckinList(list)
    // })
    // "type": "luggage",
    //     "message": [{
    //         "information": {
    //             "email": "john.doe@example.com",
    //             "name": "John Doe",
    //             "first_name": "John",
    //             "last_name": "Doe",
    //             "id_number": "00000000"
    //         },
    //         "spec": {
    //             "compartment_code": "F",
    //             "seat_number": "31A"
    //         }
    //     }]

  }, [])
  websocket('/counter/', (data) => {
    console.log(props.dataSource)
    props.setCheckinList([
      ...props.dataSource,
      ...JSON.parse(data.data).message.map(value => ({
        ...value.information,
        ...value.spec
      }))]
    )
  })

  return (
    <Card
      title='管理乘客值机'
      hoverable
      className={css(styles.card)}>
      <Table
        columns={columns}
        dataSource={props.dataSource}
        rowKey='id_number'
      />
    </Card>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
