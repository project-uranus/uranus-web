import React from 'react'
import { Modal, Table } from 'antd'
import { connect } from 'react-redux'
import { modal } from 'redux/actions'

const mapStateToProps = state => ({
  visible: state.modal.visible,
  dataSource: state.modal.dataSource
})

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '身份证号',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '座位号',
    dataIndex: 'seat',
    key: 'seat'
  }
]

const mapDispatchToProps = dispatch => ({
  onCancel: () => {
    dispatch(
      modal({
        visible: false
      })
    )
  }
})

const Flight = (props) => {
  console.warn(props)
  return (<Modal
    title='详情'
    visible={props.visible}
    onCancel={props.onCancel}
    footer={null}>
    <Table columns={columns} dataSource={props.dataSource} rowKey='id'/>
  </Modal>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight)
