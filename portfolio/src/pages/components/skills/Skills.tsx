import React, { useEffect, useState } from 'react'
import SectionInfo from '../section/SectionInfo'
import SkillSingle from './SkillSingle'


import avatar2 from '../../../img/avatar/avatar2.PNG'
import axios from 'axios';
import {Skill, StrapiSkillRequest} from '../../../models/Project';
import Loading from '../../../shared/Loading';

type Props = {}

const Skills:React.FC = (props: Props) => {

    const [skills, setSkills] = useState<Skill[]>([]);

    const GetSkills = async () => {
        await axios.get<StrapiSkillRequest>(`${process.env.REACT_APP_STRAPI_DOMAIN}` + `${process.env.REACT_APP_API_SKILLS}` + `?populate=*`)
            .then(res => {
                setSkills(res.data.data)
            })
            .catch(err => alert("Server Error (500) :("))
    }

    useEffect(() => {
        GetSkills();
    },[])

    return (
        <section id="skills" className='container'>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div style={{'marginTop' : '8%'}}>
                        <SectionInfo title={'My Tech Stack'} description={'Le mie tecnologie preferite!'} image={avatar2} imgAlt={'andrea'} imgId={'avatar-2'} imgClass={'img-fluid avatar'} />
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="row">
                        {skills ? skills.filter(s => s.attributes.homepage).map((s:Skill) => <SkillSingle key={s.attributes.name} name={s.attributes.name} image={s.attributes.image.data.attributes.url} />)  : <Loading/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills