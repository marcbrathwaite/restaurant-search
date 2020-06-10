import React from 'react'
import { connect } from 'react-redux'
// components
import Restaurant from '../Restaurant/Restaurant.component'
// actions
import { getFilteredResults } from '../../redux/search/search.actions'
// Selectors
import {
  selectFilteredResults,
  selectShowMore
} from '../../redux/search/search.selectors'

const RestaurantResults = ({ restaurants, showMore, getFilteredResults }) => {
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
      {showMore && (
        <div>
          <button onClick={() => getFilteredResults()}>Show more</button>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: selectFilteredResults(state),
    showMore: selectShowMore(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFilteredResults: () => dispatch(getFilteredResults())
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantResults)
