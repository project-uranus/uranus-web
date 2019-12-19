import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'

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
      <Menu.Item key='1'>
        <Icon type='home' />
        <span>首页</span>
      </Menu.Item>
    </Menu>
  </Sider>
)

export default connect(mapStateToProps, mapDispatchToProps)(UranusSider)
