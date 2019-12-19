import actionTypes from 'constants/actionTypes'

const defaultState = {
  sider: {
    isCollapsed: false
  },
  card: {
    tabKey: 'login'
  },
  modal: {
    visible: false,
    dataSource: []
  },
  flightList: {
    dataSource: []
  },
  passengerList: {
    dataSource: []
  },
  airportList: {
    dataSource: []
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDER:
      return {
        ...state,
        sider: {
          ...state.sider,
          isCollapsed: action.payload.isCollapsed
        }
      }
    case actionTypes.TAB_CARD:
      return {
        ...state,
        card: {
          ...state.card,
          tabKey: action.payload.tabKey
        }
      }
    case actionTypes.MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          visible: action.payload.visible,
          dataSource: action.payload.dataSource
        }
      }
    case actionTypes.FLIGHT_LIST:
      return {
        ...state,
        flightList: {
          ...state.flightList,
          dataSource: action.payload.dataSource
        }
      }
    case actionTypes.AIRPORT_LIST:
      return {
        ...state,
        airportList: {
          ...state.airportList,
          dataSource: action.payload.dataSource
        }
      }
    case actionTypes.PASSENGER_LIST:
      return {
        ...state,
        passengerList: {
          ...state.passengerList,
          dataSource: action.payload.dataSource
        }
      }
    default:
      return state
  }
}
