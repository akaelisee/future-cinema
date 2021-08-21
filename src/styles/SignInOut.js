// @ts-nocheck
import styled from 'styled-components'

export const SignInOut = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .content_signOut {
    width: 450px;
    margin: 0 auto;
    .component_formulaire {
      padding: 40px 50px;
      border-radius: 5px;

      .cards {
        .logo {
          text-align: center;
        }
        .group__btn {
          color: #44546d;
          text-align: center;
          padding: 15px 0;
          .title {
            font-size: 20px;
            font-weight: 600;
          }
        }
      }
      .politique {
        margin: 25px 0;
        text-align: center;
        font-size: 12px;
        span {
          color: #44546d;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 500px) {
    .content_signOut {
      width: 340px !important;
      margin: 0 auto;
      .component_formulaire {
        padding: 40px 20px;

        .cards {
          .logo {
            text-align: center;
          }
          .group__btn {
            color: #44546d;
            text-align: center;
            padding: 13px 0;
            .title {
              font-size: 18px;
              font-weight: 600;
            }
          }
        }
      }
    }
    .clear {
      height: calc(100vh - 580.133px);
      background-color: #fff;
    }
    .clear-register {
      height: calc(100vh - 633.133px);
      background-color: #fff;
    }
  }
`

export const ContentImage = styled.div`
  background-image: ${props => props.url};
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 40%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`
