import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../../src/redux/rootReducer'

const store = createStore(rootReducer, applyMiddleware())

export default store