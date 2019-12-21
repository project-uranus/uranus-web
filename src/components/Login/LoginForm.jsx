import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { auth } from '../../services/user'
import { setToken, getRole } from 'services/token'
import history from 'history.js'

const LoginForm = props => {
  const { form } = props
  const { getFieldDecorator, validateFields, getFieldValue } = form

  const handleSubmit = async (e) => {
    e.preventDefault()
    await validateFields()
    const data = await auth(getFieldValue())
    const { token } = data
    setToken(token)
    const role = getRole(token)
    const paths = {
      administrator: 'manage/create',
      staff: 'ground/home'
    }
    history.push(paths[role])
  }

  return (
    <Form
      onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('userId', {
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

export default WrappedLogin
