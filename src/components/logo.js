// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import LogoWhite from '../assets/img/logo-white.png'
import LogoBlue from '../assets/img/logo-blue.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export const Logo = () => {
  return (
    <LogoImg>
      <Link to='/'>
        <img src={LogoWhite} alt='logo' />
      </Link>
    </LogoImg>
  )
}

export const LogoTwo = () => {
  return (
    <LogoImg>
      <img style={{ width: '240px' }} src={LogoBlue} alt='logo' />
    </LogoImg>
  )
}

export const Icon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faHeart} />
    </>
  )
}

const LogoImg = styled.div`
  img {
    width: 140px;
  }
`
