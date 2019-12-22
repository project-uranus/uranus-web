import React from 'react'
import {
  Row, Col, Card, Layout
} from 'antd'
import { connect } from 'react-redux'
import WrappedLoginForm from 'components/Login/LoginForm'
import WrappedRegisterForm from 'components/Login/RegisterForm'
import { tabCard } from 'redux/actions'
import { StyleSheet, css } from 'aphrodite'
import Footer from 'components/Footer'
import Header from 'components/Header/Login'

const { Content } = Layout

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16
  },
  card: {
    borderRadius: '10px',
    background: '#fff'
  }
})

const mapStateToProps = state => ({
  tabKey: state.card.tabKey
})

const mapDispatchToProps = dispatch => ({
  changeTab: key => {
    dispatch(
      tabCard({
        tabKey: key
      })
    )
  }
})

const Login = props => {
  const tabList = [
    {
      key: 'login',
      tab: '登录'
    },
    {
      key: 'register',
      tab: '注册'
    }
  ]
  const contentList = {
    login: <WrappedLoginForm />,
    register: <WrappedRegisterForm />
  }
  return (
    <Layout>
      <Header></Header>
      <Content className={css(styles.content)}>
        <Row type="flex" justify="space-around" align="middle" style={{ marginTop: 100 }}>
          <Col span={8}>
            <Card
              hoverable
              className={css(styles.card)}
              tabList={tabList}
              onTabChange={props.changeTab}
            >
              {contentList[props.tabKey]}
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer/>
    </Layout>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
