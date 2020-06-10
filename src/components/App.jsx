import React from 'react'
import { Helmet } from 'react-helmet'
// components
import RestaurantDirectory from './RestaurantDirectory/RestaurantDirectory.component'
// styles
import { GlobalStyle } from './global.styles'
import { AppContainer, RestaurantDirectoryContainer } from './App.styles'

const App = () => {
  return (
    <>
      <Helmet>
        <title>Restaurant Directory</title>
        <meta
          name="description"
          content="Web App to locate restaurants in different cities"
        />
        <meta name="keywords" content="Restaurant, Food, City" />
        <meta name="author" content="Marc Brathwaite" />
      </Helmet>
      <GlobalStyle />
      <AppContainer>
        <RestaurantDirectoryContainer>
          <RestaurantDirectory />
        </RestaurantDirectoryContainer>
      </AppContainer>
    </>
  )
}

export default App
