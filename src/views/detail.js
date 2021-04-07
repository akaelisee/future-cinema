// @ts-nocheck
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from '../services/axios'
import request from '../services/requests'
import { addLibrary, removeLibrary } from '../actions/library'
import { addCard } from '../actions/cardAction'
import BtnLibrary from '../components/btn/btnLibrary'
import BtnCard from '../components/btn/btnCard'
import Container from '../styles/Container'
import Wrapper from '../styles/Wrapper'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import Slide from '../components/slide'
import DetailComponent from '../components/detailDescription/detailComponent'
import Card from '../components/cardComponent/card'
import RowSwiper from '../styles/RowSwiper'
import ReactNotification from 'react-notifications-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Loader from '../components/loader'
import Livraison from '../components/detailDescription/livraison'
import Retours from '../components/detailDescription/retours'
import Paiement from '../components/detailDescription/paiement'

const Detail = ({ library }) => {
  const [product, setProduct] = useState([])
  const [poster, setPoster] = useState([])
  const [dimension, setDimension] = useState([])
  const [color, setcolor] = useState([])
  const [girth, setgirth] = useState([])
  const token = localStorage.getItem('token')
  const param = useParams()
  const [isExistRes, setIsExistRes] = useState(false)
  const [isExistLivraison, setIsExistLivraison] = useState(false)
  const [isExistPay, setIsExistPay] = useState(false)
  const [isExistRetours, setIsExistRetours] = useState(false)
  const [isExist, setIsExist] = useState(1)
  const [isCard, setIsCard] = useState(false)
  const [choosenColor, setChoosenColor] = useState('')
  const [choosenDimension, setChoosenDimension] = useState('')
  const [isLoader, setIsLoader] = useState(false)

  useEffect(() => {
    axios
      .get(`${request.fetchProducts}/${param?.id || param?._id}`, {
        headers: {
          'auth-token': token
        }
      })
      .then(res => {
        setProduct(res.data)
        setPoster(res.data.group_poster_path)
        setDimension(res.data.dimension)
        setChoosenDimension(res.data.dimension[0])
        setcolor(res.data.color)
        setChoosenColor(res.data.color[0])
        setgirth(res.data.girth)
        setIsLoader(true)
        initSwiper()
      })
      .catch(err => {
        console.log(err)
      })
  }, [request.fetchProducts])

  const initSwiper = () => {
    new Swiper('.swiper-container', {
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }

  const cardExist = () => {
    if (isCard) {
      document.querySelector('body').style.overflow = 'hidden'
      return <Card isCard={isCard} setIsCard={setIsCard} />
    } else {
      return <> </>
    }
  }

  const existsInLibrary = product => {
    return library.find(
      item => item.id || item._id === product.id || product._id
    )
  }

  const handleExist = () => {
    if (isExist === 1) {
      return <DetailComponent product={product} color={color} girth={girth} />
    } else if (isExist === 2) {
      return <Livraison />
    } else if (isExist === 3) {
      return <Paiement />
    } else if (isExist === 4) {
      return <Retours />
    }
  }

  if (!isLoader) {
    return <Loader />
  }

  return (
    <Container detail slide>
      <ReactNotification />
      <Wrapper detail>
        <RowSwiper>
          <div className='rows__swiper'>
            <Slide poster={poster} initSwiper={initSwiper} />
          </div>

          <div className='row__description'>
            <div className='row__title'>
              <span> {product.title} </span>
              <span> {product.price} € </span>
            </div>
            <hr />
            <div className='row__select'>
              <div className='select'>
                <label> Couleur : </label>
                <select
                  name=''
                  id='input'
                  className='form-control'
                  onChange={e => setChoosenColor(e.target.value)}
                  defaultValue={choosenColor}
                >
                  {color.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className='select'>
                <label> Dimension : </label>
                {dimension.length == 0 ? (
                  <div className='no__size'>NoSize</div>
                ) : (
                  <select
                    name=''
                    id='input'
                    className='form-control'
                    onChange={e => setChoosenDimension(e.target.value)}
                    defaultValue={choosenDimension}
                  >
                    {dimension.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            <BtnGroup>
              <div className='btn__panier'>
                <BtnCard
                  addCard={addCard(product, choosenColor, choosenDimension)}
                  isCard={isCard}
                  setIsCard={setIsCard}
                />
              </div>
              <div className='btn__library'>
                <BtnLibrary
                  addLibrary={addLibrary(product)}
                  removeLibrary={removeLibrary(product.id)}
                  existsInLibrary={existsInLibrary}
                  product={product}
                />
              </div>
              <div></div>
            </BtnGroup>
            <div>
              <ul type='square' style={{ fontSize: '13px' }}>
                <li> Retours gratuits pendant 30 jours </li>
                <li> Garantie De Deux Ans </li>
              </ul>
            </div>
          </div>
        </RowSwiper>
        {/* body */}
        <div className='wrapper__hide'>
          <div className='wrapper__description'>
            <div
              onClick={() => setIsExist(1)}
              className={isExist !== 1 ? 'not_underline' : ' underline'}
            >
              détail
            </div>
            <div
              onClick={() => setIsExist(2)}
              className={isExist !== 2 ? 'not_underline' : 'under underline'}
            >
              livraison
            </div>
            <div
              onClick={() => setIsExist(3)}
              className={isExist !== 3 ? 'not_underline' : 'under underline'}
            >
              paiement
            </div>
            <div
              onClick={() => setIsExist(4)}
              className={isExist !== 4 ? 'not_underline' : 'under underline'}
            >
              retours
            </div>
          </div>
          <div>{handleExist()}</div>
        </div>
        {/*  */}

        {/* responsive */}
        <div className='wrapper__description__responsive'>
          <hr />
          <div className='chevron'>
            <div
              className='chevron__hide'
              onClick={() => setIsExistRes(!isExistRes)}
            >
              <span> détail </span>
              <span
                className={
                  isExistRes
                    ? 'icon__chevron rotate__true'
                    : 'icon__chevron rotate__false'
                }
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </div>
            {isExistRes ? (
              <DetailComponent product={product} color={color} girth={girth} />
            ) : (
              <></>
            )}
          </div>

          <div className='chevron'>
            <div
              className='chevron__hide'
              onClick={() => setIsExistLivraison(!isExistLivraison)}
            >
              <span> Livraison </span>
              <span
                className={
                  isExistLivraison
                    ? 'icon__chevron rotate__true'
                    : 'icon__chevron rotate__false'
                }
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </div>
            {isExistLivraison ? (
              <Livraison product={product} color={color} girth={girth} />
            ) : (
              <></>
            )}
          </div>

          <div className='chevron'>
            <div
              className='chevron__hide'
              onClick={() => setIsExistPay(!isExistPay)}
            >
              <span> Paiement </span>
              <span
                className={
                  isExistPay
                    ? 'icon__chevron rotate__true'
                    : 'icon__chevron rotate__false'
                }
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </div>
            {isExistPay ? (
              <Paiement product={product} color={color} girth={girth} />
            ) : (
              <></>
            )}
          </div>

          <div className='chevron'>
            <div
              className='chevron__hide'
              onClick={() => setIsExistRetours(!isExistRetours)}
            >
              <span> Retours </span>
              <span
                className={
                  isExistRetours
                    ? 'icon__chevron rotate__true'
                    : 'icon__chevron rotate__false'
                }
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </div>
            {isExistRetours ? (
              <Retours product={product} color={color} girth={girth} />
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* body */}
      </Wrapper>
      <div>{cardExist()}</div>
    </Container>
  )
}

Detail.propTypes = {
  library: PropTypes.any,
  cardReducers: PropTypes.any
}

const mapStateToProps = state => ({
  library: state.library.productLibrary,
  cardReducers: state.cardReducers.productCard
})

export default connect(mapStateToProps)(Detail)

const BtnGroup = styled.div`
  margin: 25px 0;
  text-align: center;

  .btn__library {
    width: 60%;
    margin: 20px auto;
  }

  @media screen and (max-width: 550px) {
    .btn__library {
      width: 100%;
      margin: 20px auto;
    }
  }
`
