import styled from 'styled-components'

const Col = styled.div`
  display: grid;
  gap: 7rem;
  grid-template-columns: 1fr 1fr;
  margin: 25px 0 100px 0;
  .left {
    position: relative;

    .title {
      position: absolute;
      top: 15%;
      left: -40px;
      font-size: 28px;
      font-weight: 500;
      color: #fff;
      text-transform: uppercase;
    }

    .btn {
      padding-top: 60px;
      position: absolute;
      bottom: 25px;
      right: 10px;
      a {
        padding: 10px 35px;
        border: 1px solid #fff;
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 600;

        &:hover {
          background-color: #fff;
          transition: all 0.4s ease;
          color: #000;
        }
      }
    }
  }

  @media screen and (max-width: 1310px) {
    gap: 4rem;
    .left {
      .title {
        left: -40px;
        font-size: 25px;
      }

      .btn {
        a {
          font-size: 16px;
          padding: 10px 20px;
        }
      }
    }
  }

  @media screen and (max-width: 1010px) {
    gap: 3rem;
    .left {
      .title {
        left: -15px;
        font-size: 22px;
      }

      .btn {
        a {
          font-size: 14px;
          padding: 10px 20px;
        }
      }
    }
  }

  @media screen and (max-width: 860px) {
    display: block;
    width: 100%;
    margin: 0 auto;
    .left {
      margin-bottom: 25px;
      .title {
        left: -25px;
        font-size: 25px;
      }

      .btn {
        a {
          font-size: 15px;
          padding: 10px 20px;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .left {
      .title {
        left: -20px;
        font-size: 22px;
      }

      .btn {
        a {
          font-size: 14px;
          padding: 10px 15px;
        }
      }
    }
  }
`

export default Col
