import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { StyleSheet, css } from 'aphrodite'

import Sider from 'components/Sider'
import Footer from 'components/Footer'
import Home from 'components/Home'

const { Header, Content } = Layout

const styles = StyleSheet.create({
  layout: {
    height: '100vh'
  },
  content: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16
  }
})

const App = () => {
  return (
    <Layout className={css(styles.layout)}>
      <Router>
        <Sider />
        <Layout>
          <Header></Header>
          <Content className={css(styles.content)}>
            <Switch>
              <Route path={'/'} exact component={Home} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </Layout>
  )
}

export default App
