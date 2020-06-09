import { createSelector } from 'reselect'

const selectRestaurants = state => state.restaurants

export const selectRestaurantEntries = createSelector(
  [selectRestaurants],
  restaurants => restaurants.entries
)
