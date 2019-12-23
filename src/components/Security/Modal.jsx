import React from 'react'
import { Modal, Input, Button, Form } from 'antd'
import { connect } from 'react-redux'
import { message, securityList } from 'redux/actions'
import { sendSecurity } from 'services/passenger'

const { TextArea } = Input

const mapStateToProps = state => ({
  visible: state.message.visible,
  id: state.message.id,
  dataSource: state.securityList.dataSource
})

const mapDispatchToProps = dispatch => ({
  onCancel: (props) => {
    dispatch(
      message({
        visible: false
      })
    )

    const newDataSource = props.dataSource.map((item) => {
      if (item.luggages === props.id) item.status = 'checkFailed'
      return item
    })

    dispatch(
      securityList({
        dataSource: newDataSource
      })
    )
  }
})

const SecurityModal = (props) => {
  const { form } = props
  const { getFieldDecorator, validateFields, getFieldValue } = form

  const handleSubmit = async (e) => {
    e.preventDefault()
    await validateFields()
    await sendSecurity({
      id: props.id,
      passed: false,
      message: getFieldValue('message')
    })
    props.onCancel(props)
  }

  return (<Modal
    title='详情'
    visible={props.visible}
    onCancel={props.onCancel}
    footer={null}>
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('message', {
          rules: [{ required: true, message: '请输入违禁行李信息!' }]
        })(
          <TextArea rows={4} />
        )}
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          type='primary'>
        发送消息
        </Button>
      </Form.Item>
    </Form>
  </Modal>)
}

const WrappedSecurityModal = Form.create({})(SecurityModal)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedSecurityModal)
