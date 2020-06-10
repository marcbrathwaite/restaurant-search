import { combineReducers } from 'redux'

import restaurantsReducer from './restaurants/restaurants.reducer'
import searchReducer from './search/search.reducer'

export default combineReducers({
  restaurants: restaurantsReducer,
  search: searchReducer
})