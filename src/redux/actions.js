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

const message = content => ({
  type: actionTypes.MESSAGE,
  payload: {
    visible: content.visible,
    id: content.id
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

const checkinList = content => ({
  type: actionTypes.CHECKIN_LIST,
  payload: {
    dataSource: content.dataSource
  }
})

const securityList = content => ({
  type: actionTypes.SECURITY_LIST,
  payload: {
    dataSource: content.dataSource
  }
})

const step = content => ({
  type: actionTypes.STEP,
  payload: {
    current: content.current
  }
})

const passengerId = content => ({
  type: actionTypes.ID,
  payload: {
    id: content.id
  }
})

const passengerInfo = content => ({
  type: actionTypes.INFO,
  payload: {
    info: content.info
  }
})

const counter = content => ({
  type: actionTypes.COUNTER,
  payload: {
    id: content.id
  }
})

const logOut = content => ({
  type: actionTypes.LOG_OUT,
  payload: {}
})

const luggage = content => ({
  type: actionTypes.LUGGAGE,
  payload: {
    weight: content.weight
  }
})

export {
  toggleSider,
  tabCard,
  modal,
  flightList,
  passengerList,
  airportList,
  step,
  passengerId,
  passengerInfo,
  message,
  checkinList,
  securityList,
  counter,
  logOut,
  luggage
}
