// @ts-nocheck
import React, { useState, useEffect } from 'react'
import axios from '../services/axios'
import request from '../services/requests'
import { useParams, useHistory } from 'react-router-dom'
import Wrapper from '../styles/Wrapper'
import styled from 'styled-components'
import Rows from '../styles/Rows'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Banner from '../components/programme/banner'
import DetailProgramme from '../components/programme/detailProgramme'
import Cart from '../components/programme/cart'
import InfoPlace from '../components/programme/infoPlace'
import Checkout from '../components/checkout'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Loader from '../components/loader'

const Programme = ({ login }) => {
  const params = useParams()
  const history = useHistory()
  const [programmes, setProgrammes] = useState([])
  const [programmeSelected, setProgrammeSelected] = useState('')
  const [placeSelected, setPlaceselected] = useState([])
  const [client, setClient] = useState(login.id)
  const [isHide, setIsHide] = useState(false)
  const [isExistCart, setIsExistCart] = useState(false)
  const [placeSold, setPlaceSold] = useState([])
  const [isLoader, setIsLoader] = useState(false)
  const stripePromise = loadStripe(process.env.REACT_APP_KEY)

  useEffect(() => {
    axios
      .get(`${request.fetchDetailProgramme}/${params?.id}`)
      .then(res => {
        setProgrammes(res.data.programme.results)
        selectedProgramme(res.data.programme.results)

        res.data.reservation.forEach(item => {
          setPlaceSold(state => [
            ...state,
            ...item.place_choisir.split('-').map(it => parseInt(it))
          ])
        })
        setIsLoader(true)
        if (isHide) {
          setIsHide(false)
          setClient()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [request])

  const selectedProgramme = params => {
    setProgrammeSelected(params[0])
  }

  const toggleSelectedPlace = numPlace => {
    if (placeSelected.indexOf(numPlace) === -1) {
      setPlaceselected([...placeSelected, parseInt(numPlace)])
    } else {
      setPlaceselected(
        placeSelected.filter(item => parseInt(item) !== parseInt(numPlace))
      )
    }
  }

  const NombreFunc = ({ programme }) => {
    let places = []

    for (let i = 0; i < programme.nombre; i++) {
      places.push(i)
    }

    let defaultContent = {
      display: 'inline-block',
      padding: '10px',
      margin: '4px',
      cursor: 'pointer',
      outline: 'none'
    }

    let content = {
      ...defaultContent,
      border: '1px solid #e68c2f',
      backgroundColor: '#e68c2f'
    }

    let content1 = {
      ...defaultContent,
      border: '1px solid #008799',
      backgroundColor: '#015767'
    }

    let content2 = {
      ...defaultContent,
      border: '1px solid #00eaff',
      backgroundColor: '#00eaff'
    }
    return places.map((item, index) => (
      <button
        disabled={placeSold.indexOf(index + 1) === -1 ? null : true}
        onClick={() => toggleSelectedPlace(index + 1)}
        className={
          programme.place_vip.split('-').indexOf((index + 1).toString()) === -1
            ? 'cube available'
            : 'cube deluxe'
        }
        key={index}
        style={
          placeSold.indexOf(index + 1) !== -1
            ? content2
            : placeSelected.indexOf(index + 1) === -1
              ? content1
              : content
        }
      ></button>
    ))
  }

  const totalPrice = () => {
    let total = 0

    placeSelected.forEach(element => {
      total +=
        programmeSelected.place_vip.split('-').indexOf(element.toString()) ===
        -1
          ? programmeSelected.price
          : programmeSelected.vip
    })
    return total
  }

  const compilePrice = () => {
    let standard = 0
    let deluxe = 0
    let arrayStandard = []
    let arrayDeluxe = []

    placeSelected.forEach(element => {
      if (
        programmeSelected.place_vip.split('-').indexOf(element.toString()) ===
        -1
      ) {
        standard += programmeSelected.price
        arrayStandard.push(standard)
      } else {
        deluxe += programmeSelected.vip
        arrayDeluxe.push(deluxe)
      }
    })

    return (
      <div className='total__payment'>
        <div className='total__item'>
          <div className='title__prix'>Prix std</div>
          <div>{arrayStandard.length !== 0 ? arrayStandard.length : '-'}</div>
          <div className='prix'> {standard} € </div>
        </div>
        <div className='total__item'>
          <div className='title__prix'>Prix vip</div>
          <div> {arrayDeluxe.length !== 0 ? arrayDeluxe.length : '-'} </div>
          <div className='prix'> {deluxe} €</div>
        </div>
        <hr />
        <div className='total__item'>
          <span>Total</span>
          <span> {totalPrice()} €</span>
        </div>

        <button
          onClick={() => setIsExistCart(true)}
          className='btn__payment'
          value='Paiement tickets'
          style={
            placeSelected.length === 0
              ? {
                  backgroundColor: '#D6D8D9',
                  pointerEvents: 'none'
                }
              : { backgroundColor: '#01a8b8' }
          }
        >
          Paiement tickets
        </button>
      </div>
    )
  }

  const funcCard = () => {
    if (isExistCart) {
      const token = localStorage.getItem('token')
      if (token) {
        return (
          <div className='' style={{ paddingTop: '70px' }}>
            <Elements stripe={stripePromise}>
              <Checkout
                totalPrice={totalPrice}
                client={client}
                programmeSelected={programmeSelected}
                placeSelected={placeSelected}
                setPlaceSold={setPlaceSold}
                setPlaceselected={setPlaceselected}
                setIsExistCart={setIsExistCart}
              />
            </Elements>
          </div>
        )
      } else {
        history.push({
          pathname: `/?${params?.id}/login`
        })
      }
    }
  }

  if (!isLoader) {
    return <Loader />
  }

  return (
    <ContainerPro>
      <div className='detail__programme'>
        <Banner programmes={programmes} />
      </div>
      <div className='detail__pro'>
        <DetailProgramme programmes={programmes} />
      </div>
      <Wrapper>
        <Rows>
          <div className='rows__payment'>
            <Cart
              placeSelected={placeSelected}
              programmeSelected={programmeSelected}
            />
            {compilePrice()}
          </div>
          <div className='rows__place'>
            <div className='mult__option'>
              <InfoPlace />
            </div>
            <div className='block'></div>
            <div>
              <div className='nbre__Place'>
                {programmeSelected ? (
                  <NombreFunc programme={programmeSelected} />
                ) : null}
              </div>
            </div>
          </div>
        </Rows>
        {funcCard()}
      </Wrapper>
      {/* <p hidden> {setClient('')} </p> */}
    </ContainerPro>
  )
}

Programme.propTypes = {
  login: PropTypes.object
}

const mapStateToProps = state => ({
  login: state.login.userLogin
})

export default connect(mapStateToProps)(Programme)

const ContainerPro = styled.div`
  color: #fff;
  .col__pro {
    position: relative;
    .pro__backdrop {
      position: absolute;
      top: 0;
      width: 100%;
      bottom: 0;
      background-color: rgba(0, 33, 53, 0.759);
    }
  }
  .detail__pro {
    background-color: #004560;
  }
`
