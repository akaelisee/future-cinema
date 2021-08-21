// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import NavLink from '../../styles/NavLink'
import NavLinkLeft from '../../styles/NavLinkLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import HeaderStyle from '../../styles/HeaderStyle'
import { connect } from 'react-redux'
import { Logo } from '../logo'

const NavBar = ({ login, isNav }) => {
  const [isResponsive, setIsResponsive] = useState(false)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {}, [])

  const deconnexion = () => {
    const token = localStorage.removeItem('token')
    if (!token) window.location.reload()
  }

  const userFuncScreen = () => {
    let token = localStorage.getItem('token')

    if (!token) {
      return (
        <div className='link'>
          <Link to='/-/login'> Se connecter</Link>
          <Link to='/register'> S&lsquo;incrire</Link>
        </div>
      )
    } else {
      return (
        <div className='compte__user'>
          <ul className='user'>
            <li>
              <span style={{ fontSize: '16px' }}>
                Bonjour {login.firstname} !
              </span>
              <ul className='popover'>
                <li onClick={() => deconnexion()}> Déconnexion </li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  }

  const userFuncResponsive = () => {
    let token = localStorage.getItem('token')

    if (!token) {
      return (
        <div className='navbar__signin'>
          <span
            onClick={() => {
              setIsUser(true, setIsResponsive(false))
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </span>
          {isUser ? (
            <NavLinkLeft expand>
              <div className='nav__responsive'>
                <span
                  onClick={() => setIsUser(false)}
                  className='close__responsives'
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </div>
              <div className='nav__link'>
                <Link
                  className='btn-btn'
                  to='/-/login'
                  onClick={() => setIsUser(false)}
                >
                  identifiez-vous
                </Link>
                <Link
                  className='btn-btn compte'
                  to='/register'
                  onClick={() => setIsUser(false)}
                >
                  Créer votre compte
                </Link>
              </div>
            </NavLinkLeft>
          ) : (
            <></>
          )}
        </div>
      )
    } else {
      return (
        <div className='navbar__signin'>
          <span
            style={{ cursor: 'pointer', fontSize: '16px' }}
            onClick={() => {
              setIsUser(true, setIsResponsive(false))
            }}
          >
            {login.firstname[0].toUpperCase() + login.lastname[0].toUpperCase()}
          </span>
          {isUser ? (
            <NavLinkLeft expand>
              <div className='nav__responsive'>
                <span
                  onClick={() => setIsUser(false)}
                  className='close__responsives'
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </div>
              <div className='nav__link'>
                <span
                  onClick={() => {
                    deconnexion(), setIsUser(false)
                  }}
                  className='btn-btn compte'
                >
                  Deconnexion
                </span>
              </div>
            </NavLinkLeft>
          ) : (
            <></>
          )}
        </div>
      )
    }
  }

  return (
    <HeaderStyle>
      <div
        className='navbar'
        style={
          isNav ? { backgroundColor: '' } : { backgroundColor: 'transparent' }
        }
      >
        <div className='screen'>
          <div className='container_flex'>
            <div className='navbar_logo'>
              <div className='logo'>
                <Logo />
              </div>
            </div>

            <div className='navbar__item'>
              <div className='link'>
                <Link to='/'> Accueil </Link>
                <Link to='/movie'> Films </Link>
                <Link to='/salle'> Salle de cinema </Link>
                <Link to='/about'> A propos </Link>
                <Link to='/contact'> Contactez-Nous </Link>
              </div>
            </div>
            <div className='navbar__signin'>{userFuncScreen()}</div>
          </div>
        </div>

        {/* Responsive */}
        <div className='responsive__nav'>
          <div className='container_flex'>
            <div className='navbar_logo'>
              <div className='bar'>
                <span
                  onClick={() => {
                    setIsResponsive(true), setIsUser(false)
                  }}
                >
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </div>
            </div>

            <div className='navbar__item'>
              <div className='logo-link'>
                <Logo />
              </div>
            </div>

            {userFuncResponsive()}
          </div>

          {isResponsive ? (
            <NavLink expand>
              <div className='nav__responsive'>
                <span
                  onClick={() => setIsResponsive(false)}
                  className='close__responsive'
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </div>
              <div className='nav__link'>
                <Link to='/home' onClick={() => setIsResponsive(false)}>
                  Accueil
                </Link>
                <Link to='/movie' onClick={() => setIsResponsive(false)}>
                  Films
                </Link>
                <Link to='/salle' onClick={() => setIsResponsive(false)}>
                  Salle de cinema
                </Link>
                <Link to='/about' onClick={() => setIsResponsive(false)}>
                  A propos
                </Link>
                <Link to='/contact' onClick={() => setIsResponsive(false)}>
                  Contactez-Nous
                </Link>
              </div>
            </NavLink>
          ) : (
            <></>
          )}
        </div>
      </div>
    </HeaderStyle>
  )
}

NavBar.propTypes = {
  login: PropTypes.any,
  isNav: PropTypes.bool
}

const mapStateToProps = state => ({
  login: state.login.userLogin
})

export default connect(mapStateToProps)(NavBar)
