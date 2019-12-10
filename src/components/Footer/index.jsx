import React from 'react'
import { Layout } from 'antd'
import { StyleSheet, css } from 'aphrodite'

const { Footer } = Layout

const styles = StyleSheet.create({
  copyright: {
    textAlign: 'center',
    color: 'lightgray',
    fontSize: 'small'
  }
})

const UranusFooter = props => (
  <Footer className={css(styles.copyright)}>
    Copyright © 2019 Project Uranus. All Rights Reserved.
  </Footer>
)

export default UranusFooter
