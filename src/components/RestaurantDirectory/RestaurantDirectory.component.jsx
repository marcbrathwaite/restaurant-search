import React from 'react'
import { connect } from 'react-redux'
// components
import RestaurantSearch from '../RestaurantSearch/RestaurantSearch.component'
import RestaurantResults from '../RestaurantResults/RestaurantResults.component'
import PaginationControl from '../PaginationControl/PaginationControl.component'
// selectors
import { selectedHasResults } from '../../redux/search/search.selectors'
// Styles
import {
  RestaurantSearchContainer,
  RestaurantResultsContainer
} from './RestaurantDirectory.styles'

const RestaurantDirectory = ({ hasResults }) => {
  return (
    <>
      <>
        <RestaurantSearchContainer>
          <RestaurantSearch />
        </RestaurantSearchContainer>
        <RestaurantResultsContainer>
          <RestaurantResults />
        </RestaurantResultsContainer>
        {hasResults && <PaginationControl />}
      </>
    </>
  )
}

const mapStateToProps = (state) => ({
  hasResults: selectedHasResults(state)
})
export default connect(mapStateToProps)(RestaurantDirectory)
