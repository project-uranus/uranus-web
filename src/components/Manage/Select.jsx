import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import { getAirport } from 'services/flight'
const { Option } = Select

const map = {
  NGO: '名古屋中部国际机场',
  PVG: '上海浦东国际机场'
}

const AirportSelect = (props) => {
  const [list, setList] = useState([])
  useEffect(() => {
    getAirport().then((data) => {
      console.log(data)
      setList(data.map((item) => <Option value={item} key={item}>{map[item]}</Option>))
    })
  }, [])
  const selectCurrency = (e) => {
    const { onChange } = props
    onChange(e)
  }
  return (
    <Select showSearch placeholder='请选择机场'
      onSelect={selectCurrency}>
      {list}
    </Select>
  )
}

export default AirportSelect
