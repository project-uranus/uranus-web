import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { auth } from '../../services/user'
import { setToken, getRole } from 'services/token'
import history from 'history.js'
import { counter } from 'redux/actions'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
  setCounter: (id) => {
    dispatch(
      counter({ id })
    )
  }
})

const LoginForm = props => {
  const { form } = props
  const { getFieldDecorator, validateFields, getFieldsValue } = form

  const handleSubmit = async (e) => {
    e.preventDefault()
    await validateFields()
    const data = await auth(getFieldsValue())
    console.log(data)
    const { token } = data
    setToken(token)
    const role = getRole(token)
    if (role === 'staff') {
      const counterId = data.counter_id
      props.setCounter(counterId)
    }
    const paths = {
      administrator: 'manage/create',
      staff: 'ground/checkin',
      security: '/security/luggage'
    }
    history.push(paths[role])
    history.go()
  }

  return (
    <Form
      onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('id_number', {
          rules: [{ required: true, message: '请输入用户名!' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="用户名"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入密码!' }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="密码"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

const WrappedLogin = Form.create({})(LoginForm)

export default connect(null, mapDispatchToProps)(WrappedLogin)
