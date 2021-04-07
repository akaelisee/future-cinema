import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({ placeSelected }) => {
  return (
    <>
      <span className='title'> Place Selectionnée </span>
      <div className='number__place'>
        <span>
          {placeSelected.length > 1
            ? placeSelected.length + ' places'
            : placeSelected.length + ' place'}
        </span>
        <div className='place__selected'>
          {placeSelected.map((place, index) => (
            <span key={index}> P {place} </span>
          ))}
        </div>
      </div>
    </>
  )
}

Cart.propTypes = {
  placeSelected: PropTypes.any
}

export default Cart
