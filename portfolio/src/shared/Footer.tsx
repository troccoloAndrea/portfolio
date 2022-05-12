import React from 'react'
import '../css/Shared.css'
import logo from '../img/avatar/avatarlogo.PNG'
import Social from './Social'
import avatar5 from '../img/avatar/avatar5.PNG'

type Props = {}

function Footer({ }: Props) {
  return (
    <footer>
      <div className='container footer'>
        <hr />
        <div className='footer-menu'>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#skills">skills</a></li>
            <li><a href="/#portfolio">portfolio</a></li>
            <li><a href="/#contact">contacts</a></li>
          </ul>
          <Social />
        </div>
        <a className="navbar-brand" href="#">{'< '}<img src={logo} width={40} /> {'at />'}</a>
        <p className='copyright'>Copyright © 2022 Andrea Troccolo. All rights reserved.</p>
        <img src={avatar5} id="avatar-5" />
      </div>
    </footer>
  )
}

export default Footer