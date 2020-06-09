import React from 'react'
import { connect } from 'react-redux'
// components
import Restaurant from '../Restaurant/Restaurant.component'
// Selectors
import { selectRestaurantEntries } from '../../redux/restaurants/restaurants.selectors'

const RestaurantResults = ({ restaurants }) => {
  return (
    <div>
      {restaurants.length > 0 && (<ul>
        {
          restaurants.map(({ id, image_url, name, address, price }) => {
            const restaurant = {image_url, name, address, price}
            return (
              <li key={id}>
                <Restaurant restaurant={restaurant}/>
              </li>
            )
          })
        }
      </ul>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: selectRestaurantEntries(state)
  }
}

export default connect(mapStateToProps)(RestaurantResults)
