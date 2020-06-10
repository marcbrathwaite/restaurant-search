import { createSelector } from 'reselect'

// TODO: Move to constants
const PAGE_COUNT = 2

const selectSearch = (state) => state.search

export const selectPage = createSelector(
  [selectSearch],
  (search) => search.page
)

export const selectCitySearch = createSelector(
  [selectSearch],
  (search) => search.citySearch
)

export const selectRefinedSearch = createSelector(
  [selectSearch],
  (search) => search.refinedSearch
)

export const selectFilteredResults = createSelector(
  [selectSearch],
  (search) => search.filteredResults
)

export const selectDisplayedResults = createSelector(
  [selectFilteredResults, selectPage],
  (filteredResults, page) => filteredResults.slice(0 , page * PAGE_COUNT)
)

export const selectDoShowMore = createSelector(
  [selectFilteredResults, selectPage],
  (filteredResults, page) => filteredResults.length > page * PAGE_COUNT
)
