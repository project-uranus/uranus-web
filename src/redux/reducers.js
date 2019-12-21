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
    case actionTypes.STEP:
      return {
        ...state,
        step: {
          ...state.step,
          current: action.payload.current
        }
      }
    case actionTypes.ID:
      return {
        ...state,
        passengerId: {
          ...state.passengerId,
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
    default:
      return state
  }
}
