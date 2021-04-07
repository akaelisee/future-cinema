import React from 'react'
// import { useLocation } from 'react-router-dom'
import ErrorImg from '../assets/img/404.jpg'
const NoPage = () => {
  const retours = () => {
    window.history.back()
  }
  return (
    <div className='no__page'>
      <p className='btn_error' onClick={() => retours()}>
        ← Revenir à lux shop
      </p>
      <div className='image'>
        <img src={ErrorImg} className='img-responsive' alt='Image' />
      </div>
    </div>
  )
}

export default NoPage
