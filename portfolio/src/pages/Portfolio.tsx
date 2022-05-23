import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'
import { FaAppStoreIos, FaGithub } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import Loading from '../shared/Loading'
import { HashLink as Link } from 'react-router-hash-link';
import { Project, Skill, StrapiSingleProjectRequest } from '../models/Project'
import SkillBadge from './components/skills/SkillBadge'
import axios from 'axios'
import { Tooltip, Zoom } from '@mui/material'
import PageLoader from '../shared/PageLoader'

type Props = {}

const Portfolio: React.FC = (props: Props) => {

    const [project, setProject] = useState<Project>()

    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
        GetProject();
    }, [])

    const GetProject = async () => {
        id ? await axios.get<StrapiSingleProjectRequest>(`${process.env.REACT_APP_STRAPI_DOMAIN}` + `${process.env.REACT_APP_API_PROJECT}` + `/${id}?populate=*`)
            .then(res => {
                setProject(res.data.data)
            })
            .catch(err => alert("Server Error (500) :(")) : alert("Error: no project found :(")
    }





    return (
        <>{project ?
            <div className="container project">
                <>
                    <div className='project-hero'>
                        <img src={project.attributes.image.data.attributes.url} alt={project.attributes.title} className="img-fluid hero-image" />
                        <h1>{project.attributes.title}</h1>
                        <label className='role'>{project.attributes.role}</label>
                        <label className='category'>{project.attributes.category}</label>
                        <br />
                        <div className="skillbadge-box">
                            <>{project.attributes.skills ? project.attributes.skills.data.map((v: Skill) => <SkillBadge key={v.id} image={v.id} name={v.attributes.name} />) : <></>}</>
                        </div>

                        <hr />
                    </div>
                    <p>{project.attributes.description}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>What i've done</h3>
                            <ul>
                                {project.attributes.activities ? project.attributes.activities.map((v, i) => <li key={i}>{v.name}</li>) : <></>}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            {project.attributes.partners?.length != 0 ?
                                <>
                                    <h3>Project partners</h3>
                                    <ul>
                                        {project.attributes.partners ? project.attributes.partners.map((v, i) => <li key={i}>{v.name}</li>) : <></>}
                                    </ul>
                                </>
                                : <></>}
                        </div>
                    </div>
                    {project.attributes.demo !== null && project.attributes.github !== null && project.attributes.playstore !== null && project.attributes.applestore !== null ? <h3 className='text-center'>Project links</h3> : <></>}
                    <div className='link-box'>
                        {project.attributes.demo !== null ?
                            <Tooltip title="View the project" arrow TransitionComponent={Zoom} >
                                <a href={project.attributes.demo} target="_blank" rel='noreferrer' className="link-icon"><AiFillEye /></a>
                            </Tooltip>
                            : <></>}
                        {project.attributes.github !== null ?
                            <Tooltip title="View the code on GitHub" arrow TransitionComponent={Zoom} >
                                <a href={project.attributes.github} target="_blank" rel='noreferrer' className="link-icon"><FaGithub /></a>
                            </Tooltip>
                            : <></>}
                        {project.attributes.playstore !== null ?
                            <Tooltip title="Get it on Google Play" arrow TransitionComponent={Zoom} >
                                <a href={project.attributes.playstore} target="_blank" rel='noreferrer' className="link-icon"><IoLogoGooglePlaystore /></a>
                            </Tooltip>
                            : <></>}
                        {project.attributes.applestore !== null ?
                            <Tooltip title="Download on the App Store" arrow TransitionComponent={Zoom} >
                                <a href={project.attributes.applestore} target="_blank" rel='noreferrer' className="link-icon"><FaAppStoreIos /></a>
                            </Tooltip>
                            : <></>}
                    </div>
                    <div className='project-back-nav'>
                        <Link to="/#portfolio" className='btn btn-fill'><BsChevronDoubleLeft className='icon' /> Back to home</Link>
                    </div>
                </>
            </div>
            : <Loading />}
        </>
    )
}

export default Portfolio