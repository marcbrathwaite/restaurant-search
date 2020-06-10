import searchActionTypes from './search.types'

const defaultState = {
  citySearch: '',
  refinedSearch: '',
  filteredResults: [],
  page: 1
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case searchActionTypes.SET_CITY_SEARCH: {
      return {
        ...state,
        citySearch: action.city,
        page: action.page
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
      return {
        ...state,
        filteredResults: [...action.filteredResults]
      }
    }
    case searchActionTypes.INCREMENT_PAGE: {
      return {
        ...state,
        page: state.page + 1
      }
    }
    default: {
      return state
    }
  }
}

export default searchReducer
