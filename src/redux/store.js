import { createStore, applyMiddleware, compose } from 'redux'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'

import reducers from './reducers'

const reducer = storage.reducer(reducers)
const engine = createEngine('uranus')
const middleware = storage.createMiddleware(engine)

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(middleware)
)

const store = createStore(reducer, enhancer)

export default store
