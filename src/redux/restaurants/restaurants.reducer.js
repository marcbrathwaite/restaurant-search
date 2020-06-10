// action types
import types from './restaurants.types'
// constants
import { ASYNC_STATUS } from '../../constants'

const { PENDING, SUCCESS, ERROR, UNINIT } = ASYNC_STATUS

const defaultState = {
  status: UNINIT,
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
      return {
        ...state,
        status: SUCCESS,
        entries: action.res
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
