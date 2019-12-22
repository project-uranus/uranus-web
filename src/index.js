import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'

import App from 'App'
import store from 'redux/store'
import * as serviceWorker from './serviceWorker'

const engine = createEngine('uranus')
const load = storage.createLoader(engine)
load(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
