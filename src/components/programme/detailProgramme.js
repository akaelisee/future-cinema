// @ts-nocheck
import React from 'react'
import Wrapper from '../../styles/Wrapper'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DetailProgramme = ({ programmes }) => {
  return (
    <Wrapper bas>
      <DetailStyle>
        {programmes.map(programme => (
          <div className='detail__pro__col' key={programme.id}>
            <div className='detail__item'>
              <span className='title'> Salle </span>
              <span className='detail__result'> {programme.salle} </span>
            </div>
            <div className='detail__item'>
              <span className='title'> Date </span>
              <span className='detail__result'>
                {programme.date.slice(8, 10) +
                  programme.date.slice(4, 8) +
                  programme.date.slice(0, 4)}
              </span>
            </div>
            <div className='detail__item'>
              <span className='title'> Heure </span>
              <span className='detail__result'> {programme.heure} </span>
            </div>
            <div className='detail__item'>
              <span className='title'> Genre </span>
              <span className='detail__result'> {programme.genre} </span>
            </div>
            <div className='detail__item'>
              <span className='title'> prix standard </span>
              <span className='detail__result'> {programme.price} € </span>
            </div>
            <div className='detail__item'>
              <span className='title'> prix vip </span>
              <span className='detail__result'> {programme.vip} € </span>
            </div>
          </div>
        ))}
      </DetailStyle>
    </Wrapper>
  )
}

DetailProgramme.propTypes = {
  programmes: PropTypes.any
}

export default DetailProgramme

const DetailStyle = styled.div`
  .detail__pro__col {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    .detail__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        padding-bottom: 17px;
        text-transform: capitalize;
      }
      .detail__result {
        color: #83959d;
      }
    }
  }

  @media screen and (max-width: 860px) {
    .detail__pro__col {
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      padding: 30px 0;
      .detail__item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          padding-bottom: 17px;
          text-transform: capitalize;
        }
        .detail__result {
          color: #83959d;
        }
      }
    }
  }

  @media screen and (max-width: 660px) {
    .detail__pro__col {
      text-align: center;
      flex-direction: column;
      .detail__item {
        margin: 10px 0;
        .title {
          padding-bottom: 0px;
        }
      }
    }
  }
`
