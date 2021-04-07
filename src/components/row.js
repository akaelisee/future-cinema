// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../services/axios'
import PropTypes from 'prop-types'
// component
import { Loader } from '../components/loader'
// style

import Wrapper from '../styles/Wrapper'
import { Card } from '../styles/Card'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const [isLoader, setIsLoader] = useState(false)

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(fetchUrl)
        .then(res => {
          setMovies(res.data.results)
          setIsLoader(true)
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchData()
  }, [fetchUrl])

  if (!isLoader) {
    return <Loader />
  }
  return (
    <Wrapper>
      {movies.length ? (
        <>
          <div className='wrapper__title'>
            <span className='red'> Prochainement </span> à {title}
          </div>
          <Card>
            {movies.map(movie => (
              <div className='card__movie' key={movie.id}>
                <div className='card__container'>
                  <Link to={`/programme/${movie.id}`}>
                    <div className='card__espace__image'>
                      <img
                        src={movie.poster_path}
                        className='card__image'
                        alt='Image'
                      />
                    </div>
                  </Link>
                </div>
                <span className='movie__title'> {movie.movie} </span>
              </div>
            ))}
          </Card>
        </>
      ) : (
        <p
          style={{
            textAlign: 'center',
            fontSize: '22px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}
        >
          Pas de film actuellment
        </p>
      )}
    </Wrapper>
  )
}

Row.propTypes = {
  fetchUrl: PropTypes.any,
  title: PropTypes.string
}

export default Row
