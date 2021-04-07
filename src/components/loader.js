import React from 'react'

export const Loader = () => {
  return (
    <div className='abs'>
      <div className='abs__loader'>
        <div className='lds-facebook'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export const LoaderPayement = () => {
  return (
    <div className='lds-container'>
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
