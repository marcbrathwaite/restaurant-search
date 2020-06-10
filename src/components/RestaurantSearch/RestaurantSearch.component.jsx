import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

// Actions
import { setCitySearch } from '../../redux/search/search.actions'

const SearchInput = styled.input``
const SearchButton = styled.button``

const RestaurantSearch = ({ setCitySearch }) => {
  const [cityInput, setCityInput] = useState('')
  const [refineInput, setRefineInput] = useState('')

  const handleSubmitRefineSearch = (event) => {
    setRefineInput('')
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
      <label className="visuallyhidden" htmlFor="city-input">
        Search by City
      </label>
      <SearchInput
        id="city-input"
        value={cityInput}
        onChange={(event) => setCityInput(event.target.value)}
        placeholder="Search by City"
      />
      <SearchButton onClick={handleSubmitCitySearch}>City Search</SearchButton>
      <label className="visuallyhidden" htmlFor="refine-input">
        Refine Search
      </label>
      <SearchInput
        id="refine-input"
        value={refineInput}
        onChange={(event) => setRefineInput(event.target.value)}
        placeholder="Refine Search"
      />
      <SearchButton onClick={handleSubmitRefineSearch}>Refine Search</SearchButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCitySearch: (city) => dispatch(setCitySearch(city))
})

RestaurantSearch.propTypes = {
  setCitySearch: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(RestaurantSearch)
