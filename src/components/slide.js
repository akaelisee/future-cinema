// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import { Image } from '../styles/Card'
import styled from 'styled-components'
import salle6 from '../assets/img/salle6.jpg'
import salle5 from '../assets/img/salle5.jpg'
import salle4 from '../assets/img/salle4.jpg'
import { Link } from 'react-router-dom'

Swiper.use([Navigation])
const Slide = ({ poster }) => {
  const imageSalle = [salle6, salle5, salle4, salle6]
  const regex = / /gi

  return (
    <SlideSwiper>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          {poster.map(item => (
            <div key={item.id} className='swiper-slide'>
              <div className='group__salle'>
                <Image
                  src={`${imageSalle[item.id]}`}
                  className='img-responsive'
                  alt='Image'
                />

                <div className='position__salle'>
                  <span className='salle__title'> {item.title} </span>
                  <div className='btn__salle'>
                    <Link
                      to={`/detail/${item.title
                        .replace(regex, '-')
                        .toLowerCase()}/${item.id}`}
                    >
                      Plus d&lsquo;info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </SlideSwiper>
  )
}

Slide.propTypes = {
  poster: PropTypes.any
}

export default Slide

const SlideSwiper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  .swiper-container {
    width: 100%;
    margin: 0 auto;
  }

  .swiper-slide {
    background-position: center !important;
    background-size: cover !important;
    width: 45%;
    margin: 0 25px !important;
  }
  .group__salle {
    position: relative;
    .position__salle {
      position: absolute;
      top: 22%;
      left: -50px;
      .salle__title {
        font-size: 40px;
        color: #fff;
        text-transform: uppercase;
      }
      .btn__salle {
        padding-top: 80px;
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
  }

  @media screen and (max-width: 1110px) {
    .swiper-slide {
      width: 400px;
    }
    .group__salle {
      .position__salle {
        .salle__title {
          font-size: 30px;
        }
        .btn__salle {
          padding-top: 70px;
          a {
            font-size: 16px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .swiper-container {
      width: 95%;
      margin: 0 auto;
    }
    .swiper-slide {
      width: 350px;
    }
    .group__salle {
      .position__salle {
        left: 10px;
        .salle__title {
          font-size: 20px;
        }
        .btn__salle {
          padding-top: 70px;
          a {
            padding: 10px 30px;
            font-size: 15px;
          }
        }
      }
    }
  }
`
