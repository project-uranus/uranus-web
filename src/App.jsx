import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'

import Login from 'pages/Login'
import Manage from 'pages/Manage'
import Ground from 'pages/Ground'
import Security from 'pages/Security'

moment.locale('zh-cn')

const styles = StyleSheet.create({
  layout: {
    minHeight: '100vh'
  },
  content: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16
  }
})

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={css(styles.layout)}>
        <Router>
          <Switch>
            <Route path={'/manage'} component={Manage} />
            <Route path={'/ground'} component={Ground} />
            <Route path={'/security'} component={Security} />
            <Route path={'/'} exact component={Login} />
          </Switch>
        </Router>
      </Layout>
    </ConfigProvider>
  )
}

export default App
