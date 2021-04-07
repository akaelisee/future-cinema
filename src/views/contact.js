// @ts-nocheck
import React, { useState } from 'react'
import StyleContact from '../styles/StyleContact'
import Container from '../styles/Container'
import Wrapper from '../styles/Wrapper'
import axios from '../services/axios'
import request from '../services/requests'
// service
const Contact = () => {
  const [formContact, setFormContact] = useState({
    firstname: '',
    lastname: '',
    email: '',
    text: ''
  })
  const [isContactMsg, setIsContactMsg] = useState('')

  const HandleSubmit = e => {
    e.preventDefault()
    try {
      // Create user
      const data = {
        firstname: formContact.firstname,
        lastname: formContact.lastname,
        email: formContact.email,
        text: formContact.text
      }
      axios
        .post(request.fetchContact, data)
        .then(res => {
          setIsContactMsg('Message envoyé')
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          console.log('object')
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Wrapper>
        <StyleContact>
          <div className='col'>
            <div className='col__text'>
              <span> Contactez-nous </span>
            </div>
          </div>
          <div className='form'>
            <div
              style={{
                color: '#071120',
                fontSize: '28px',
                marginBottom: '0px',
                marginTop: '10px',
                textAlign: 'center'
              }}
            >
              {isContactMsg}
            </div>
            <form onSubmit={e => HandleSubmit(e)}>
              <div className='form__card'>
                <div className='group'>
                  <div className='form__group'>
                    <label> Prenom * </label>
                    <input
                      type='text'
                      name='firstname'
                      placeholder='Nom'
                      className='form-control'
                      onChange={e =>
                        setFormContact({
                          ...formContact,
                          firstname: e.target.value
                        })
                      }
                      required
                    />
                  </div>
                  <div className='form__group'>
                    <label> Nom * </label>
                    <input
                      type='text'
                      name='lastname'
                      placeholder='Nom'
                      className='form-control'
                      onChange={e =>
                        setFormContact({
                          ...formContact,
                          lastname: e.target.value
                        })
                      }
                      required
                    />
                  </div>
                  <div className='form__group'>
                    <label> Email *</label>
                    <input
                      type='email'
                      name='email'
                      placeholder='email'
                      className='form-control'
                      onChange={e =>
                        setFormContact({
                          ...formContact,
                          email: e.target.value
                        })
                      }
                      required
                    />
                  </div>
                  <div className='form__group'>
                    <label> Commentaire *</label>
                    <textarea
                      name='text'
                      rows='5'
                      placeholder='message'
                      className='form-control'
                      onChange={e =>
                        setFormContact({
                          ...formContact,
                          text: e.target.value
                        })
                      }
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className='btn__contact'>
                <button type='submit' className='submit-btn btn'>
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </StyleContact>
      </Wrapper>
    </Container>
  )
}

export default Contact
