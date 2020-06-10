// action types
import types from './restaurants.types'
// actions
import { getFilteredResults } from '../search/search.actions'
// constants
import { ASYNC_STATUS } from '../../constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS
export const getRestaurants = (city) => async (
  dispatch,
  getState,
  manager
) => {
  dispatch({
    type: `${types.GET_RESTAURANTS}_${PENDING}`
  })
  try {
    const res = await manager.getRestaurants(city)
    dispatch({
      type: `${types.GET_RESTAURANTS}_${SUCCESS}`,
      res
    })
    dispatch(getFilteredResults())
  } catch (error) {
    dispatch({
      type: `${types.GET_RESTAURANTS}_${ERROR}`,
      error
    })
  }
}
