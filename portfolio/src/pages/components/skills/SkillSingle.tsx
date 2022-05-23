import React from 'react'

type Props = {
    image: string,
    name: string
}

const Skill = (props: Props) => {

  let blob = new Blob([props.image], {type: 'image/svg+xml'})
  let url = URL.createObjectURL(blob)

  return (
    
    <div className='col-lg-3 col-md-3 col-sm-6 col-6 text-center'>
        <object type="image/svg+xml" data={url} className="img-fluid skills-logo"/>
        <br/>
        <label>{props.name}</label>
    </div>
  )
}

export default Skill