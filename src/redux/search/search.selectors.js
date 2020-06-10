import { createSelector } from 'reselect'

const selectSearch = (state) => state.search

export const selectFilteredResults = createSelector(
  [selectSearch],
  (search) => search.filteredResults
)

export const selectShowMore = createSelector(
  [selectSearch],
  (search) => search.showMore
)

export const selectPage = createSelector(
  [selectSearch],
  (search) => search.page
)