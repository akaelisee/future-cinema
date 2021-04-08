// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import request from '../services/requests'

// component
import RowSalle from '../components/rowSalle'
import Row from '../components/row'
// style
import Col from '../styles/Col'
import Wrapper from '../styles/Wrapper'
import { Image } from '../styles/Card'
// image
import salle5 from '../assets/img/salle5.jpg'
import salle2 from '../assets/img/salle3.jpg'

const Home = () => {
  return (
    <Container>
      <div style={{ padding: '10px 0' }}></div>
      <RowSalle fetchUrl={request.fetchSalle} />
      <Wrapper>
        <Col>
          <div className='left'>
            <Image home src={salle2} className='img-responsive' alt='Image' />
            <span className='title'> Visite generale </span>
            <div className='btn'>
              <Link to=''>Information Film</Link>
            </div>
          </div>
          <div className='left'>
            <Image home src={salle5} className='img-responsive' alt='Image' />
            <span className='title'> Visite generale </span>
            <div className='btn'>
              <Link to=''>Information Reservation</Link>
            </div>
          </div>
        </Col>
      </Wrapper>
      <Row title='Future Cinema' fetchUrl={request.fetchMovies} />
    </Container>
  )
}

Home.propTypes = {
  login: PropTypes.object
}

export default Home

const Container = styled.div`
  padding: 90px 0;
`
