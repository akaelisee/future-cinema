import React, { useState } from 'react'
import PropTypes from 'prop-types'
// components
// style
import FormOut from '../../styles/FormOut'

const Register = ({ submitRegister, errorMessage, errorMessageEmail }) => {
  const [formRegister, setFormRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [isError, setIsError] = useState(false)

  return (
    <FormOut>
      <div
        style={{
          color: '#ec2f4d',
          fontSize: '14px',
          marginBottom: '5px'
        }}
      >
        {errorMessageEmail}
      </div>
      <form onSubmit={e => submitRegister(e, formRegister, setIsError)}>
        <div className=''>
          <div className='form_name'>
            {/* firstname */}
            <div className='form-group'>
              {formRegister.firstName.length > 0 ? (
                <input
                  type='text'
                  name='firstname'
                  placeholder='Prénom'
                  className='error_blue'
                  onChange={e =>
                    setFormRegister({
                      ...formRegister,
                      firstName: e.target.value
                    })
                  }
                />
              ) : (
                <input
                  type='text'
                  name='firstname'
                  placeholder='Prénom'
                  className={isError ? 'error_red' : ''}
                  onChange={e =>
                    setFormRegister({
                      ...formRegister,
                      firstName: e.target.value
                    })
                  }
                />
              )}
            </div>
            {/* lastname */}
            <div className='form-group'>
              {formRegister.lastName.length > 0 ? (
                <input
                  type='text'
                  name='lastname'
                  placeholder='Nom'
                  onChange={e =>
                    setFormRegister({
                      ...formRegister,
                      lastName: e.target.value
                    })
                  }
                />
              ) : (
                <input
                  type='text'
                  name='lastname'
                  placeholder='Nom'
                  className={isError ? 'error_red' : ''}
                  onChange={e =>
                    setFormRegister({
                      ...formRegister,
                      lastName: e.target.value
                    })
                  }
                />
              )}
            </div>
          </div>
          {/* Meassage error */}
          {formRegister.firstName.length > 0 &&
          formRegister.lastName.length > 0 ? (
            <> </>
          ) : (
            <div>
              {isError ? (
                <div
                  style={{ color: '#ec2f4d', fontSize: '14px', margin: '1px' }}
                >
                  Veuillez indiquer vos nom et prénom.{' '}
                </div>
              ) : (
                <> </>
              )}
            </div>
          )}
        </div>
        <div className='form-info'>
          {/* email */}
          <div className='form-group'>
            {formRegister.email.length > 0 ? (
              <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={e =>
                  setFormRegister({
                    ...formRegister,
                    email: e.target.value
                  })
                }
              />
            ) : (
              <input
                type='email'
                name='email'
                className={isError ? 'error_red' : ''}
                placeholder='Email'
                onChange={e =>
                  setFormRegister({
                    ...formRegister,
                    email: e.target.value
                  })
                }
              />
            )}

            {/* Meassage error */}
            {formRegister.email.length > 0 ? (
              <> </>
            ) : (
              <div>
                {isError ? (
                  <div
                    style={{
                      color: '#ec2f4d',
                      fontSize: '14px',
                      margin: '1px'
                    }}
                  >
                    Veuillez entrer une adresse email.
                  </div>
                ) : (
                  <> </>
                )}
              </div>
            )}
          </div>
          {/* password */}
          <div className='form-group'>
            {formRegister.password.length > 0 ? (
              <input
                type='password'
                name='password'
                placeholder='Mot de passe'
                onChange={e =>
                  setFormRegister({
                    ...formRegister,
                    password: e.target.value
                  })
                }
              />
            ) : (
              <input
                type='password'
                name='password'
                className={isError ? 'error_red' : ''}
                placeholder='Mot de passe'
                onChange={e =>
                  setFormRegister({
                    ...formRegister,
                    password: e.target.value
                  })
                }
              />
            )}

            {/* Meassage error */}
            {formRegister.password.length > 0 ? (
              <>
                <div
                  style={{
                    color: '#ec2f4d',
                    fontSize: '14px'
                  }}
                >
                  {errorMessage}
                </div>
              </>
            ) : (
              <div>
                {isError ? (
                  <div
                    style={{
                      color: '#ec2f4d',
                      fontSize: '14px',
                      margin: '1px'
                    }}
                  >
                    Veuillez saisir un mot de passe.
                  </div>
                ) : (
                  <> </>
                )}
              </div>
            )}
          </div>
        </div>
        <button className='btn_register'> S&lsquo;inscrire </button>
      </form>
    </FormOut>
  )
}

Register.propTypes = {
  submitRegister: PropTypes.func,
  errorMessage: PropTypes.string,
  errorMessageEmail: PropTypes.string
}

export default Register
