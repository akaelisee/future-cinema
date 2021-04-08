// @ts-nocheck
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from '../services/axios'
// component
import { Loader } from '../components/loader'
// style
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import Slide from './slide'

const RowSalle = ({ fetchUrl }) => {
  const [salles, setSalles] = useState([])
  const [isLoader, setIsLoader] = useState(false)

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(fetchUrl)
        .then(res => {
          setSalles(res.data.results)
          setIsLoader(true)
          initSwiper()
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchData()
  }, [fetchUrl])

  const initSwiper = () => {
    new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 2,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },

      pagination: {
        el: '.swiper-pagination'
      }
    })
  }

  if (!isLoader) {
    return <Loader />
  }
  return (
    <>
      <div className='rows__swiper'>
        <Slide poster={salles} initSwiper={initSwiper} />
      </div>
    </>
  )
}

RowSalle.propTypes = {
  fetchUrl: PropTypes.any
}

export default RowSalle
