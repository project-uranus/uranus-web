import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'
import { StyleSheet, css } from 'aphrodite'

import icon from 'static/logo.svg'

const { Text } = Typography

const styles = StyleSheet.create({
  logo: {
    textAlign: 'center'
  },
  svg: {
    height: '32px',
    margin: '16px'
  },
  title: {
    color: 'white',
    marginRight: '16px'
  }
})

const Logo = props => (
  <div className={css(styles.logo)}>
    <img className={css(styles.svg)} alt='icon' src={icon} />
    {!props.collapsed && (
      <Text className={css(styles.title)} strong>
        Uranus
      </Text>
    )}
  </div>
)

Logo.propTypes = {
  collapsed: PropTypes.bool
}

export default Logo
