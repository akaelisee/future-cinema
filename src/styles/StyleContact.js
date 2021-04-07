import styled from 'styled-components'

const StyleContact = styled.div`
  .col__text {
    font-size: 35px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 15px 0;
    text-align: center;
  }

  .form {
    width: 70%;
    margin: 65px auto;
    .form__card {
      padding: 25px 0;
      .form__title {
        text-align: center;
        padding: 15px 0;
        font-size: 20px;
      }
      .group {
        width: 90%;
        margin: 0 auto;
        .form__group {
          padding: 5px 0;
          display: flex;
          flex-direction: column;
          label {
            font-size: 15px;
            line-height: 30px;
            color: rgb(0, 8, 28);
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          input {
            border-radius: 2px;
            background-color: rgb(255, 255, 255);
            border: 1px solid rgb(199, 199, 199);
            text-size-adjust: 100%;
            padding: 15px 8px;
            outline: none;
          }
          .input__red {
            border-radius: 2px;
            background-color: rgb(255, 255, 255);
            border: 1px solid #ec2f4d;
            text-size-adjust: 100%;
            padding: 15px 8px;
            outline: none;
          }
        }
      }
    }
    .btn__contact {
      padding: 20px 0;
      align-self: center;
      width: 90%;
      margin: 0 auto;

      button {
        width: 100%;
        padding: 17px 0;
        height: 55px;
        background-color: #071120;
        border-radius: 2px;
        font-size: 15px;
        letter-spacing: 3px;
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

  /*  */

  @media screen and (max-width: 850px) {
    .col__text {
      right: 6%;
      .text {
        font-size: 35px;
      }
      .sous__text {
        font-size: 20px;
      }
    }

    .form {
      width: 95%;
    }
  }
  @media screen and (max-width: 650px) {
    .col__text {
      position: absolute;
      top: 25%;
      right: 5%;
      .text {
        font-size: 30px;
        line-height: 40px;
      }
      .sous__text {
        font-size: 20px;
        margin-bottom: 0px;
        line-height: 20px;
      }
    }
  }

  @media screen and (max-width: 430px) {
    .col__text {
      position: absolute;
      top: 25%;
      right: 5%;
      .text {
        font-size: 20px;
        line-height: 10px;
      }
      .sous__text {
        font-size: 18px;
        margin-bottom: 0px;
        line-height: 20px;
      }
    }
  }
`

export default StyleContact
