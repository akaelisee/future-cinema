import styled from 'styled-components'

const User = styled.div`
  .compte__user {
    margin-right: 10px;
    align-self: center;
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
          left: -19px;
          width: 160px;
          list-style-type: none;
          padding: 0;
          margin: 0;
          background-color: rgba(68, 84, 109, 0.844);
          visibility: hidden;
          /* display: none; */
          li {
            text-align: center;
            color: #fff;
            padding: 10px 25px;
            /* width: 110px; */
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

  svg {
    color: #fff;
    font-size: 20px;
  }

  @media screen and (max-width: 850px) {
    svg {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 650px) {
    .cart {
      position: relative;
      padding: 10px;
      cursor: pointer;
      span {
        width: 51%;
      }
    }
    svg {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    margin-right: 15px;
    .compte__user {
      margin-right: 5px;
      align-self: center;
    }
  }
`

export default User
