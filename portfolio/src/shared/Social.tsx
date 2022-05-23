import { Tooltip, Zoom } from '@mui/material'
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'


const Social = () => {
  return (
    <div className='social'>
      <ul>
        <li>
          <Tooltip title="troccoloandrea01@gmail.com" arrow TransitionComponent={Zoom} >
            <a href='mailto:troccoloandrea01@gmail.com'><FaEnvelope /></a>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Linkedin" arrow TransitionComponent={Zoom} >
            <a href="https://www.linkedin.com/in/andrea-troccolo/"><FaLinkedin /></a>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="GitHub" arrow TransitionComponent={Zoom} >
            <a href="https://github.com/troccoloAndrea"><FaGithub /></a>
          </Tooltip>
        </li>
        <li className='social-r'>
          <Tooltip title="Instagram" arrow TransitionComponent={Zoom} >
            <a href="https://www.instagram.com/andreatroccolo/"><FaInstagram /></a>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}

export default Social