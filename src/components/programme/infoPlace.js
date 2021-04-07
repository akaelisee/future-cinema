import React from 'react'
const InfoPlace = () => {
  return (
    <>
      <div className='option__item'>
        <div className='option__cube'>
          <span className='cube available'></span>
        </div>
        <span> Disponible </span>
      </div>
      <div className='option__item'>
        <div className='option__cube'>
          <span className='cube deluxe'></span>
        </div>
        <span> Luxe </span>
      </div>
      <div className='option__item'>
        <div className='option__cube'>
          <span className='cube disabled'></span>
        </div>
        <span> Desactiver </span>
      </div>
      <div className='option__item'>
        <div className='option__cube'>
          <span className='cube reserved'></span>
        </div>
        <span> Reserver </span>
      </div>
      <div className='option__item'>
        <div className='option__cube'>
          <span className='cube selected'></span>
        </div>
        <span> Selectionner </span>
      </div>
    </>
  )
}

export default InfoPlace
