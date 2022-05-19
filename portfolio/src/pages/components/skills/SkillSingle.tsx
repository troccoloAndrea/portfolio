import React from 'react'

type Props = {
    image: string,
    name: string
}

const Skill = (props: Props) => {
  return (
    
    <div className='col-lg-3 col-md-3 col-sm-6 col-6 text-center'>
        <img src={process.env.REACT_APP_STRAPI_DOMAIN + props.image} alt={props.name} className="img-fluid skills-logo"/>
        <br/>
        <label>{props.name}</label>
    </div>
  )
}

export default Skill