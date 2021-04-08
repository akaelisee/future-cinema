// @ts-nocheck
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
// import axios from '../services/axios'
import axios from '../services/axios'
import request from '../services/requests'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { LoaderPayement } from './loader'
import StyleChekout from '../styles/StyleChekout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Checkout = ({
  totalPrice,
  client,
  programmeSelected,
  placeSelected,
  setPlaceSold,
  setPlaceselected,
  setIsExistCart
}) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [checkoutErrorMsg, setCheckoutErrorMsg] = useState('')
  const [buttonMsg, setButtonMsg] = useState('Passer la commande')
  const element = useElements()
  const token = localStorage.getItem('token')
  const stripe = useStripe()

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  }

  const handlePayment = async e => {
    // Block native form submission.
    e.preventDefault()

    setIsProcessing(true)
    if (isProcessing) {
      setButtonMsg(<LoaderPayement />)
    }
    // manuella@gmail.com
    const cardElement = element.getElement('card')

    const billingInfo = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: {
        line1: e.target.address.value,
        city: e.target.city.value
      }
    }

    try {
      // Got our client secret
      const paymentIntent = await axios.post(
        request.fetchPayment,
        {
          // @ts-ignore
          amount: totalPrice() * 100,
          receipt_email: e.target.email.value
        },
        {
          headers: {
            'auth-token': token
          }
        }
      )

      // Create PaymentMethod Object
      const paymentMethodObj = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingInfo
      })

      if (paymentMethodObj.error) {
        setCheckoutErrorMsg(paymentMethodObj.error.message)
        setIsProcessing(false)
        return
      }

      // Confirm Payment Method
      const confirmPayment = await stripe.confirmCardPayment(
        paymentIntent.data,
        {
          payment_method: paymentMethodObj.paymentMethod.id
        }
      )

      if (confirmPayment.error) {
        setCheckoutErrorMsg(confirmPayment.error.message)
        setIsProcessing(false)
        setButtonMsg('Passer la commande')
        return
      }

      setButtonMsg('Success! Payment is Complete')

      setTimeout(() => {
        // setButtonMsg('Pay')
        setIsProcessing(false)
      }, 2000)

      if (confirmPayment.paymentIntent.status == 'succeeded') {
        const data = {
          id_client: client,
          id_program: programmeSelected.id,
          place_choisir: placeSelected.join('-')
        }

        if (token) {
          axios
            .post(request.fetchReservation, data, {
              headers: {
                'auth-token': token
              }
            })
            .then(res => {
              console.log(res)
              if (res.data.message === 'created') {
                console.log('ok')
                setPlaceSold(state => [...state, ...placeSelected])
                setPlaceselected([])
                setIsExistCart(false)
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          console.log('object')
        }
      }
    } catch (error) {
      // setCheckoutErrorMsg(`l'email n'est pas correct`)
      setIsProcessing(false)
      if (!isProcessing) {
        setButtonMsg('Passer la commande')
      }
    }
  }

  return (
    <StyleChekout>
      <div className='checkout__container'>
        <div className='checkout__cart'>
          <div className='checkout__title'>
            <span> TRANSACTION </span>
          </div>
          <div className='checkout__close'>
            <span onClick={() => setIsExistCart(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
          <div className='grid__checkout'>
            <div className='detail__payment'>
              <form onSubmit={handlePayment}>
                <div className='form__card'>
                  <div className='group'>
                    <div className='form__group'>
                      <label> Nom et prénom * </label>
                      <input type='text' name='name' required />
                    </div>
                    <div className='form__group'>
                      <label> email *</label>
                      <input
                        type='email'
                        name='email'
                        required
                        // className={checkoutErrorMsg ? 'input__red' : ''}
                      />
                    </div>
                    <div
                      style={{
                        color: '#ec2f4d',
                        fontSize: '13px',
                        marginBottom: '0px'
                      }}
                    >
                      {checkoutErrorMsg}
                    </div>
                    <div className='form__group'>
                      <label> Addresse *</label>
                      <input type='text' name='address' required />
                    </div>
                    <div className='form__group'>
                      <label> Ville * </label>
                      <input type='text' name='city' required />
                    </div>
                  </div>
                </div>
                <div className='form__card'>
                  <div className='group'>
                    <div className='form__group'>
                      <label> Carte </label>
                      <div className='element'>
                        <CardElement
                          options={{
                            CARD_ELEMENT_OPTIONS
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='btn__checkout'>
                  {/* <button
                type='submit'
                className={cards.length == 0 ? 'btn_disibled' : ''}
                disabled={cards.length == 0 ? true : false}
              >
                {buttonMsg}
              </button> */}
                  <button type='submit'>{buttonMsg}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </StyleChekout>
  )
}

export default Checkout
