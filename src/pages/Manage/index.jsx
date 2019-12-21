import React from 'react'
import {
  Layout
} from 'antd'
import { Route, Switch } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import Fooder from 'components/Footer'
import Sider from 'components/Sider/Manager'
import CreateFlight from './CreateFlight'
import ViewFlight from './ViewFlight'
import Passenger from './Passenger'

const { Header, Content } = Layout

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16
  }
})

const manage = props => {
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header></Header>
        <Content className={css(styles.content)}>
          <Switch>
            <Route path={'/manage/create'} exact component={CreateFlight} />
            <Route path={'/manage/view'} exact component={ViewFlight} />
            <Route path={'/manage/passenger'} exact component={Passenger} />
          </Switch>
        </Content>
        <Fooder />
      </Layout>
    </Layout>
  )
}

export default manage
