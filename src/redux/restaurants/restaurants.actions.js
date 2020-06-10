// action types
import types from './restaurants.types'
// actions
import { getFilteredResults } from '../search/search.actions'
// Selectors
import { selectCitySearch } from '../search/search.selectors'
// constants
import { ASYNC_STATUS } from '../../constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS
export const getRestaurants = () => async (
  dispatch,
  getState,
  manager
) => {
  try {
    const state = getState()
    const citySearch = selectCitySearch(state)
    dispatch({
      type: `${types.GET_RESTAURANTS}_${PENDING}`
    })
    const res = await manager.getRestaurants(citySearch )
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
