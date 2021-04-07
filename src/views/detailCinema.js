// @ts-nocheck
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Container from '../styles/Container'
import Rows from '../styles/Rows'
import Card from '../styles/Card'
import Wrapper from '../styles/Wrapper'

const DetailCinema = () => {
  const params = useParams()
  const request = 'http://localhost:4000/admin/account/detail-salle-json'
  const [detailSalle, setDetailSalle] = useState([])
  useEffect(() => {
    axios
      .get(`${request}/${params?.id}`)
      .then(res => {
        setDetailSalle(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [request])

  const name = () => {
    return params.name[0].toUpperCase() + params.name.slice(1).replace('-', ' ')
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
