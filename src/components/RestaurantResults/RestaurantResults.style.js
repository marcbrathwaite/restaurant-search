import styled from 'styled-components'
// constants
import { colors } from '../../constants'

export const RestaurantResult = styled.li`
  padding: 20px 10px;
  border-bottom: 1px solid ${colors.lightGrey};
  &:last-child {
    border-bottom: none;
  }
`
RestaurantResult.displayName = 'RestaurantResult'
