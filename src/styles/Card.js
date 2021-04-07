// @ts-nocheck
import styled from 'styled-components'

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 30px;

  .card__movie {
    .card__container {
      position: relative;
      transition: all 0.2s ease-in-out;

      .card__espace__image {
        position: relative;
        width: 100%;
        margin: 0 auto;
        .card__image {
          width: 100%;
        }
      }
    }
    .movie__title {
      font-size: 23px;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 1310px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 3rem;

    .card__movie {
      .movie__title {
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 1110px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    column-gap: 1rem;
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    column-gap: 1rem;

    .card__movie {
      .movie__title {
        font-size: 16px;
      }
    }
  }
`

export const Image = styled.img`
  width: 90%;

  ${props => {
    if (props.home) {
      return `
      width: 100%;
      height: 100%;
      `
    } else if (props.slide) {
      return `
       width: 90%;
      height: 600px;
      `
    }
  }}
`
export const CardBody = styled.div`
  padding-top: 5px;
  padding-left: 6px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  padding-bottom: 20px;
`

export default Card
