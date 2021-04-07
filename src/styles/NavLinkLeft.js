// @ts-nocheck
import styled, { keyframes } from 'styled-components'

const PageRight = keyframes`
  from {
    transform: translate(100%, 0%);
  }

  to {
    transform: translate(0%, 0%);
  }
`

const NavLinkLeft = styled.div`
  text-align: center;
  padding: 10px;
  align-self: center;

  .btn-btn {
    display: inline-block;
    text-decoration: none;
    font-size: 15px;
    text-transform: uppercase;
    padding: 10px;
    width: 350px;
    margin: 10px auto;
    border: 1px solid #f5c518;
    color: #f5c518;
    cursor: pointer;
  }
  .compte {
    color: #fff;
    background-color: #f5c518;
  }

  ${props => {
    if (props.expand) {
      return `
      background-color: rgba(25, 38, 56, 0.334);
      `
    }
  }}

  @media screen and (max-width: 860px) {
    padding: 10px;
    position: fixed;
    top: 0;
    left: 35%;
    bottom: 0;
    right: 0;
    animation: ${PageRight} 0.2s linear;
    background-color: rgba(7, 17, 32, 0.878);

    .nav__responsive {
      padding: 5px 0;
      text-align: right;
      .close__responsives {
        font-size: 26px;
        color: #fff;
        margin-right: 55px;
        cursor: pointer;
      }
    }
    .nav__link {
      display: flex;
      flex-direction: column;
      margin: 25px 0;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0%;

    .nav__responsive {
      .close__responsives {
        font-size: 28px;
        margin-right: 35px;
      }
    }

    .btn-btn {
      display: inline-block;
      text-decoration: none;
      font-size: 15px;
      text-transform: uppercase;
      padding: 10px;
      width: 280px;
      margin: 10px auto;
      border: 1px solid #f5c518;
      color: #f5c518;
    }
    .compte {
      color: #fff;
      background-color: #f5c518;
    }
  }
`

export default NavLinkLeft
