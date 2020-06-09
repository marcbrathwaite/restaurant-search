// action types
import types from './restaurants.types'
// constants
import { ASYNC_STATUS } from '../../constants'

const { PENDING, SUCCESS, ERROR, UNINIT } = ASYNC_STATUS

const defaultState = {
  status: UNINIT,
  total_entries: null,
  current_page: null,
  per_page: null,
  entries: []
}

const restaurantsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${types.GET_RESTAURANTS}_${PENDING}`: {
      return {
        ...state,
        status: PENDING
      }
    }
    case `${types.GET_RESTAURANTS}_${SUCCESS}`: {
      const { total_entries, current_page, per_page, restaurants } = action
      return {
        ...state,
        status: SUCCESS,
        total_entries,
        current_page,
        per_page,
        entries: restaurants
      }
    }
    case `${types.GET_RESTAURANTS}_${ERROR}`: {
      return {
        ...state,
        status: ERROR,
        error: action.error
      }
    }
    default:
      return state
  }
}

export default restaurantsReducer
