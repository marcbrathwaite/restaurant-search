import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Actions
import {
  setCitySearch,
  setRefinedSearch,
  clearRefinedSearch
} from '../../redux/search/search.actions'
// Selectors
import {
  selectRefinedSearch
} from '../../redux/search/search.selectors'
// Styles
import {
  SearchInputContainer,
  SearchInput,
  SearchButton,
  ClearFilter,
  SearchContainer
} from './RestaurantSearch.styles'

const RestaurantSearch = ({
  setCitySearch,
  setRefinedSearch,
  refinedSearch,
  clearRefinedSearch
}) => {
  const [cityInput, setCityInput] = useState('')
  const [refinedInput, setRefinedInput] = useState('')

  const handleSubmitRefineSearch = (event) => {
    event.preventDefault()
    const sanitizedInput = refinedInput.trim()
    if (sanitizedInput) {
      setRefinedSearch(refinedInput)
    }
  }

  const handleSubmitCitySearch = (event) => {
    event.preventDefault()
    const sanitizedInput = cityInput.trim()
    if (sanitizedInput) {
      setCitySearch(cityInput)
    }
  }

  const handleClearFilter = () => {
    setRefinedInput('')
    clearRefinedSearch()
  }

  return (
    <div>
      <SearchContainer>
        <SearchInputContainer onSubmit={handleSubmitCitySearch}>
          <label className="visuallyhidden" htmlFor="city-input">
            Search by City
          </label>
          <SearchInput
            id="city-input"
            value={cityInput}
            onChange={(event) => setCityInput(event.target.value)}
            placeholder="Search by City"
          />
          <SearchButton type="submit">City Search</SearchButton>
        </SearchInputContainer>
        <SearchInputContainer onSubmit={handleSubmitRefineSearch}>
          <label className="visuallyhidden" htmlFor="refine-input">
            Refine Search
          </label>
          <SearchInput
            id="refine-input"
            value={refinedInput}
            onChange={(event) => setRefinedInput(event.target.value)}
            placeholder="Refine Search"
          />
          <SearchButton type="submit">Refine Search</SearchButton>
        </SearchInputContainer>
      </SearchContainer>
      {refinedSearch && (
        <ClearFilter onClick={handleClearFilter}>
          Clear Filter
        </ClearFilter>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  refinedSearch: selectRefinedSearch(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCitySearch: (city) => dispatch(setCitySearch(city)),
  setRefinedSearch: (refine) => dispatch(setRefinedSearch(refine)),
  clearRefinedSearch: () => dispatch(clearRefinedSearch())
})

RestaurantSearch.propTypes = {
  setCitySearch: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSearch)
