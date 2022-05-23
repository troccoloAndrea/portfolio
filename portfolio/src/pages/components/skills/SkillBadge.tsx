import { Tooltip, Zoom } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Skill, StrapiSkillSingleRequest } from '../../../models/Project'

type Props = {
  image: number,
  name: string
}

const SkillBadge = ({ image, name }: Props) => {

  const [skill, setSkill] = useState<Skill>();

  const GetSkill = async () => {
    await axios.get<StrapiSkillSingleRequest>(`${process.env.REACT_APP_STRAPI_DOMAIN}` + `${process.env.REACT_APP_API_SKILLS}` + `/${image}?populate=*`)
      .then(res => {
        setSkill(res.data.data)
      })
      .catch(err => alert("Server Error (500) :("))
  }

  useEffect(() => {
    GetSkill();
  }, [])


  return (
    <>
      {skill ?
        <div>
          <Tooltip title={name} arrow  TransitionComponent={Zoom} >
            <img src={skill.attributes.image.data.attributes.url} className="skill-badge img-fluid" alt={name} />
          </Tooltip>
        </div>
        : <></>}
    </>
  )
}

export default SkillBadge