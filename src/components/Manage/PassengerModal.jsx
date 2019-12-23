import React from 'react'
import { Modal, Table, Tag } from 'antd'
import { connect } from 'react-redux'
import { modal } from 'redux/actions'
import timeFormat from 'utils/time'

const mapStateToProps = state => ({
  visible: state.modal.visible,
  dataSource: state.modal.dataSource
})

const mapDispatchToProps = dispatch => ({
  onCancel: () => {
    dispatch(
      modal({ visible: false })
    )
  }
})

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
  }
]

const Flight = (props) => {
  return (<Modal
    width={1000}
    title='详情'
    visible={props.visible}
    onCancel={props.onCancel}
    footer={null}>
    <Table columns={columns} dataSource={props.dataSource} rowKey='flight_number'/>
  </Modal>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight)
