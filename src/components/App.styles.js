import styled from 'styled-components'

import { colors } from '../constants'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`
AppContainer.displayName = 'AppContainer'

export const RestaurantDirectoryContainer = styled.div`
  background-color: #fefefe;
  padding: 10px;
  width: 90%;
  max-width: 800px;
  min-height: 500px;
  border-radius: 10px;
  border: 1px solid ${colors.shuttleGrey};
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

RestaurantDirectoryContainer.displayName = 'RestaurantDirectoryContainer'
