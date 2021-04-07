import styled from 'styled-components'

const DetailStyle = styled.div`
  margin: 15px 0;
  .detail__group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    .detail__overview {
      padding-right: 20px;
      font-size: 15px;
      p {
        font-size: 15px;
        letter-spacing: 3px;
        margin-bottom: 10px;
      }
    }
    .detail__table {
      font-size: 14px;
      .detail__item {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 5px 0;
        span {
          margin: 0px 0.25rem;
          /* text-transform: capitalize; */
        }
        .title {
          margin: 0px 0.25rem;
          color: rgb(110, 110, 110);
          line-height: 22.4px;
          letter-spacing: 0.15px;
        }
        &:last-child {
          border-bottom: 0px;
        }
      }
    }
  }

  .retours {
    font-size: 14px;
    p {
      margin: 20px 0;
    }
  }
  .paiement {
    font-size: 14px;
    .block__img {
      width: 50%;
      margin: 50px auto;
      display: flex;
      justify-content: space-around;
    }
  }
  @media screen and (max-width: 950px) {
    .detail__group {
      grid-template-columns: 1fr;
      row-gap: 1.3rem;
      .detail__overview {
        font-size: 14px;
        p {
          display: none;
        }
      }
      .detail__table {
        font-size: 13px;
        .detail__item {
        }
      }
    }
  }
`

export default DetailStyle
