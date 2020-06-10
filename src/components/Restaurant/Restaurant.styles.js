import styled from 'styled-components'

export const RestaurantContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
RestaurantContainer.displayName = 'RestaurantContainer'

export const RestaurantPicture = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 25px;
  @media screen and (max-width: 576px) {
    width: 65px;
    height: 65px;
  }
`
RestaurantPicture.displayName = 'RestaurantPicture'

export const RestaurantName = styled.h2`
  font-size: 2.5rem;
  text-transform: uppercase;
  @media screen and (max-width: 576px) {
    font-size: 2rem;
  }
`
RestaurantName.displayName = 'RestaurantName'

export const RestaurantDetail = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2px;
`
RestaurantDetail.displayName = 'RestaurantDetail'
