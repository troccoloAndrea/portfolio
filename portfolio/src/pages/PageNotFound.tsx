import React from 'react'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import avatar6 from '../img/avatar/avatar6.PNG'

type Props = {}

const PageNotFound = (props: Props) => {
  return (
    <div className='not-found-container'>
      <div className='not-found-content'>
        <img src={avatar6} className="img-fluid not-found-avatar"></img>
        <h1>Opss... pagina non trovata!</h1>
        <div className='project-back-nav'>
          <Link to="/" className='btn btn-fill'><BsChevronDoubleLeft className='icon' /> Back to home</Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound