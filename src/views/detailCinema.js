// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../styles/Container'
import request from '../services/requests'
import axios from '../services/axios'
import Card from '../styles/Card'
import Wrapper from '../styles/Wrapper'
import { Loader } from '../components/loader'

const DetailCinema = () => {
  const params = useParams()
  const [detailSalle, setDetailSalle] = useState([])
  const [isLoader, setIsLoader] = useState(false)

  useEffect(() => {
    axios
      .get(`${request.fetchDetailSalle}/${params?.id}`)
      .then(res => {
        setDetailSalle(res.data.results)
        setIsLoader(true)
      })
      .catch(err => {
        console.log(err)
      })
  }, [request])

  const name = () => {
    return params.name[0].toUpperCase() + params.name.slice(1).replace('-', ' ')
  }

  if (!isLoader) {
    return <Loader />
  }

  return (
    <Container>
      <Wrapper>
        <div className='wrapper__title'>
          <span className='red'> Prochainement </span> au {name()}
        </div>
        <Card>
          {detailSalle.map(detail => (
            <div className='card__movie' key={detail.id_program}>
              <div className='card__container'>
                <Link to={`/programme/${detail.id_program}`}>
                  <div className='card__espace__image'>
                    <img
                      src={detail.poster_path}
                      className='card__image'
                      alt='Image'
                    />
                  </div>
                </Link>
              </div>
              <span className='movie__title'> {detail.movie} </span>
            </div>
          ))}
        </Card>
      </Wrapper>
    </Container>
  )
}

export default DetailCinema
