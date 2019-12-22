import React from 'react'
import { Layout, Menu } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import history from 'history.js'

const { Header } = Layout

const styles = StyleSheet.create({
  menu: {
    float: 'right',
    lineHeight: '64px'
  }
})

const UranusHeader = props => (
  <Header>
    <Menu
      className={css(styles.menu)}
      theme="dark"
      mode="horizontal"
    >
      <Menu.Item key="1" onClick={() => {
        history.push('/')
        history.go()
      }}>登出</Menu.Item>
    </Menu>
  </Header>
)

export default UranusHeader
