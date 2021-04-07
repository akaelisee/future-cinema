import styled from 'styled-components'

const Rows = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: space-between;
  .rows__payment {
    width: 300px;
    .number__place {
      padding: 30px 0;
      span {
        font-size: 14px;
      }

      .place__selected {
        padding: 3px 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(45px, 1fr));
        gap: 5px;
        span {
          width: 50px;
          text-align: center;
          padding: 2px 4px;
          background-color: #ff972f;
          margin-right: 5px;
          box-shadow: 0px 0px 4px 0px #ff972f;
        }
      }
    }
    .total__payment {
      .total__item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        .title__prix {
          width: 105px;
        }
        .prix {
          width: 60px;
          text-align: right;
        }
      }
    }
    .btn__payment {
      margin: 25px 0;
      outline: none;
      width: 100%;
      border-radius: 5px;
      background-color: #01a8b8;
      border: none;
      padding: 13px 0;
      font-size: 19px;
      color: #fff;
      cursor: pointer;
    }
  }

  .rows__place {
    margin-left: 80px;
    width: 85%;
    .mult__option {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;

      .option__item {
        text-align: center;
        font-size: 14px;
        .option__cube {
          display: flex;
          margin: 0px 0 10px 0;
          justify-content: center;
          .cube {
            border-radius: 2px;
            padding: 9px;
          }
          .available {
            background-color: #015767;
            border: 1px solid #008799;
          }
          .deluxe {
            position: relative;
            background-color: #015767;
            border: 1px solid #008799;
            &::before {
              content: '';
              position: absolute;
              top: 50%;
              width: 100%;
              height: 50%;
              left: 0;
              background-color: #019cae;
              border-radius: 4px 4px 0 0;
            }
          }
          .disabled {
            background-color: #3e5c25;
            border: 1px solid #a3a412;
          }
          .reserved {
            background-color: #00eaff;
            border: 1px solid #00eaff;
          }
          .selected {
            background-color: #e68c2f;
            border: 1px solid #e68c2f;
          }
        }
      }
    }
    .block {
      margin: 45px 0;
      height: 60px;
      background: linear-gradient(to bottom, #243b55, #1f3f58);

      position: relative;
      box-shadow: 0px 3px 7px 0px rgba(6, 43, 58, 0.698);

      &::before {
        content: '';
        position: absolute;
        background-color: #00eaff;
        top: -7px;
        width: 100%;
        height: 8px;
        clip-path: ellipse(50% 60% at 50% 90%);
      }
    }

    .nbre__Place {
      width: 670px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 1110px) {
    .rows__payment {
      width: 290px;
      .total__payment {
        font-size: 15px;
      }
      .btn__payment {
        padding: 10px 0;
        font-size: 17px;
      }
    }

    .rows__place {
      margin-left: 50px;

      .nbre__Place {
        width: 92%;
        margin: 0 auto;
      }
    }
  }

  @media screen and (max-width: 860px) {
    flex-direction: column-reverse;
    .rows__payment {
      width: 100%;
      .total__payment {
        font-size: 15px;
      }
      .btn__payment {
        padding: 10px 0;
        font-size: 17px;
      }
    }

    .rows__place {
      margin-left: 0px;
      margin-bottom: 80px;

      .nbre__Place {
        width: 92%;
        margin: 0 auto;
      }
    }
  }

  @media screen and (max-width: 560px) {
    flex-direction: column-reverse;
    .rows__payment {
      width: 100%;
      .total__payment {
        font-size: 15px;
      }
      .btn__payment {
        padding: 10px 0;
        font-size: 17px;
      }
    }

    .rows__place {
      margin-left: 0px;
      margin-bottom: 80px;

      .mult__option {
        width: 100%;
        margin: 0;

        .option__item {
          font-size: 11px;
          .option__cube {
            .cube {
              padding: 8px;
            }
          }
        }
      }

      .nbre__Place {
        width: 92%;
        margin: 0 auto;
      }
    }
  }
`

export default Rows
