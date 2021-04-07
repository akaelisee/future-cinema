// @ts-nocheck
import styled from 'styled-components'

const Nav = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  .nav_bar_scroll {
    .nav__bar {
      background-color: rgba(7, 17, 32, 0.893);
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      .logo_reduire {
        margin-left: 25px;
        align-self: center;
        width: 85px;
      }
    }
  }

  .nav_bar_no_scroll {
    .nav__bar {
      background-color: rgba(7, 17, 32, 0.893);
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      .globe {
        margin-left: 25px;
        color: #fff;
        align-self: center;
        width: 85px;
        svg {
          color: #fff;
          font-size: 18px;
        }
        span {
          margin-left: 7px;
        }
      }

      .logo {
        align-self: center;
      }
    }
  }
  .navbar__payment {
    display: flex;
    justify-content: space-between;
    background-color: #071120;
    padding: 15px 25px;
    .text {
      color: #fff;
      align-self: center;
      a {
        text-decoration: none;
        color: inherit;
        letter-spacing: 2px;
      }
    }
    .logo {
      text-align: center;
    }
    .vide {
      width: 250px;
    }
  }

  @media screen and (max-width: 850px) {
    .nav_bar_no_scroll {
      .nav__bar {
        background-color: rgba(7, 17, 32, 0.893);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        .globe {
          margin-left: 25px;
          color: #fff;
          align-self: center;
          span {
            cursor: pointer;
            svg {
              color: #fff;
              font-size: 25px;
            }
          }
        }

        .logo {
          align-self: center;
        }
      }
    }
    .navbar__payment {
      .text {
        width: 45%;
        a {
          span {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .nav_bar_no_scroll {
      .nav__bar {
        .globe {
          margin-left: 15px;
          width: 55px;
        }
      }
    }
    .navbar__payment {
      .text {
        width: 100%;
        a {
          span {
            display: none;
          }
        }
      }
    }
  }
`

export default Nav
