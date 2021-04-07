// @ts-nocheck
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
// service
import axios from '../services/axios'
import request from '../services/requests'
// components
import Register from '../components/signinOut/registerComponent'
// image
import imageLogin from '../assets/img/rigisterLogin.jpg'
import { LogoTwo } from '../components/logo'
// style
import { SignInOut, ContentImage } from '../styles/SignInOut'
import Loader from '../components/loader'

const RegisterLogin = () => {
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState('')
  const [isExist, setIsExist] = useState(false)
  const [errorMessageEmail, setErrorMessageEmail] = useState('')
  const [messageValidate, setMessageValidate] = useState('')
  const [isLoader, setIsLoader] = useState(false)
  const [isHide, setIsHide] = useState(false)

  useEffect(() => {}, [])

  // Register
  const submitRegister = (e, formRegister, setIsError) => {
    e.preventDefault()
    try {
      if (
        !formRegister.firstName ||
        !formRegister.lastName ||
        !formRegister.password ||
        !formRegister.email
      ) {
        setIsError(true)
        return
      } else if (formRegister.firstName.length < 1) {
        setIsError(true)
        return
      } else if (formRegister.lastName.length < 1) {
        setIsError(true)
        return
      } else if (formRegister.email.length < 1) {
        setIsError(true)
        return
      } else if (formRegister.password.length < 6) {
        setIsError(true)
        setErrorMessage('Veuillez entrer un mot de pass correct')
        return
      }

      // Create user
      const data = {
        firstname: formRegister.firstName,
        lastname: formRegister.lastName,
        email: formRegister.email,
        password: formRegister.password
      }

      axios
        .post('http://localhost:4000/admin/account/auth/client', data)
        .then(res => {
          setMessageValidate('Votre compte a été bien crée')
          history.push({
            pathname: '/login'
          })
          if (isHide) {
            setIsHide(false)
            console.log(res)
          }
        })
        .catch(err => {
          setErrorMessageEmail(
            'Veuillez vous connecter avec le compte que vous avez déjà créé.'
          )
          if (!isHide) {
            console.log(err)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoader) {
    return
  }

  return !isLoader ? (
    <SignInOut>
      <ContentImage url={`url(${imageLogin})`} className='content_img' />
      <div className='content_signOut'>
        <div className='component_formulaire'>
          <div className='cards'>
            <div className='logo'>
              <LogoTwo />
            </div>
            <div className='group__btn'>
              <span className='title'>Créer votre compte</span>
              <p className='text'>Et rejoignez notre communauté .</p>
            </div>
          </div>
          <Register
            submitRegister={submitRegister}
            errorMessage={errorMessage}
            errorMessageEmail={errorMessageEmail}
            messageValidate={messageValidate}
          />
          <div className='politique'>
            En cliquant sur &quot;Connexion&quot; vous acceptez nos Conditions
            d&lsquo;utilisation. Veuillez consulter notre
            <span> Politique de confidentialité </span>. Ce site est protégé par
            reCAPTCHA et la <span>Politique de confidentialité </span> et les
            <span> Conditions d&lsquo;utilisation</span>
            Google s&lsquo;appliquent.
          </div>

          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '14px' }}>
              Déjà un compte ? <Link to='/login'> Connectez-vous </Link>
            </span>
          </div>
        </div>
      </div>
    </SignInOut>
  ) : (
    <Loader />
  )
}

RegisterLogin.propTypes = {
  isComponentExist: PropTypes.bool,
  setIsComponentExist: PropTypes.func
}

export default RegisterLogin
