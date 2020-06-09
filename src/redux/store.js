import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios'
// reducers
import rootReducer from './rootReducer'
// services
import ApiClient from '../services/ApiClient'
// constants
import { API_ENDPOINT } from '../constants'

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_ENDPOINT
})

// initalize api client
const apiClient = new ApiClient(axiosInstance)

const middlewares = [logger, thunk.withExtraArgument(apiClient)]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// Hookup Redux dev tools

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store
