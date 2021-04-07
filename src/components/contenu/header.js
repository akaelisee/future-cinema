// @ts-nocheck
import React, { useState, useEffect } from 'react'
import NavBar from './navBar'

const Header = () => {
  const [isNav, setIsNav] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const show = window.pageYOffset > 80

      if (show) {
        setIsNav(true)
      } else {
        setIsNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <NavBar isNav={isNav} />
    </div>
  )
}

export default Header
