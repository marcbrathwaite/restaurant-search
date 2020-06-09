import React from 'react'

const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <div>
        <img src={restaurant.image_url} alt={`${restaurant.name}`} />
      </div>
      <h2>{restaurant.name}</h2>
      <p>Address: {restaurant.address}</p>
      <p>Price: {restaurant.price}</p>
    </div>
  )
}

export default Restaurant
