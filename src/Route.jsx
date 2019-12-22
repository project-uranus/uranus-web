import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import Header from 'components/Header'
import Sider from 'components/Sider'
import Footer from 'components/Footer'
import Login from 'components/Login'

const { Content } = Layout

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

const Page = (props) => {
  return (
    <Layout className={css(styles.layout)}>
      <Router>
        <Sider />
        <Layout>
          <Header></Header>
          <Content className={css(styles.content)}>
            <Switch>
              <Route path={'/content/test'} exact component={Login} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </Layout>
  )
}

export default Page
