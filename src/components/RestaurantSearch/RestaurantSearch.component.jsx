import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

// Actions
import {getRestaurants} from '../../redux/restaurants/restaurants.actions'

const SearchInput = styled.input``
const SearchButton = styled.button``

const RestaurantSearch = ({ getRestaurants }) => {
  const [cityInput, setCityInput] = useState('')
  const [refineInput, setRefineInput] = useState('')

  const handleRefineInputChange = (event) => {
    const { value } = event.target
    setRefineInput(value)
    // dispatch action got filtering
  }

  const handleSubmitCitySearch = () => {
    const sanitizedInput = cityInput.trim()
    if (sanitizedInput) {
      getRestaurants(cityInput)
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
        onChange={handleRefineInputChange}
        placeholder="Refine Search"
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getRestaurants: (city) => dispatch(getRestaurants(city))
})


RestaurantSearch.propTypes = {
  getRestaurants: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(RestaurantSearch)
