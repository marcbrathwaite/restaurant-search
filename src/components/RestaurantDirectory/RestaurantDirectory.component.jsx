import React from 'react'

// components
import RestaurantSearch from '../RestaurantSearch/RestaurantSearch.component'
import RestaurantResults from '../RestaurantResults/RestaurantResults.component'

const RestaurantDirectory = () => {
  return (
    <>
      <RestaurantSearch />
      <RestaurantResults />
    </>
  )
}

export default RestaurantDirectory