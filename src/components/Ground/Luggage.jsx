import React from 'react'
import { Form, InputNumber, Button } from 'antd'
import { connect } from 'react-redux'
import { step } from 'redux/actions'
import { sendLuggage } from 'services/passenger'

const mapStateToProps = state => ({
  id: state.passengerId.id
})

const mapDispatchToProps = dispatch => ({
  nextStep: () => {
    dispatch(
      step({ current: 2 })
    )
  }
})

const Luggage = (props) => {
  console.log(props)
  const { getFieldDecorator, getFieldsValue, validateFields } = props.form
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()
        await validateFields()
        await getFieldsValue()
        console.log(props.id)
        const data = {
          ...getFieldsValue(),
          id_number: props.id
        }
        await sendLuggage(data)
        props.nextStep()
      }}
    >
      <Form.Item label='行李重量'>
        {getFieldDecorator('weight', {
          rules: [
            {
              required: true,
              message: '请输入行李重量'
            }
          ]
        })(<InputNumber
          min={0}
          formatter={value => `${value}kg`}
          parser={value => value.replace('kg', '')}/>)}
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType="submit">
          提交行李信息
        </Button>
      </Form.Item>
    </Form>
  )
}
const WrappedLuggage = Form.create({})(Luggage)
export default connect(mapStateToProps, mapDispatchToProps)(WrappedLuggage)
