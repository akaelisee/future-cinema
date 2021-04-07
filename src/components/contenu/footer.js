// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from '../logo'

const Footer = () => {
  return (
    <Foot>
      <div className='footer-columns'>
        <Link to=''>
          <Logo />
        </Link>
      </div>
    </Foot>
  )
}

export default Footer

const Foot = styled.div`
  text-align: center;
  background-color: #002737;
  .footer-columns {
    padding: 45px 0;
  }
`
