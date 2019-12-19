import React from 'react'
import { Form, Icon, Input, Button, Select, message } from 'antd'
import { register } from '../../services/user'
const { Option } = Select

const RegisterForm = props => {
  const { form } = props
  const { getFieldDecorator, validateFields, getFieldValue } = form

  const handleSubmit = async (e) => {
    e.preventDefault()
    await validateFields()
    await register(getFieldValue())
    message.success('注册成功')
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
          rules: [{ required: true, message: '请输入手机号!' }]
        })(
          <Input
            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="手机号"
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
        {getFieldDecorator('role', {
          rules: [{ required: true, message: '请选择角色!' }]
        })(
          <Select
            style={{ width: '32%' }}
            placeholder="角色"
          >
            <Option value="0">管理员</Option>
            <Option value="1">地勤</Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
                      注册
        </Button>
      </Form.Item>
    </Form>
  )
}

const WrappedRegister = Form.create({})(RegisterForm)

export default WrappedRegister
