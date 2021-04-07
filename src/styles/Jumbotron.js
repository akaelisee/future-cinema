import styled from 'styled-components'

const Jumbotron = styled.div`
  padding: 30px 0 0 0;
  .cards {
    padding: 28px 25px;
    width: 650px;
    margin: 0 auto;
    background-color: #d6d8d9;
    .title {
      font-size: 27px;
      letter-spacing: 4px;
    }
    .text {
      font-size: 12px;
      font-weight: 300;
    }
    form {
      margin: 15px 0 2px 0;
      .col {
        font-size: 12px;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-family: sans-serif;
        margin-bottom: 5px;
      }
      .form_email {
        display: flex;
        input {
          width: 73%;
          border: none;
          padding: 15px 10px;
          margin-right: 15px;
        }

        .btn__letter {
          padding: 0 15px;
          letter-spacing: 2px;
          background-color: #071120;
          color: #c8ba7a;
          outline: none;
          border: none;
          cursor: pointer;
          border-radius: 2px;
        }
        .btn__disabled {
          padding: 0 15px;
          letter-spacing: 2px;
          background-color: #aaaaaa;
          color: #fff;
          outline: none;
          border: none;
          cursor: not-allowed;
          border-radius: 2px;
        }
      }
    }
    .charte {
      width: 70%;
      font-size: 11px;
      color: #6e6e6e;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 750px) {
    .cards {
      padding: 28px 25px;
      width: 90%;
      margin: 0 auto;
      background-color: #d6d8d9;
      .title {
        font-size: 26px;
        letter-spacing: 4px;
      }
      .text {
        font-size: 11px;
        font-weight: 300;
      }
      form {
        .col {
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-family: sans-serif;
          margin-bottom: 5px;
        }
        margin: 15px 0;
        .form_email {
          display: flex;
          input {
            width: 70%;
            border: none;
            padding: 15px 10px;
            margin-right: 15px;
          }

          .btn__letter {
            padding: 0 15px;
            letter-spacing: 2px;
            background-color: #071120;
            color: #c8ba7a;
            outline: none;
            border: none;
            cursor: pointer;
            border-radius: 2px;
          }
          .btn__disabled {
            padding: 0 15px;
            letter-spacing: 2px;
            background-color: #aaaaaa;
            color: #fff;
            outline: none;
            border: none;
            cursor: not-allowed;
            border-radius: 2px;
          }
        }
      }
      .charte {
        width: 70%;
        font-size: 11px;
        color: #6e6e6e;
        line-height: 20px;
      }
    }
  }

  @media screen and (max-width: 650px) {
    .cards {
      .title {
        font-size: 24px;
        letter-spacing: 3px;
      }
      form {
        .form_email {
          display: flex;
          input {
            width: 68%;
            border: none;
            padding: 15px 10px;
            margin-right: 15px;
          }

          .btn__letter {
            padding: 0 10px;
            letter-spacing: 1px;
          }
          .btn__disabled {
            padding: 0 10px;
            letter-spacing: 1px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 530px) {
    .cards {
      width: 100%;
      padding: 28px 20px;
      .title {
        font-size: 24px;
        letter-spacing: 3px;
      }
      form {
        .form_email {
          input {
            width: 68%;
            padding: 15px 10px;
            margin-right: 15px;
          }

          .btn__letter {
            padding: 0 10px;
            letter-spacing: 1px;
          }
          .btn__disabled {
            padding: 0 10px;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .cards {
      form {
        .form_email {
          display: flex;
          flex-direction: column;
          input {
            width: 100%;
            border: none;
            margin: 15px 0;
          }

          .btn__letter {
            padding: 17px 10px;
            letter-spacing: 2px;
            font-size: 15px;
          }
          .btn__disabled {
            font-size: 15px;
            padding: 17px 10px;
            letter-spacing: 2px;
          }
        }
      }
      .charte {
        width: 100%;
        font-size: 11px;
        text-align: center;
      }
    }
  }
`

export default Jumbotron
