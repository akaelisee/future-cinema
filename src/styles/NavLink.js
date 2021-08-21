// @ts-nocheck
import styled, { keyframes } from 'styled-components'

const PageLeft = keyframes`
  from {
    transform: translate(-100%, 0%);
  }

  to {
    transform: translate(0%, 0%);
  }
`

const NavLink = styled.div`
  text-align: center;
  padding: 10px;
  align-self: center;
  a {
    text-decoration: none;
    display: inline-block;
    padding: 0 15px;
    text-transform: uppercase;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.904);
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

  ${props => {
    if (props.expand) {
      return `
      background-color: rgba(25, 38, 56, 0.334);
      `
    }
  }}
  /* ici */
  @media screen and (max-width: 860px) {
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 75%;
    animation: ${PageLeft} 0.2s linear;
    background-color: rgba(7, 17, 32, 0.878);

    .nav__responsive {
      padding: 10px 0;
      text-align: left;
      .close__responsive {
        font-size: 20px;
        color: #fff;
        margin-left: 55px;
        cursor: pointer;
      }
    }
    .nav__link {
      display: flex;
      flex-direction: column;
      margin: 25px 0;
      a {
        text-decoration: none;
        display: inline-block;
        padding: 13px 15px;
        text-transform: uppercase;
        font-size: 16px;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.904);
        position: relative;

        &::after {
          content: '';
          position: relative;
          left: 0%;
          width: 0%;
          bottom: 0px;
          height: 0px;
          transition: 0s;
        }

        &::before {
          content: '';
          position: relative;
          right: 0%;
          width: 0%;
          bottom: 0px;
          height: 0px;
          transition: 0s;
        }

        &:hover::after {
          left: 0%;
          width: 0%;
          transition: 0s;
        }
        &:hover::before {
          right: 0%;
          width: 0%;
          transition: 0;
        }
      }
    }
  }
`

export default NavLink
