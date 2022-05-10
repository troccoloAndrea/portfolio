import React from 'react'
import '../css/Shared.css'
import logo from '../img/avatar/avatarlogo.PNG'
import Social from './Social'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='container footer'>
      <hr/>
      <div className='footer-menu'>
        <ul>
          <li>Home</li>
          <li>skills</li>
          <li>portfolio</li>
          <li>contacts</li>
        </ul>
        <Social/>
      </div>
      

      <a className="navbar-brand" href="#">{'< '}<img src={logo} width={40}/> {'at />'}</a>
      <p className='copyright'>Copyright © 2022 Andrea Troccolo. All rights reserved.</p>
    </div>
  )
}

export default Footer