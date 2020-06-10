import searchActionTypes from './search.types'

const defaultState = {
  citySearch: '',
  refinedSearch: '',
  filteredResults: [],
  page: 1,
  showMore: false
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case searchActionTypes.SET_CITY_SEARCH: {
      return {
        ...state,
        citySearch: action.city
      }
    }
    case searchActionTypes.SET_REFINED_SEARCH: {
      return {
        ...state,
        refinedSearch: action.refined
      }
    }
    case searchActionTypes.CLEAR_CITY_SEARCH: {
      return {
        ...state,
        citySearch: ''
      }
    }
    case searchActionTypes.CLEAR_REFINED_SEARCH: {
      return {
        ...state,
        refinedSearch: ''
      }
    }
    case searchActionTypes.GET_FILTERED_RESULTS: {
      const { filteredResults, page, showMore } = action
      return {
        ...state,
        filteredResults: [...state.filteredResults, ...filteredResults],
        page,
        showMore
      }
    }
    default: {
      return state
    }
  }
}

export default searchReducer
