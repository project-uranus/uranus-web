import actionTypes from 'constants/actionTypes'

const toggleSider = content => ({
  type: actionTypes.TOGGLE_SIDER,
  payload: {
    isCollapsed: content.isCollapsed
  }
})

const tabCard = content => ({
  type: actionTypes.TAB_CARD,
  payload: {
    tabKey: content.tabKey
  }
})

const modal = content => ({
  type: actionTypes.MODAL,
  payload: {
    visible: content.visible,
    dataSource: content.dataSource
  }
})

const flightList = content => ({
  type: actionTypes.FLIGHT_LIST,
  payload: {
    dataSource: content.dataSource
  }
})
const passengerList = content => ({
  type: actionTypes.PASSENGER_LIST,
  payload: {
    dataSource: content.dataSource
  }
})

const airportList = content => ({
  type: actionTypes.AIRPORT_LIST,
  payload: {
    dataSource: content.dataSource
  }
})

export {
  toggleSider,
  tabCard,
  modal,
  flightList,
  passengerList,
  airportList
}
