// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { removeLibrary } from '../actions/library'
import Container from '../styles/Container'
import Wrapper from '../styles/Wrapper'
import { Card, Image } from '../styles/Card'
import { Icon } from '../components/logo'
import Grid from '../styles/Grid'
const Account = ({ login, library }) => {
  const baseImage = process.env.REACT_APP_BASE_IMAGE
  const regex = / /gi
  const dispatch = useDispatch()

  return (
    <Container detail>
      <Wrapper>
        <Grid>
          <div className='grid__account'>
            <div className='logo__nane'>
              <span> {login.firstname[0].toUpperCase()} </span>
            </div>
            <div className='name'>
              <span className='first'>
                {login.firstname}&nbsp;{login.lastname}
              </span>
              <span>{login.email}</span>
            </div>
          </div>
          <div className='grid__favorite'>
            <div className='save'>
              {library.length > 1 ? (
                <p> {library.length} articles </p>
              ) : (
                <p> {library.length} article </p>
              )}
            </div>
            {library.length > 0 ? (
              <Card account>
                {library.map(product => (
                  <div
                    className='card__product'
                    key={product.id || product._id}
                  >
                    <Link
                      to={`/detail/${product.title
                        .replace(regex, '-')
                        .toLowerCase()}}/${product.id}`}
                    >
                      <div className='card__image'>
                        <Image
                          account
                          src={`${baseImage}${product.backdrop_path}`}
                        />
                      </div>

                      <div className='card__body'>
                        <div className='card__title'>
                          <span> {product.title}</span>
                        </div>
                      </div>
                    </Link>
                    <div className='btn__delete'>
                      <span onClick={() => dispatch(removeLibrary(product.id))}>
                        <Icon /> Supprimer
                      </span>
                    </div>
                  </div>
                ))}
              </Card>
            ) : (
              <div
                className=''
                style={{ textAlign: 'center', padding: '25px 0' }}
              >
                <span style={{ letterSpacing: '2px', fontSize: '25px' }}>
                  Pas d&lsquo;article savegardé
                </span>
              </div>
            )}
          </div>
        </Grid>
      </Wrapper>
    </Container>
  )
}

Account.propTypes = {
  login: PropTypes.object,
  library: PropTypes.array
}

const mapStateToProps = state => ({
  login: state.login.userLogin,
  library: state.library.productLibrary
})

export default connect(mapStateToProps)(Account)
