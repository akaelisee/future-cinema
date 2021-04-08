// @ts-nocheck
import React from 'react'
import Container from '../styles/Container'
import Row from '../components/row'
import request from '../services/requests'

const Movie = () => {
  return (
    <Container>
      <Row title='Future Cinéma' fetchUrl={request.fetchMovies} />
    </Container>
  )
}

export default Movie
