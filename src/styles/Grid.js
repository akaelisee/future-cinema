import styled from 'styled-components'

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 3fr;
  .grid__account {
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
      rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
    align-self: flex-start;

    .logo__nane {
      width: 100px;
      margin: 30px auto 15px auto;
      padding: 60px;
      position: relative;
      border-radius: 50%;
      background-color: #071120;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 70px;
        color: #c8ba7a;
      }
    }
    .name {
      text-align: center;
      display: flex;
      flex-direction: column;
      line-height: 33px;
      font-size: 16px;
      letter-spacing: 1px;
      margin: 5px 0 50px 0;
      .first {
        text-transform: capitalize;
      }
    }
  }
  .grid__favorite {
    box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
      rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
    align-self: flex-start;
    padding: 15px;
    .save {
      padding: 2px 0 10px 0;
    }
  }

  @media screen and (max-width: 800px) {
    display: block;
    .grid__account {
      width: 250px;
      box-shadow: none;
      align-self: flex-start;
      margin: 0 auto;

      .logo__nane {
        width: 100px;
        margin: 30px auto 15px auto;
        padding: 60px;
        position: relative;
        border-radius: 50%;
        background-color: #071120;
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 70px;
          color: #c8ba7a;
        }
      }
      .name {
        text-align: center;
        display: flex;
        flex-direction: column;
        line-height: 33px;
        font-size: 16px;
        letter-spacing: 1px;
        margin: 5px 0 50px 0;
        .first {
          text-transform: capitalize;
        }
      }
    }
    .grid__favorite {
      box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
        rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
      align-self: flex-start;
      padding: 15px;
      .save {
        padding: 2px 0 10px 0;
      }
    }
  }
`

export default Grid
