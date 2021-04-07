/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Success = props => {
  useEffect(() => {
    if (props.location.state === undefined) {
      window.history.back()
    }
  }, [])
  return (
    <AlertSuccess>
      <div className='card'>
        <div className='icon__success'>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <h1>Paiement réussi</h1>
        <p>
          Nous vous remercions pour votre <br /> demande d&lsquo;achat
        </p>
        <div className='btn__back'>
          <Link to='/home'> Retour à l&lsquo;acceuill </Link>
        </div>
      </div>
    </AlertSuccess>
  )
}

export default Success

const AlertSuccess = styled.div`
  h1 {
    color: #88b04b;
    font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    color: #404f5e;
    font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    margin: 0;
  }

  .card {
    padding: 40px;
    border-radius: 4px;
    box-shadow: 0 2px 3px #c8d0d8;
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, 0%);

    .icon__success {
      position: relative;
      border-radius: 200px;
      height: 200px;
      width: 200px;
      background: #f8faf5;
      margin: 0 auto;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #9abc66;
        font-size: 100px;
        /* line-height: 200px; */
        /* margin-left: -15px; */
      }
    }

    .btn__back {
      margin: 25px 0 0 0;
      font-size: 17px;
      a {
        text-decoration: none;
        color: #9abc66;
      }
    }
  }

  @media screen and (max-width: 750px) {
    h1 {
      font-size: 25px;
      margin: 10px 0;
    }
    p {
      font-size: 18px;
    }

    .card {
      padding: 40px;
      width: 80%;

      .icon__success {
        height: 170px;
        width: 170px;

        svg {
          font-size: 80px;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 22px;
      margin: 10px 0;
    }
    p {
      font-size: 15px;
    }

    .card {
      padding: 40px;
      width: 90%;
      box-shadow: none;

      .icon__success {
        height: 150px;
        width: 150px;

        svg {
          font-size: 70px;
        }
      }
    }
  }
`
