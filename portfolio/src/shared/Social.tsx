import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa'


const Social = () => {
  return (
    <div className='social'>
        <ul>
          <li><a href='mailto:troccoloandrea01@gmail.com'><FaEnvelope/></a></li>
          <li><a href="https://www.linkedin.com/in/andrea-troccolo/"><FaLinkedin/></a></li>
          <li><a href="https://github.com/troccoloAndrea"><FaGithub/></a></li>
          <li><a href="https://www.instagram.com/andreatroccolo/"><FaInstagram/></a></li>
        </ul>
    </div>
  )
}

export default Social