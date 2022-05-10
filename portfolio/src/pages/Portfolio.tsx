import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Project } from './components/HomePortfolio'
import {AiFillEye} from 'react-icons/ai'
import {FaAppStoreIos, FaGithub} from 'react-icons/fa'
import {IoLogoGooglePlaystore} from 'react-icons/io5'
import { BsChevronDoubleLeft } from 'react-icons/bs'

type Props = {}

const Portfolio = (props: Props) => {

    const [project, setProject] = useState<Project>()
    const { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        id ? GetProject(id) : alert("error");
    }, [])


    const GetProject = async (id: string) => {
        await axios.get<Project>(`http://localhost:3004/projects/${id}`)
            .then(res => {
                setProject(res.data)
            })
            .catch(err => alert(err))
    }


    return (
        <>
            {project ?
                <div className="container project">
                    <div className='project-hero'>
                        <img src={require("../img/projetcs/" + project.img)} alt={project.title} className="img-fluid hero-image" />
                        <h1>{project.title}</h1>
                        <label>{project.role}</label>
                        <label className='category'>{project.category}</label>
                        <br />
                        {project.tecnology.map(k => <label className='technology'>{k}</label>)}
                        <hr />
                    </div>
                    <p>{project.description}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>What i've done</h3>
                            <ul>
                                {project.activities.map(k => <li>{k}</li>)}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            {project.partners.length > 0 ?
                                <>
                                    <h3>Project partners</h3>
                                    {project.partners.map(k => <li>{k}</li>)}
                                </>
                                : <></>}
                        </div>
                    </div>
                    <h3 className='text-center'>Project links</h3>
                    <div className='link-box'>
                        {project.demo != "" ? <a href={project.demo} target="_blank" className="link-icon"><AiFillEye /></a> : <></>}
                        {project.github != "" ? <a href={project.github} target="_blank" className="link-icon"><FaGithub/></a> : <></>}
                        {project.playstore != "" ? <a href={project.playstore} target="_blank" className="link-icon"><IoLogoGooglePlaystore/></a> : <></>}
                        {project.applestore != "" ? <a href={project.applestore} target="_blank" className="link-icon"><FaAppStoreIos/></a> : <></>}
                    </div>
                    <div className='project-back-nav'>
                        <Link to="/" className='btn btn-fill'><BsChevronDoubleLeft className='icon'/> Back to home</Link>
                    </div>




                </div>



                : <p>loading..</p>}
        </>
    )
}

export default Portfolio