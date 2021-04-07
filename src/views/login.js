// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postLogin } from '../actions/login'
import { Link } from 'react-router-dom'
// service
// components
import LoginComponent from '../components/signinOut/loginComponent'
// image
import imageLogin from '../assets/img/rigisterLogin.jpg'
import { LogoTwo } from '../components/logo'
// style
import { SignInOut, ContentImage } from '../styles/SignInOut'
import Loader from '../components/loader'

const Login = () => {
  const history = useHistory()
  const params = useParams()
  const dispatch = useDispatch()
  const [errorMessageLogin, setErrorMessageLogin] = useState('')
  const [errorMessageChamps, setErrorMessageChamps] = useState('')
  const [isLoader, setIsLoader] = useState(false)
  const [isHide, setIsHide] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) history.push({ pathname: '/' })
  }, [])
  // login
  const submitLogin = (e, formLogin) => {
    e.preventDefault()
    try {
      if (!formLogin.email || !formLogin.password) {
        setErrorMessageChamps('Veuillez remplir les champs')
        return
      } else if (formLogin.password.length < 6) {
        setErrorMessageChamps(' Veuillez entrer un mot de pass correct correct')
        return
      }
      // CONNECTION USER
      const data = {
        email: formLogin.email,
        password: formLogin.password
      }

      // Logger User Redux
      dispatch(postLogin(data))
        .then(res => {
          localStorage.setItem('token', res.headers['auth-token'])
          setIsLoader(true)
          // window.history.back()

          if (params.name[1]) {
            history.push({
              pathname: `/programme/${params.name[1]}`
            })
          } else {
            history.push({
              pathname: `/`
            })
          }
        })
        .catch(err => {
          setErrorMessageLogin('Email ou mot de passe incorrect')
          if (isHide) {
            setIsHide(false)
            console.log(err)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoader) {
    return <Loader />
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
              <span className='title'>Identifiez-vous en 2 secondes</span>
              <p className='text'>Et rejoignez notre communauté de .</p>
            </div>
          </div>
          <LoginComponent
            submitLogin={submitLogin}
            errorMessageChamps={errorMessageChamps}
            errorMessageLogin={errorMessageLogin}
            isLoader={isLoader}
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
              Pas de compte ? <Link to='/register'> Inscrivez-vous </Link>
            </span>
          </div>
        </div>
      </div>
    </SignInOut>
  ) : (
    <Loader />
  )
}

export default Login
