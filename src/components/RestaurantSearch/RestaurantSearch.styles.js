import styled from 'styled-components'
// constants
import { colors } from '../../constants'

export const SearchContainer = styled.div`
  margin-bottom: 20px;
`
SearchContainer.displayName = 'SearchContainer'

export const SearchInputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  :first-child {
    margin-bottom: 10px;
  }
`
SearchInputContainer.displayName = 'SearchInputContainer'

export const SearchInput = styled.input`
  display: block;
  font-family: 'Raleway', sans-serif;
  width: 70%;
  border: none;
  border-bottom: 1px solid ${colors.gainsboro};
  padding: 10px 0;
`
SearchInput.displayName = 'SearchInput'

export const SearchButton = styled.button`
  width: 25%;
`
SearchButton.displayName = 'SearchButton'

export const ClearFilter = styled.p`
  text-decoration: underline;
  cursor: pointer;
`
ClearFilter.displayName = 'ClearFilter'

