// @ts-nocheck
import React from 'react'
import Container from '../styles/Container'
import Row from '../components/row'

const Movie = () => {
  let request = 'http://localhost:4000/admin/account/programmes-json'
  return (
    <Container>
      <Row title='Future Cinéma' fetchUrl={request} />
    </Container>
  )
}

export default Movie
