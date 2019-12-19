import React, { useEffect } from 'react'
import { Select } from 'antd'
import { getAirport } from '../../services/flight'
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

const AirportSelect = (props) => {
  useEffect(() => {
    getAirport().then((data) => {
      props.setAirportList(data.map((item) => <Option value={item} key={item}>{item}</Option>))
    })
  }, [])
  return (
    <Select showSearch placeholder='请选择机场'>
      {props.airportList}
    </Select>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AirportSelect)
