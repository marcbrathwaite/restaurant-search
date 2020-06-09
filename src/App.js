import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {getRestaurants} from './redux/restaurants/restaurants.actions'


const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 800px;
  background-color: coral;
`

const App = ({ getRestaurants }) => {
  useEffect(() => {
    getRestaurants('Toronto')
  }, [getRestaurants])
  
  return (
    <>
      <Helmet>
        <title>Restaurant Search</title>
        <meta
          name="description"
          content="Web App to locate restaurants in different cities"
        />
        <meta name="keywords" content="Restaurant, Food, City" />
        <meta name="author" content="Marc Brathwaite" />
      </Helmet>
      <Container>Test</Container>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  getRestaurants: (city) => dispatch(getRestaurants(city))
})

export default connect(null, mapDispatchToProps)(App)
