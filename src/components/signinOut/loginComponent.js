import React, { useState } from 'react'
import PropTypes from 'prop-types'
// style
import FormIn from '../../styles/FormIn'

const Login = ({ submitLogin, errorMessageChamps, errorMessageLogin }) => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })

  return (
    <FormIn>
      <div
        style={{
          color: '#ec2f4d',
          fontSize: '14px',
          marginBottom: '5px'
        }}
      >
        {formLogin.email.length > 0 && formLogin.password.length > 0
          ? ''
          : errorMessageChamps}
      </div>
      <div
        style={{
          color: '#ec2f4d',
          fontSize: '14px',
          marginBottom: '5px'
        }}
      >
        {errorMessageLogin}
      </div>
      <form onSubmit={e => submitLogin(e, formLogin)}>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={e =>
              setFormLogin({ ...formLogin, email: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            placeholder='Mot de passe'
            onChange={e =>
              setFormLogin({ ...formLogin, password: e.target.value })
            }
          />
        </div>
        <button className='btn_login'> Se connecter </button>
      </form>
    </FormIn>
  )
}

Login.propTypes = {
  submitLogin: PropTypes.func,
  errorMessageChamps: PropTypes.string,
  errorMessageLogin: PropTypes.string
}

export default Login
