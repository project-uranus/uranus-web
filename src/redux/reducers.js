import actionTypes from 'constants/actionTypes'

const defaultState = {
  sider: {
    isCollapsed: false
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
    default:
      return state
  }
}
