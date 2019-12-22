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
  },
  step: {
    current: 0
  },
  passengerId: {
    id: ''
  },
  passengerInfo: {
    info: {}
  },
  message: {
    visible: false,
    id: ''
  },
  checkinList: {
    dataSource: []
  },
  securityList: {
    dataSource: []
  },
  counter: {
    id: ''
  },
  luggage: {
    weight: 0.0
  }
}

export default (state = defaultState, action) => {
  console.log(action.type)
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
    case actionTypes.STEP:
      return {
        ...state,
        step: {
          ...state.step,
          current: action.payload.current
        }
      }
    case actionTypes.ID:
      console.log(action.payload.id)
      return {
        ...state,
        passengerId: {
          id: action.payload.id
        }
      }
    case actionTypes.INFO:
      return {
        ...state,
        passengerInfo: {
          ...state.passengerInfo,
          info: action.payload.info
        }
      }
    case actionTypes.MESSAGE:
      return {
        ...state,
        message: {
          ...state.message,
          visible: action.payload.visible,
          id: action.payload.id
        }
      }
    case actionTypes.CHECKIN_LIST:
      return {
        ...state,
        checkinList: {
          ...state.checkinList,
          dataSource: action.payload.dataSource
        }
      }
    case actionTypes.SECURITY_LIST:
      console.log(action.payload.dataSource)
      return {
        ...state,
        securityList: {
          ...state.securityList,
          dataSource: action.payload.dataSource
        }
      }
    case actionTypes.COUNTER:
      return {
        ...state,
        counter: {
          ...state.counter,
          id: action.payload.id
        }
      }
    case actionTypes.LUGGAGE:
      return {
        ...state,
        luggage: {
          ...state.luggage,
          weight: action.payload.weight
        }
      }
    case actionTypes.LOG_OUT:
      return defaultState
    default:
      return state
  }
}
