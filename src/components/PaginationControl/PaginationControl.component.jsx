import React from 'react'
import { connect } from 'react-redux'
// selectors
import {
  selectPage,
  selectHasMorePages
} from '../../redux/search/search.selectors'

// actions
import { incrementPage, decrementPage } from '../../redux/search/search.actions'
// styles
import {
  PaginationControlContainer,
  ArrowContainer,
  CurrentPageContainer
} from './PaginationControl.styles'

const PaginationControl = ({
  currentPage,
  incrementPage,
  hasMorePages,
  decrementPage
}) => {
  return (
    <PaginationControlContainer>
      {currentPage > 1 && (
        <ArrowContainer
          aria-label="Go to previous page"
          title="Previous Page"
          onClick={() => decrementPage()}
        >
          &#10094;
        </ArrowContainer>
      )}
      <CurrentPageContainer>{currentPage}</CurrentPageContainer>
      {hasMorePages && (
        <ArrowContainer
          aria-label="Got to next page"
          title="Next Page"
          onClick={() => incrementPage()}
        >
          &#10095;
        </ArrowContainer>
      )}
    </PaginationControlContainer>
  )
}

const mapStateToProps = (state) => ({
  currentPage: selectPage(state),
  hasMorePages: selectHasMorePages(state)
})

const mapDispatchToProps = (dispatch) => ({
  incrementPage: () => dispatch(incrementPage()),
  decrementPage: () => dispatch(decrementPage())
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationControl)
