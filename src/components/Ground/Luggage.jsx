import React from 'react'
import { Form, InputNumber, Button } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { step, luggage } from 'redux/actions'
import { sendLuggage } from 'services/passenger'

const styles = StyleSheet.create({
  button: {
    margin: 10
  }
})

const mapStateToProps = state => ({
  id: state.passengerId.id
})

const mapDispatchToProps = dispatch => ({
  nextStep: (weight) => {
    dispatch(
      step({ current: 2 })
    )
    dispatch(
      luggage({ weight })
    )
  }
})

const Luggage = (props) => {
  console.log(props)
  const { getFieldDecorator, getFieldValue, validateFields } = props.form
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()
        await validateFields()
        const weight = getFieldValue('weight')
        console.log(typeof weight)
        const data = {
          weight: weight,
          passenger_id: props.id
        }
        await sendLuggage(data)
        props.nextStep(weight)
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
          step={0.1}
          formatter={value => `${value}kg`}
          parser={value => value.replace('kg', '')}/>)}
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType="submit" className={css(styles.button)}>
          提交行李信息
        </Button>
        <Button type='info' className={css(styles.button)}>
          跳过
        </Button>
      </Form.Item>
    </Form>
  )
}
const WrappedLuggage = Form.create({})(Luggage)
export default connect(mapStateToProps, mapDispatchToProps)(WrappedLuggage)
