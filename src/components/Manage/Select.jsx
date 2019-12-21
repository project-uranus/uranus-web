import React, { useEffect } from 'react'
import { Select } from 'antd'
import { getAirport } from 'services/flight'
import { connect } from 'react-redux'
import { airportList } from 'redux/actions'
const { Option } = Select

const mapStateToProps = state => ({
  airportList: state.airportList.dataSource
})

const mapDispatchToProps = dispatch => ({
  setAirportList: (data) => {
    dispatch(
      airportList({ dataSource: data })
    )
  }
})

const map = {
  NGO: '名古屋中部国际机场',
  PVG: '上海浦东国际机场'
}

const AirportSelect = (props) => {
  useEffect(() => {
    getAirport().then((data) => {
      props.setAirportList(data.map((item) => <Option value={item} key={item}>{map[item]}</Option>))
    })
  }, [])
  const selectCurrency = (e) => {
    const { onChange } = props
    onChange(e)
  }
  return (
    <Select showSearch placeholder='请选择机场'
      onSelect={selectCurrency}>
      {props.airportList}
    </Select>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AirportSelect)
