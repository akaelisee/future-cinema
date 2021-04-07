import styled, { keyframes } from 'styled-components'

const PageLeft = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1)
  }
`

const StyleChekout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background: rgba(54, 63, 63, 0.61);
  overflow: hidden;
  .checkout__container {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    width: 420px;
    margin: 0 auto;
    overflow: auto;

    .checkout__cart {
      animation: ${PageLeft} 0.3s;
      position: relative;
      padding: 20px 30px;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
        rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
      .checkout__title {
        color: #000;
        text-align: center;
        padding: 10px 0;
        span {
          font-size: 18px;
          letter-spacing: 1px;
        }
      }
      .checkout__close {
        position: absolute;
        top: 0;
        right: 1rem;
        color: #000;
        text-align: center;
        padding: 10px 0;
        cursor: pointer;
        span {
          font-size: 18px;
          letter-spacing: 1px;
        }
      }
      .grid__checkout {
        .detail__payment {
          form {
            .form__card {
              .group {
                .form__group {
                  padding: 2px 0;
                  display: flex;
                  flex-direction: column;
                  label {
                    font-size: 14px;
                    line-height: 30px;
                    color: rgb(0, 8, 28);
                    letter-spacing: 1px;
                    text-transform: uppercase;
                  }
                  input {
                    border-radius: 2px;
                    background-color: rgb(255, 255, 255);
                    border: 1px solid rgb(199, 199, 199);
                    text-size-adjust: 100%;
                    padding: 11px 8px;
                    outline: none;
                  }
                  .input__red {
                    border-radius: 2px;
                    background-color: rgb(255, 255, 255);
                    border: 1px solid #ec2f4d;
                    text-size-adjust: 100%;
                    padding: 11px 8px;
                    outline: none;
                  }
                  input[type='number'] {
                    -moz-appearance: textfield;
                    appearance: textfield;
                    margin: 0;

                    &::-webkit-inner-spin-button,
                    &::-webkit-outer-spin-button {
                      -webkit-appearance: none;
                      margin: 0;
                    }
                  }
                  .element {
                    border: 1px solid rgb(199, 199, 199);
                    padding: 11px 5px;
                    text-size-adjust: 100%;
                    border-radius: 2px;
                    background-color: rgb(255, 255, 255);
                  }
                }
              }
            }
            .btn__checkout {
              padding: 25px 0 15px 0;
              align-self: center;

              button {
                width: 100%;
                padding: 15px 0;
                height: 50px;
                background-color: #071120;
                border-radius: 2px;
                font-size: 14px;
                letter-spacing: 2px;
                text-transform: uppercase;
                border: none;
                color: #c8ba7a;
                cursor: pointer;
                outline: none;
                align-self: center;
                position: relative;
              }
              .btn_disibled {
                background-color: #aaaaaa;
                color: #fff;
                outline: none;
                border: none;
                cursor: not-allowed;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .checkout__container {
      width: 340px;

      .checkout__cart {
        padding: 5px 25px;
        .checkout__title {
          span {
            font-size: 17px;
          }
        }
        .grid__checkout {
          .detail__payment {
            form {
              .form__card {
                .group {
                  .form__group {
                    label {
                      font-size: 13px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
  }
`

export default StyleChekout
