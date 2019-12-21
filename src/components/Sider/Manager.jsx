import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import { toggleSider } from 'redux/actions'

import Logo from './Logo'

const { Sider } = Layout

const mapStateToProps = state => ({
  isCollapsed: state.sider.isCollapsed
})

const mapDispatchToProps = dispatch => ({
  onCollapse: collapsed => {
    dispatch(
      toggleSider({
        isCollapsed: collapsed
      })
    )
  }
})

const UranusSider = props => (
  <Sider
    collapsible
    collapsed={props.isCollapsed}
    onCollapse={props.onCollapse}
  >
    <Logo collapsed={props.isCollapsed} />
    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
      <Menu.Item key='0'>
        <NavLink to='/manage/create'>
          <Icon type='edit' />
          <span>创建航班信息</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key='1'>
        <NavLink to='/manage/view'>
          <Icon type='read' />
          <span>浏览航班信息</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key='2'>
        <NavLink to='/manage/passenger'>
          <Icon type='user' />
          <span>浏览乘客信息</span>
        </NavLink>
      </Menu.Item>
    </Menu>
  </Sider>
)

export default connect(mapStateToProps, mapDispatchToProps)(UranusSider)
