import styled from 'styled-components'

const RowSwiper = styled.div`
  margin: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  .row__description {
    .row__title {
      display: flex;
      justify-content: space-between;
      letter-spacing: 3px;
      font-size: 17px;
      margin-bottom: 20px;
    }
    .row__select {
      padding-top: 15px;
      display: flex;
      .select {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        label {
          letter-spacing: 1.5px;
          font-size: 15px;
        }
        select {
          width: 150px;
          padding: 10px;
          margin-top: 10px;
          text-align: center;
          text-transform: capitalize;
          background-color: #071120;
          color: #fff;
          outline: none;
          border: none;
        }
        .no__size {
          background-color: #071120;
          letter-spacing: 1.5px;
          font-size: 12px;
          color: #fff;
          width: 150px;
          padding: 10px;
          margin-top: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
    display: block;
    .rows__swiper {
      margin-bottom: 55px;
    }
    .row__description {
      .row__title {
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 850px) {
    margin: 0px 0;
    .row__description {
      .row__select {
        .select {
          select {
            width: 147px;
          }
          .no__size {
            width: 147px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 388px) {
    .row__description {
      .row__select {
        justify-content: space-between;
        .select {
          select {
            width: 147px;
          }
          .no__size {
            width: 147px;
          }
        }
      }
    }
  }
`
export default RowSwiper
