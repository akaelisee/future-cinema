// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import User from '../../styles/User'
import NavLink from '../../styles/NavLink'
import NavLinkLeft from '../../styles/NavLinkLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { Logo, LogoReduire } from '../logo'

const NavBar = ({ login, isNav }) => {
  const [isResponsive, setIsResponsive] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const [isComponentExist, setIsComponentExist] = useState(false)
  let history = useHistory()

  useEffect(() => {}, [])

  const deconnexion = () => {
    const token = localStorage.removeItem('token')
    if (!token) window.history.back()
  }

  const userFuncScreen = () => {
    let token = localStorage.getItem('token')

    if (!token) {
      return (
        <div className='link'>
          <Link to='/login'> Se connecter</Link>
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
                  to='/login'
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
  // manuelaaa@gmail.com
  return (
    <HeaderStyle>
      <div
        className='navbar'
        style={
          isNav ? { backgroundColor: '' } : { backgroundColor: 'transparent' }
        }
      >
        <div className='screen'>
          {/* {isNav ? 'elisee' : 'abel'} */}
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
  login: PropTypes.object,
  isNav: PropTypes.bool
}

const mapStateToProps = state => ({
  login: state.login.userLogin
})

export default connect(mapStateToProps)(NavBar)

const HeaderStyle = styled.div`
  .navbar {
    width: 100%;
    position: fixed;
    color: #fff;
    background-color: rgba(45, 68, 105, 0.796);
    z-index: 100;

    .container_flex {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      margin: 0 auto;
      width: 80%;
      font-size: 14px;

      .link {
        svg {
          font-size: 20px;
        }
        a {
          padding: 10px;
          margin: 0 5px;
          text-decoration: none;
          text-transform: uppercase;
          color: #fff;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            left: 50%;
            width: 0%;
            bottom: -4px;
            background-color: rgba(255, 255, 255, 0.904);
            height: 2px;
            transition: all 0.3s ease-in-out;
          }

          &::before {
            content: '';
            position: absolute;
            right: 50%;
            width: 0%;
            bottom: -4px;
            background-color: rgba(255, 255, 255, 0.904);
            height: 2px;
            transition: all 0.3s ease-in-out;
          }

          &:hover::after {
            left: 5%;
            width: 50%;
            transition: all 0.3s ease-in-out;
          }
          &:hover::before {
            right: 5%;
            width: 50%;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }

    .navbar_logo {
      align-self: center;
    }

    .navbar__item {
      font-weight: 400;
      align-self: center;
    }

    .navbar__signin {
      align-self: center;

      .compte__user {
        .user {
          list-style-type: none;
          margin: 0;
          padding: 0;
          li {
            position: relative;
            cursor: pointer;
            ul {
              position: absolute;
              top: 40px;
              left: -9px;
              width: 160px;
              list-style-type: none;
              padding: 0;
              margin: 0;
              background-color: rgba(68, 84, 109, 0.844);
              visibility: hidden;
              li {
                text-align: center;
                color: #fff;
                padding: 10px 25px;
                a {
                  text-decoration: none;
                  color: #fff;
                }
                &:hover {
                  background-color: #44546d;
                  cursor: pointer;
                }
              }
              &::before {
                content: '';
                border-bottom: 10px solid rgba(68, 84, 109, 0.844);
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid transparent;
                position: absolute;
                top: -20px;
                left: 50%;
                transform: translateX(-50%);
              }
            }
            &:hover .popover {
              visibility: visible;
              /* display: none; */
            }
          }
        }
      }
    }
    .responsive__nav {
      display: none;
    }
  }

  @media screen and (max-width: 1350px) {
    .navbar {
      .container_flex {
        .link {
          a {
            padding: 5px;
            margin: 0 2px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1120px) {
    .navbar {
      .container_flex {
        width: 95%;

        .link {
          a {
            padding: 5px;
            margin: 0 2px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 950px) {
    .navbar {
      .container_flex {
        width: 95%;
        font-size: 13px;
        .link {
          a {
            padding: 3px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    .navbar {
      .screen {
        display: none;
      }
      .responsive__nav {
        display: block;
        .container_flex {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          margin: 0 auto;
          width: 90%;

          svg {
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
`
