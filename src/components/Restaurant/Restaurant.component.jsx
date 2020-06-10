import React from 'react'
// styles
import {
  RestaurantContainer,
  RestaurantPicture,
  RestaurantName,
  RestaurantDetail
} from './Restaurant.styles'

const Restaurant = ({ restaurant }) => {
  return (
    <RestaurantContainer>
      <RestaurantPicture
        src={restaurant.image_url}
        alt={`${restaurant.name}`}
      />
      <div>
        <RestaurantName>{restaurant.name}</RestaurantName>
        <RestaurantDetail><span>Address:</span> {restaurant.address}</RestaurantDetail>
        <RestaurantDetail><span>Price:</span>{restaurant.price}</RestaurantDetail>
      </div>
    </RestaurantContainer>
  )
}

export default Restaurant
