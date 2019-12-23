import React from 'react'
import {
  Layout
} from 'antd'
import { Route, Switch } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import Fooder from 'components/Footer'
import Home from './PassengerList'
import Detail from './PassengerCheckin'
import Header from 'components/Header/Ground'

const { Content } = Layout

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16
  }
})

const Ground = props => {
  return (
    <Layout>
      <Layout>
        <Header></Header>
        <Content className={css(styles.content)}>
          <Switch>
            <Route path={'/ground/checkin'} exact component={Home} />
            <Route path={'/ground/detail'} component={Detail} />
          </Switch>
        </Content>
        <Fooder />
      </Layout>
    </Layout>
  )
}

export default Ground
