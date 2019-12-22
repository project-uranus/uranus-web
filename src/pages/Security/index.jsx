import React from 'react'
import {
  Layout
} from 'antd'
import { Route, Switch } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import Fooder from 'components/Footer'
import Home from './SecurityList'
import Header from 'components/Header/Security'

const { Content } = Layout

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16
  }
})

const ground = props => {
  return (
    <Layout>
      <Layout>
        <Header></Header>
        <Content className={css(styles.content)}>
          <Switch>
            <Route path={'/security/luggage'} exact component={Home} />
          </Switch>
        </Content>
        <Fooder />
      </Layout>
    </Layout>
  )
}

export default ground
