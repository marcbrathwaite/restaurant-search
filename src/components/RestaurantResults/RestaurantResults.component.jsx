import React from 'react'
import { connect } from 'react-redux'
// components
import Restaurant from '../Restaurant/Restaurant.component'
// Selectors
import { selectDisplayedResults } from '../../redux/search/search.selectors'
import { selectRestaurantStatus } from '../../redux/restaurants/restaurants.selectors'
// styles
import { RestaurantResult } from './RestaurantResults.style'
// constants
import { ASYNC_STATUS } from '../../constants'

const RestaurantResults = ({ restaurants, restaurantsStatus }) => {
  if (restaurants.length === 0 && restaurantsStatus === ASYNC_STATUS.SUCCESS) {
    return <div>No Results found</div>
  }
  if (restaurantsStatus === ASYNC_STATUS.ERROR) {
    return <div>Error retrieving results</div>
  }

  if (restaurantsStatus === ASYNC_STATUS.PENDING) {
    return <div>Retrieving results</div>
  }

  return (
    <>
      {restaurants.length > 0 && (
        <ul>
          {restaurants.map(({ id, image_url, name, address, price }) => {
            const restaurant = { image_url, name, address, price }
            return (
              <RestaurantResult key={id}>
                <Restaurant restaurant={restaurant} />
              </RestaurantResult>
            )
          })}
        </ul>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: selectDisplayedResults(state),
    restaurantsStatus: selectRestaurantStatus(state)
  }
}

export default connect(mapStateToProps)(RestaurantResults)
