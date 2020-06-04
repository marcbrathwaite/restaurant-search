import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

const middlewares = [logger, thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// Hookup Redux dev tools

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store
