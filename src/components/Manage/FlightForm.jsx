import React from 'react'
import {
  Form,
  Button,
  Select,
  Input,
  DatePicker,
  message,
  InputNumber
} from 'antd'
// import Cascader from './Cascader'
import AirportSelect from './Select'
import Passenger from './PassengerUpload'
import { createFlight } from '../../services/flight'

const { Option } = Select

const Flight = (props) => {
  const { getFieldDecorator, validateFields, getFieldValue } = props.form
  const handleSubmit = async (e) => {
    e.preventDefault()
    await validateFields()
    const flightData = {
      airline: getFieldValue('airline'),
      flight_number: getFieldValue('flight_number'),
      aircraft: getFieldValue('aircraft'),
      origin_airport: getFieldValue('origin_airport'),
      destination_airport: getFieldValue('destination_airport'),
      date_of_flight: getFieldValue('departure_time').format('YYYY-MM-DD'),
      departure_time: getFieldValue('departure_time').format('YYYY-MM-DD HH:mm:ss'),
      arrival_time: getFieldValue('arrival_time').format('YYYY-MM-DD HH:mm:ss'),
      boarding_time: getFieldValue('boarding_time').format('YYYY-MM-DD HH:mm:ss'),
      boarding_gate: getFieldValue('boarding_gate').toString(),
      passengerInfo: getFieldValue('passengerInfo')
    }
    await createFlight(flightData)
    message.success('航班创建成功')
  }

  const normFile = e => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      onSubmit={handleSubmit}
    >
      <Form.Item label="航空公司">
        {getFieldDecorator('airline', {
          rules: [
            {
              required: true,
              message: '请选择航空公司'
            }
          ]
        })(
          <Select showSearch placeholder='请选择航空公司'>
            <Option value='四川航空'>四川航空</Option>
            <Option value='南方航空'>南方航空</Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item label="航班号">
        {getFieldDecorator('flight_number', {
          rules: [
            {
              required: true,
              message: '请输入航班号'
            }
          ]
        })(<Input placeholder='请输入航班号'/>)}
      </Form.Item>
      <Form.Item label="执飞飞机">
        {getFieldDecorator('aircraft', {
          rules: [
            {
              required: true,
              message: '请输入执飞飞机'
            }
          ]
        })(<Input placeholder='请输入执飞飞机'/>)}
      </Form.Item>
      <Form.Item label="起飞机场">
        {getFieldDecorator('origin_airport', {
          rules: [
            {
              required: true,
              message: '请选择起飞机场'
            }
          ]
        })(
        // <Cascader placeholder='请选择起飞机场'/>
          <AirportSelect/>
        )}
      </Form.Item>
      <Form.Item label="到达机场">
        {getFieldDecorator('destination_airport', {
          rules: [
            {
              required: true,
              message: '请选择到达机场'
            }
          ]
        })(
        // <Cascader placeholder='请选择到达机场'/>
          <AirportSelect/>
        )}
      </Form.Item>
      <Form.Item label="起飞时间">
        {getFieldDecorator('departure_time', {
          rules: [
            {
              required: true,
              message: '请选择起飞时间'
            }
          ]
        })(<DatePicker placeholder="请选择起飞时间" showTime/>)}
      </Form.Item>
      <Form.Item label="到达时间">
        {getFieldDecorator('arrival_time', {
          rules: [
            {
              required: true,
              message: '请选择到达时间'
            }
          ]
        })(<DatePicker placeholder="请选择到达时间" showTime/>)}
      </Form.Item>
      <Form.Item label="登机时间">
        {getFieldDecorator('boarding_time', {
          rules: [
            {
              required: true,
              message: '请选择登机时间'
            }
          ]
        })(<DatePicker placeholder="请选择登机时间" showTime/>)}
      </Form.Item>
      <Form.Item label="登机口">
        {getFieldDecorator('boarding_gate', {
          rules: [
            {
              required: true,
              message: '请选择登机口'
            }
          ]
        })(<InputNumber min={1} />)}
      </Form.Item>
      <Form.Item label="乘客信息">
        {getFieldDecorator('passengerInfo', {
          rules: [
            {
              // required: true,
              message: '请上传乘客信息表',
              valuePropName: 'fileList',
              getValueFromEvent: normFile
            }
          ]
        })(<Passenger />)}
      </Form.Item>
      <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
        <Button type='primary' htmlType="submit">
          提交航班信息
        </Button>
      </Form.Item>
    </Form>)
}

const WrappedFlight = Form.create({})(Flight)

export default WrappedFlight
