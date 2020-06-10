import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios'
// reducers
import rootReducer from './rootReducer'
// services
import ApiClient from '../services/ApiClient'
// manager
import RestaurantManager from '../managers/RestaurantManager'
// constants
import { API_ENDPOINT } from '../constants'

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_ENDPOINT
})

// initalize api client
const apiClient = new ApiClient(axiosInstance)
// initialize restaurant manager
const restaurantManager = new RestaurantManager(apiClient)

const middlewares = [thunk.withExtraArgument(restaurantManager)]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

// Hookup Redux dev tools
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store
