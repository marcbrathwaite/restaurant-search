import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
// Actions
import {
  setCitySearch,
  setRefinedSearch,
  clearRefinedSearch
} from '../../redux/search/search.actions'
// Selectors
import {
  selectCitySearch,
  selectRefinedSearch
} from '../../redux/search/search.selectors'

const SearchInput = styled.input``
const SearchButton = styled.button``

const RestaurantSearch = ({
  setCitySearch,
  setRefinedSearch,
  citySearch,
  refinedSearch,
  clearRefinedSearch
}) => {
  const [cityInput, setCityInput] = useState('')
  const [refinedInput, setRefinedInput] = useState('')

  const handleSubmitRefineSearch = (event) => {
    const sanitizedInput = refinedInput.trim()
    if (sanitizedInput) {
      setRefinedInput('')
      setRefinedSearch(refinedInput)
    }
  }

  const handleSubmitCitySearch = () => {
    const sanitizedInput = cityInput.trim()
    if (sanitizedInput) {
      setCityInput('')
      setCitySearch(cityInput)
    }
  }

  return (
    <div>
      <div>
        <label className="visuallyhidden" htmlFor="city-input">
          Search by City
        </label>
        <SearchInput
          id="city-input"
          value={cityInput}
          onChange={(event) => setCityInput(event.target.value)}
          placeholder="Search by City"
        />
        <SearchButton onClick={handleSubmitCitySearch}>
          City Search
        </SearchButton>
      </div>
      <div>
        <label className="visuallyhidden" htmlFor="refine-input">
          Refine Search
        </label>
        <SearchInput
          id="refine-input"
          value={refinedInput}
          onChange={(event) => setRefinedInput(event.target.value)}
          placeholder="Refine Search"
        />
        <SearchButton onClick={handleSubmitRefineSearch}>
          Refine Search
        </SearchButton>
      </div>
      {citySearch && (
        <div>
          <p>Results for City: {citySearch}</p>
          {refinedSearch && (
            <div>
              <p>Results filtered by: {refinedSearch}</p>
              <p onClick={() => clearRefinedSearch()}>Clear Filter</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  citySearch: selectCitySearch(state),
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
