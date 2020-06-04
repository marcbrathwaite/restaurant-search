import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 800px;
`

const App = () => {
  useEffect(() => {
    alert('this is a test')
  }, [])
  return (
    <>
      <Helmet>
        <title>Restaurant Search</title>
        <meta
          name="description"
          content="Web app which allows users to search for restaurants in cities around the world. Uses the Opentable API"
        />
        <meta name="keywords" content="Restaurant, Food, City" />
        <meta name="author" content="Marc Brathwaite" />
      </Helmet>
      <Container>Test</Container>
    </>
  )
}

export default App
