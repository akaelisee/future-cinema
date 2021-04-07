// @ts-nocheck
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 1200px;
  margin: 50px auto;
  color: #fff;

  ${props => {
    if (props.bas) {
      return `
      margin: 0px auto;
      `
    }
  }}

  /* detailCinema */
  .wrapper__title {
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    padding-bottom: 60px;
    span {
      color: #f5c518;
    }
  }

  .wrapper__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    .red {
      color: #f5c518;
      text-transform: uppercase;
    }
    .wrapper__tarif {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 22px;
      .grid__price {
        text-align: center;
        padding: 38px 0;
        border: 1px solid #aaa;
      }
      .grid__vip {
        margin-top: 35px;
        text-align: center;
        padding: 38px 0;
        border: 1px solid #aaa;
      }
    }

    .wrapper__horaire {
      border: 1px solid #aaa;
      padding: 20px 0;

      .title {
        text-align: center;
        font-size: 20px;
      }

      .grid__horaire {
        width: 80%;
        margin: 25px auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        .horaire__item {
          display: flex;
          flex-direction: column;
          text-align: center;
          margin: 10px 0;
          line-height: 25px;
          .red {
            text-transform: uppercase;
            font-size: 17px;
          }
        }
      }
    }

    .wrapper__tel {
      border: 1px solid #aaa;
      padding: 134px 0;
      text-align: center;
      p {
        text-transform: uppercase;
        margin-bottom: 10px;
      }
    }

    .wrapper__adresse {
      border: 1px solid #aaa;
      padding: 134px 0;
      text-align: center;
      p {
        text-transform: uppercase;
        margin-bottom: 10px;
      }
    }
  }

  /* Programmes */

  .wrapper__pro {
    padding: 100px 0;
    display: flex;

    .wrapper__pro__image {
      width: 300px;
      img {
        width: 100%;
      }
    }

    .wrapper__pro__detail {
      margin-left: 50px;
      padding: 50px 0;
      .pro__title {
        font-size: 35px;
        text-transform: uppercase;
      }
      .pro__desc {
        margin: 10px 0;
        color: #83959d;
      }
      .pro__btn_view {
        margin: 25px 0;
        width: 150px;
        .btn {
          text-align: center;
          display: flex;
          color: #fff;
          font-size: 14px;
          text-transform: uppercase;
          border: 1px solid #00eaff;
          background-color: #004561;
          padding: 10px 20px;
          outline: none;
          cursor: pointer;
          box-shadow: 0px 0px 4px 0px #00eaff;

          img {
            width: 18%;
          }

          span {
            align-self: center;
            margin-left: 10px;
          }
        }
      }
      .pro__duree {
        margin: 35px 0;
        display: flex;
        .imdb {
          .yellow {
            background-color: #f5c518;
          }
        }
        .time {
          margin-left: 25px;
        }
      }
    }
  }

  @media screen and (max-width: 1310px) {
    width: 1000px;
    margin: 50px auto;
    color: #fff;

    ${props => {
      if (props.bas) {
        return `
      margin: 0px auto;
      `
      }
    }}

    /* detailCinema */
  .wrapper__title {
      font-size: 35px;
    }

    /* Programmes */
    .wrapper__pro {
      .wrapper__pro__image {
        width: 400px;
      }

      .wrapper__pro__detail {
        .pro__title {
          font-size: 28px;
        }
      }
    }
  }

  @media screen and (max-width: 1110px) {
    width: 800px;

    ${props => {
      if (props.bas) {
        return `
      margin: 0px auto;
      `
      }
    }}

    /* detailCinema */
    .wrapper__title {
      font-size: 30px;
    }

    /* Programmes */
    .wrapper__pro {
      padding: 100px 0;
      display: flex;

      .wrapper__pro__image {
        width: 500px;
      }

      .wrapper__pro__detail {
        padding: 30px 0;
        .pro__title {
          font-size: 28px;
        }
        .pro__btn_view {
          margin: 25px 0;
          width: 150px;
          .btn {
            font-size: 13px;
          }
        }
        .pro__duree {
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    width: 83%;
    margin: 50px auto;
    color: #fff;

    ${props => {
      if (props.bas) {
        return `
      margin: 0px auto;
      `
      }
    }}

    .results {
      font-size: 16px;
    }

    /* detailCinema */
    .wrapper__title {
      font-size: 25px;
    }

    .wrapper__grid {
      display: block;

      .wrapper__tarif {
        font-size: 20px;
        margin-bottom: 35px;
      }

      .wrapper__horaire {
        margin-bottom: 35px;

        .title {
          font-size: 20px;
        }
      }

      .wrapper__tel {
        padding: 35px 0;
        margin-bottom: 35px;
      }

      .wrapper__adresse {
        padding: 35px 0;
      }
    }

    /* Programmes */
    .wrapper__pro {
      .wrapper__pro__image {
        img {
          width: 210px;
        }
      }

      .pro__desc {
        font-size: 14px;
      }

      .wrapper__pro__detail {
        margin-left: 30px;
        padding: 25px 0;
        .pro__title {
          font-size: 28px;
        }
        .pro__btn_view {
          margin: 25px 0;
          width: 130px;
          .btn {
            font-size: 13px;
          }
        }
        .pro__duree {
          font-size: 13px;
        }
      }
    }
  }

  @media screen and (max-width: 690px) {
    /* Programmes */
    .wrapper__pro {
      padding: 50px 0;
      .wrapper__pro__image {
        display: none;
      }
    }
  }

  @media screen and (max-width: 500px) {
    width: 83%;
    margin: 50px auto;
    color: #fff;

    ${props => {
      if (props.bas) {
        return `
      margin: 0px auto;
      `
      }
    }}

    .results {
      font-size: 14px;
    }

    /* detailCinema */
    .wrapper__grid {
      .red {
        color: #f5c518;
        font-size: 15px;
      }
      .wrapper__horaire {
        margin-bottom: 35px;

        .title {
          font-size: 15px;
        }

        .grid__horaire {
          .horaire__item {
            justify-content: space-between;
            .red {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`

export default Wrapper
