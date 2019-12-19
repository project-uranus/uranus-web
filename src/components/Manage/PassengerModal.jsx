import React from 'react'
import { Modal, Table } from 'antd'
import { connect } from 'react-redux'
import { modal } from 'redux/actions'

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
    key: 'flight_number'
  }, {
    title: '飞行日期',
    dataIndex: 'date_of_flight',
    key: 'date_of_flight'
  }
]

const Flight = (props) => {
  return (<Modal
    title='详情'
    visible={props.visible}
    onCancel={props.onCancel}
    footer={null}>
    <Table columns={columns} dataSource={props.dataSource} rowKey='flight_number'/>
  </Modal>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight)
