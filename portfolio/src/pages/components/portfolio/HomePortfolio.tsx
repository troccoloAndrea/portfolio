import React, { useContext, useEffect, useState } from 'react'
import avatar4 from '../../../img/avatar/avatar4.PNG'
import HomePortfolioSingle from './HomePortfolioSingle'
import Loading from '../../../shared/Loading'
import { Project, StrapiProjectRequest } from '../../../models/Project'
import axios from 'axios'


const HomePortfolio = () => {
    
    const [projects, setProjects] = useState<Project[]>([])

    const GetProjects = async () => {
        await axios.get<StrapiProjectRequest>(`http://localhost:1337/api/projects?populate=*`)
            .then(res => {
                setProjects(res.data.data)
            })
            .catch(err => alert("Server Error (500) :("))
    }

    useEffect(() => {
      GetProjects();
    }, [])
    

    return (
        <section id="portfolio" className='container portfolio'>
            <h3><img src={avatar4} height={80} alt="andrea" />My Portfolio</h3>
            <p>Questi sono i progetti che ho realizzato a scuola, corsi di formazione e just for fun!</p>
            <div className='home-portfolio-box'>
                {projects.length === 0 ? <Loading/> : projects.map((project) => <HomePortfolioSingle key={project.id} project={project} />)}
            </div>
        </section>
    )
}

export default HomePortfolio