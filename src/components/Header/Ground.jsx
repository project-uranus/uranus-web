import React from 'react'
import { Layout, Menu, Typography } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import icon from 'static/logo.svg'
import history from 'history.js'
import { connect } from 'react-redux'
import { logOut } from 'redux/actions'

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

const mapStateToProps = state => ({
  id: state.counter.id
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(
      logOut()
    )
  }
})

const UranusHeader = props => {
  return (
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
      >
        <Menu.Item key="1">柜台号：{props.id}</Menu.Item>
        <Menu.Item key="2" onClick={() => {
          history.push('/')
          history.go()
          props.onClick()
        }}>登出</Menu.Item>
      </Menu>
    </Header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UranusHeader)
