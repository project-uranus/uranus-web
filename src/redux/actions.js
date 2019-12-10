import actionTypes from 'constants/actionTypes'

export const toggleSider = content => ({
  type: actionTypes.TOGGLE_SIDER,
  payload: {
    isCollapsed: content.isCollapsed
  }
})
