// @ts-nocheck
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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
  const fetchUrl = 'http://localhost:4000/admin/account/programmes-json'
  const fetchUrlSalle = 'http://localhost:4000/admin/account/salles-json'

  useEffect(() => {}, [])

  return (
    <Container>
      <div style={{ padding: '10px 0' }}></div>
      <RowSalle fetchUrl={fetchUrlSalle} />
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
      <Row title='Future Cinema' fetchUrl={fetchUrl} />
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
