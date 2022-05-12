import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Project } from './components/portfolio/HomePortfolio'
import { AiFillEye } from 'react-icons/ai'
import { FaAppStoreIos, FaGithub } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import Loading from '../shared/Loading'
import { HashLink as Link } from 'react-router-hash-link';

type Props = {}

const Portfolio = (props: Props) => {

    const [project, setProject] = useState<Project>()
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0,0);
        id ? GetProject(id) : alert("error");
    }, [])


    const GetProject = async (id: string) => {
        await axios.get<any>(`https://api.jsonbin.io/b/627be5d7019db467969b1512`, {
            headers: { 'X-Master-Key': '$2b$10$vXMWhcKR9uVgiwf/7GD3lO/3kf5OsS9YsFvTkh23DFB5bUseQ6kjK' }
        })
            .then(res => {
                let p = res.data[id]
                setProject(p)
            })
            .catch(err => alert("Server Error (500) :("))
    }


    return (
        <>

            <div className="container project">
                {project ? <>
                    <div className='project-hero'>
                        <img src={require("../img/projetcs/" + project.img)} alt={project.title} className="img-fluid hero-image" />
                        <h1>{project.title}</h1>
                        <label className='role'>{project.role}</label>
                        <label className='category'>{project.category}</label>
                        <br />
                        {project.tecnology.map((v, i) => <label key={i} className='technology'>{v}</label>)}
                        <hr />
                    </div>
                    <p>{project.description}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>What i've done</h3>
                            <ul>
                                {project.activities.map((v, i) => <li key={i}>{v}</li>)}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            {project.partners.length > 0 ?
                                <>
                                    <h3>Project partners</h3>
                                    {project.partners.map((v, i) => <li key={i}>{v}</li>)}
                                </>
                                : <></>}
                        </div>
                    </div>
                    {project.demo !== "" && project.github !== "" && project.playstore !== "" && project.applestore !== "" ? <h3 className='text-center'>Project links</h3> : <></>}
                    <div className='link-box'>
                        {project.demo !== "" ? <a href={project.demo} target="_blank" rel='noreferrer' className="link-icon"><AiFillEye /></a> : <></>}
                        {project.github !== "" ? <a href={project.github} target="_blank" rel='noreferrer' className="link-icon"><FaGithub /></a> : <></>}
                        {project.playstore !== "" ? <a href={project.playstore} target="_blank" rel='noreferrer' className="link-icon"><IoLogoGooglePlaystore /></a> : <></>}
                        {project.applestore !== "" ? <a href={project.applestore} target="_blank" rel='noreferrer' className="link-icon"><FaAppStoreIos /></a> : <></>}
                    </div>
                    <div className='project-back-nav'>
                        <Link to="/#portfolio" className='btn btn-fill'><BsChevronDoubleLeft className='icon' /> Back to home</Link>
                    </div>
                </>
                    : <Loading />}

            </div>




        </>
    )
}

export default Portfolio