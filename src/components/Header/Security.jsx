import React from 'react'
import { Layout, Menu, Typography } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import icon from 'static/logo.svg'
import history from 'history.js'

const { Header } = Layout
const { Text } = Typography

const styles = StyleSheet.create({
  logo: {
    textAlign: 'left',
    float: 'left'
  },
  svg: {
    height: '32px',
    margin: '16px'
  },
  title: {
    color: 'white',
    marginRight: '16px'
  },
  menu: {
    float: 'right',
    lineHeight: '64px'
  }
})

const UranusHeader = props => (
  <Header>
    <div className={css(styles.logo)}>
      <img className={css(styles.svg)} alt='icon' src={icon} />
      <Text className={css(styles.title)} strong>
        Uranus
      </Text>
    </div>
    <Menu
      className={css(styles.menu)}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
    >
      <Menu.Item key="1" onClick={() => {
        history.push('/')
        history.go()
      }}>登出</Menu.Item>
    </Menu>
  </Header>
)

export default UranusHeader
