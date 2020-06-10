// Actions
import { getRestaurants } from '../restaurants/restaurants.actions'
// Selectors
import { selectRestaurantEntries } from '../restaurants/restaurants.selectors'
import { selectRefinedSearch } from './search.selectors'
// Types
import searchActionTypes from './search.types'
// utils
import filterResults from '../../utils/filterResults'
import {
  NameSpecification,
  AddressSpecification,
  AreaSpecification
} from '../../utils/specifications'

export const getFilteredResults = () => (dispatch, getState) => {
  const state = getState()

  const restaurants = selectRestaurantEntries(state)
  const refinedSearch = selectRefinedSearch(state)

  // filters restaurants by the refinedSearch term if not empty
  const filteredResults = refinedSearch !== '' ? filterResults(restaurants, [
    new NameSpecification(refinedSearch),
    new AddressSpecification(refinedSearch),
    new AreaSpecification(refinedSearch)
  ]) : restaurants

  dispatch({
    type: searchActionTypes.GET_FILTERED_RESULTS,
    filteredResults
  })
}

export const setCitySearch = (city) => (dispatch) => {
  dispatch({
    type: searchActionTypes.SET_CITY_SEARCH,
    page: 1,
    city
  })
  dispatch(getRestaurants())
}

export const setRefinedSearch = (refined) => (dispatch) => {
  dispatch({
    type: searchActionTypes.SET_REFINED_SEARCH,
    page: 1,
    refined
  })
  dispatch(getFilteredResults())
}

export const incrementPage = () => ({
  type: searchActionTypes.INCREMENT_PAGE
})

export const decrementPage = () => ({
  type: searchActionTypes.DECREMENT_PAGE
})

export const clearRefinedSearch = () => (dispatch) => {
  dispatch({
    type: searchActionTypes.CLEAR_REFINED_SEARCH
  })
  dispatch(getFilteredResults())
}
