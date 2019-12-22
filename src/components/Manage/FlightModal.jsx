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
  },
  {
    title: '身份证号',
    dataIndex: 'id_number',
    key: 'id_number'
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
    width={800}
    title='详情'
    visible={props.visible}
    onCancel={props.onCancel}
    footer={null}>
    <Table columns={columns} dataSource={props.dataSource} rowKey='id'/>
  </Modal>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight)
