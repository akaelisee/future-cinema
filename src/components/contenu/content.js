import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
// import Newletter from '../newletter'
import styled from 'styled-components'
const Content = ({ children }) => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) history.push('/')
  }, [])
  return (
    <ContainerPage>
      <div className='container__limit'>
        <Header />
        {children}
      </div>
      {/* <Newletter /> */}
      <Footer />
    </ContainerPage>
  )
}

Content.propTypes = {
  children: PropTypes.any
}

export default Content

const ContainerPage = styled.div`
  .container__limit {
    min-height: calc(100vh - 400px - 130px);
  }
`
