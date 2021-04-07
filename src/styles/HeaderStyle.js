import styled from 'styled-components'

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

export default HeaderStyle
