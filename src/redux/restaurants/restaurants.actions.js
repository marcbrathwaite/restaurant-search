// action types
import types from './restaurants.types'
// constants
import { ASYNC_STATUS } from '../../constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS
export const getRestaurants = (city) => async (
  dispatch,
  getState,
  apiClient
) => {
  dispatch({
    type: `${types.GET_RESTAURANTS}_${PENDING}`
  })
  try {
    const {
      total_entries,
      current_page,
      per_page,
      restaurants
    } = await apiClient.getRestaurants(city)
    dispatch({
      type: `${types.GET_RESTAURANTS}_${SUCCESS}`,
      total_entries,
      current_page,
      per_page,
      restaurants
    })
  } catch (error) {
    dispatch({
      type: `${types.GET_RESTAURANTS}_${ERROR}`,
      error
    })
  }
}
