import React from 'react'
import { connect } from 'react-redux'
// components
import Restaurant from '../Restaurant/Restaurant.component'
// actions
import { incrementPage } from '../../redux/search/search.actions'
// Selectors
import {
  selectDisplayedResults,
  selectDoShowMore
} from '../../redux/search/search.selectors'
import { selectRestaurantStatus } from '../../redux/restaurants/restaurants.selectors'
// constants
import { ASYNC_STATUS } from '../../constants'

const RestaurantResults = ({ restaurants, doShowMore, handleShowMore, restaurantsStatus }) => {
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
    <div>
      {restaurants.length > 0 && (
        <ul>
          {restaurants.map(({ id, image_url, name, address, price }) => {
            const restaurant = { image_url, name, address, price }
            return (
              <li key={id}>
                <Restaurant restaurant={restaurant} />
              </li>
            )
          })}
        </ul>
      )}
      {doShowMore && (
        <div>
          <button onClick={() => handleShowMore()}>Show more</button>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: selectDisplayedResults(state),
    doShowMore: selectDoShowMore(state),
    restaurantsStatus: selectRestaurantStatus(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleShowMore: () => dispatch(incrementPage())
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantResults)
