// Actions
import { getRestaurants } from '../restaurants/restaurants.actions'
// Selectors
import { selectRestaurantEntries } from '../restaurants/restaurants.selectors'
// Types
import searchActionTypes from './search.types'

// TODO: Move to constants
const PAGECOUNT = 25
export const getFilteredResults = () => (dispatch, getState) => {
  const state = getState()
  const page = state.search.page
  const restaurants = selectRestaurantEntries(state)

  const start = (page - 1) * PAGECOUNT
  const end = page * PAGECOUNT

  const filteredResults = restaurants.slice(start, end)

  const showMore = end < restaurants.length

  dispatch({
    type: searchActionTypes.GET_FILTERED_RESULTS,
    filteredResults,
    showMore,
    page: page + 1
  })
}

export const setCitySearch = (city) => dispatch => {
  dispatch({
    type: searchActionTypes.SET_CITY_SEARCH,
    city
  })
  dispatch(getRestaurants(city))
}