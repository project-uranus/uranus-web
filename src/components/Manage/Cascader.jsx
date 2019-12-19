import React from 'react'
import { Cascader } from 'antd'

const options = [{
  value: 'shanghai',
  label: '上海',
  children: [
    {
      value: 'hongqiao',
      label: '虹桥国际机场',
      children: [
        {
          value: 'T1',
          label: 'T1'
        },
        {
          value: 'T2',
          label: 'T2'
        }
      ]
    },
    {
      value: 'pudong',
      label: '浦东国际机场',
      children: [
        {
          value: 'T1',
          label: 'T1'
        },
        {
          value: 'T2',
          label: 'T2'
        }
      ]
    }
  ]
}, {
  value: 'beijing',
  label: '北京',
  children: [
    {
      value: 'shoudu',
      label: '首都国际机场',
      children: [
        {
          value: 'T1',
          label: 'T1'
        },
        {
          value: 'T2',
          label: 'T2'
        },
        {
          value: 'T3',
          label: 'T3'
        }
      ]
    },
    {
      value: 'daxing',
      label: '大兴国际机场',
      children: [
        {
          value: 'T1',
          label: 'T1'
        },
        {
          value: 'T2',
          label: 'T2'
        }
      ]
    }
  ]
}]

const AirportCascader = (props) => (
  <Cascader placeholder={props.placeholder} options={options}/>
)

export default AirportCascader
