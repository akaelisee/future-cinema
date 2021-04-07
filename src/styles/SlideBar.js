import styled, { keyframes } from 'styled-components'

const PageLeft = keyframes`
  from {
    transform: translate(100%, 0%);
  }

  to {
    transform: translate(0%, 0%);
  }
`

const SlideBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  z-index: 20;

  .flex__last {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: #fff;
    animation: ${PageLeft} 0.2s linear;
    width: 420px;
    box-shadow: -1px 0px 1px -1px rgba(0, 0, 0, 0.75);
    z-index: 5;
    overflow: auto;
    .slide__navbar {
      position: fixed;
      top: 0;
      right: 0;
      padding: 16px 0;
      width: 420px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #aaa;
      background-color: #fff;
      .close {
        align-self: center;
        margin-left: 15px;
        cursor: pointer;
        .btn__close {
        }
      }
      .title {
        font-size: 20px;
        letter-spacing: 2px;
        align-self: center;
      }
      .cart {
        position: relative;
        padding: 10px;
        align-self: center;
        margin-right: 15px;
        cursor: pointer;
        span {
          text-align: center;
          position: absolute;
          background-color: green;
          top: 0%;
          right: 0%;
          transform: translate(0%, -20%);
          width: 46%;
          padding: 2px;
          border-radius: 50%;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
  svg {
    color: #000;
    font-size: 25px;
  }
  .grid {
    margin-top: 80px;
    .product__item {
      .grid__product {
        display: flex;
        /* justify-content: space-between; */
        padding: 5px 0;
        .product__image {
          padding: 55px 50px;
          margin-right: 10px;
          .image {
            position: relative;
            img {
              width: 100px;
              background-color: transparent;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        .product__detail {
          letter-spacing: 2px;
          padding: 8px 0;
          width: 185px;
          .product__title {
            padding: 3px 0;
          }
          .product__price {
            padding: 3px 0;
          }
          .product__color {
            text-transform: capitalize;
          }
        }
        .product__qty {
          width: 100px;
          display: flex;
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
          align-items: flex-end;
          align-self: stretch;
          padding: 10px 0;
          .drop {
            left: 0;
            cursor: pointer;
            svg {
              font-size: 18px;
            }
          }
          .btn__qty {
            button {
              width: 10px;
              padding: 8px;
              position: relative;
              align-self: flex-end;
              top: -5px;
              border: 1px solid #000;
              background-color: transparent;
              border-radius: 2px;
              cursor: pointer;
              svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 11px;
                color: #aaa;
              }
            }
            .qty {
              margin: 0 6px;
              align-self: flex-end;
              font-size: 13px;
            }
          }
        }
      }
      .block {
        height: 50px;
        background-color: #f4f4f4;
        position: relative;
        &::before {
          content: '';
          border-bottom: 8px solid #f4f4f4;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 0px solid transparent;
          position: absolute;
          top: -8px;
          left: 12%;
          transform: translateX(-50%);
        }
      }
    }
  }
  .total {
    position: relative;
    height: 130px;
    .group__sum {
      position: fixed;
      background-color: #fff;
      right: 0;
      bottom: 0;
      width: 420px;
      .montant {
        margin: 0 18px;
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        letter-spacing: 2px;
        border-bottom: 1px solid #aaa;
      }
      .btn__total {
        width: 90%;
        text-align: center;
        margin: 25px auto;
        display: flex;

        a {
          width: 100%;
          background-color: #071120;
          margin: 0 0px;
          text-decoration: none;
          padding: 15px 40px;
          color: #c8ba7a;
          transition: all 0.2s;
          &:hover {
            background-color: rgba(7, 17, 32, 0.733);
          }
        }
      }
    }
  }
  .retour {
    padding: 80px 0;
    font-size: 16px;
    color: #000;
    text-align: center;
    letter-spacing: 2px;

    p {
      margin: 50px 0 15px 0;
      /* line-height: 50px; */
    }
    .btn__retour {
      button {
        text-decoration: none;
        padding: 20px 0px;
        width: 70%;
        background-color: #071120;
        color: #c8ba7a;
        transition: all 0.2s;
        border: none;
        border-radius: 2px;
        font-size: 15px;
        letter-spacing: 3px;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 430px) {
    .flex__last {
      width: 100%;
      .slide__navbar {
        width: 100%;
        .close {
          margin-left: 10px;
        }
        .title {
          font-size: 18px;
        }
        .cart {
          margin-right: 10px;
        }
      }
    }
    svg {
      font-size: 22px;
    }
    .grid {
      .product__item {
        .grid__product {
          .product__image {
            margin-right: 10px;
          }
          .product__detail {
            width: 45.5%;
            font-size: 15px;
          }
          .product__qty {
            margin-right: 20px;
            width: 100px;
          }
        }
      }
    }
    .total {
      .group__sum {
        width: 100%;
      }
    }
  }
`

export default SlideBar
