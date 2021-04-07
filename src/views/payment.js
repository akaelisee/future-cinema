// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from '../styles/Container'
import Checkout from '../components/checkout'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Nav from '../styles/Nav'
import { Link } from 'react-router-dom'
import { LogoHeader } from '../components/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Payment = ({ cardReducers }) => {
  const stripePromise = loadStripe(process.env.REACT_APP_KEY)

  const sum = () => {
    let total = 0
    cardReducers.forEach(element => {
      total += element.qty * element.price
    })
    return total
  }
  const retours = () => {
    window.history.back()
  }
  return (
    <Container>
      <Nav payment>
        <div className='navbar__payment'>
          <div className='text'>
            <Link to='' onClick={() => retours()}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <span> Continuer mon Shopping</span>
            </Link>
          </div>
          <div className='logo'>
            <span>
              <LogoHeader />
            </span>
          </div>
          <div className='vide'></div>
        </div>
      </Nav>
      <div className='' style={{ paddingTop: '70px' }}>
        <Elements stripe={stripePromise}>
          <Checkout total={sum} cards={cardReducers} />
        </Elements>
      </div>
    </Container>
  )
}

Payment.propTypes = {
  cardReducers: PropTypes.array
}

const mapStateToProps = state => ({
  cardReducers: state.cardReducers.productCard
})

export default connect(mapStateToProps)(Payment)
