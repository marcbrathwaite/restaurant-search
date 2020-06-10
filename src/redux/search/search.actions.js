// Actions
import { getRestaurants } from '../restaurants/restaurants.actions'
// Selectors
import { selectRestaurantEntries } from '../restaurants/restaurants.selectors'
import { selectRefinedSearch } from './search.selectors'
// Types
import searchActionTypes from './search.types'
// utils
import filterResults from '../../utils/filterResults'
import { NameSpecification, AddressSpecification, AreaSpecification } from '../../utils/specifications'

export const getFilteredResults = () => (dispatch, getState) => {
  const state = getState()

  const restaurants = selectRestaurantEntries(state)
  const refinedSearch = selectRefinedSearch(state)

  // filters restaurants by the refinedSearch term
  const filteredResults = filterResults(restaurants, [
    new NameSpecification(refinedSearch),
    new AddressSpecification(refinedSearch),
    new AreaSpecification(refinedSearch)
  ])

  dispatch({
    type: searchActionTypes.GET_FILTERED_RESULTS,
    filteredResults,
    page: 1
  })
}

export const setCitySearch = (city) => (dispatch) => {
  dispatch({
    type: searchActionTypes.SET_CITY_SEARCH,
    city
  })
  dispatch(getRestaurants())
}

export const setRefinedSearch = (refined) => (dispatch) => {
  dispatch({
    type: searchActionTypes.SET_REFINED_SEARCH,
    refined
  })
  dispatch(getFilteredResults())
}

export const incrementPage = () => {
  return {
    type: searchActionTypes.INCREMENT_PAGE
  }
}
