import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faPinterestP,
  faTwitter,
  faSnapchatGhost
} from '@fortawesome/free-brands-svg-icons'
import Skills from '../styles/Skills'
const SkillsLink = () => {
  return (
    <Skills>
      <div className='cards__skills'>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faPinterestP} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faSnapchatGhost} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </Skills>
  )
}

export default SkillsLink
