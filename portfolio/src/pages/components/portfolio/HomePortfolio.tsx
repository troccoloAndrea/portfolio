import React, { useEffect, useState } from 'react'
import avatar4 from '../../../img/avatar/avatar4.PNG'
import axios from 'axios'
import HomePortfolioSingle from './HomePortfolioSingle'
import Loading from '../../../shared/Loading'

export interface Project {
    id: number,
    title: string,
    img:string,
    description: string,
    category: string,
    tecnology: string[],
    activities: string[],
    role: string,
    partners: string[],
    github: string,
    demo: string,
    applestore: string,
    playstore: string
}

const HomePortfolio = () => {
    const [projects, setProjects] = useState<Project[]>([])

    const GetProjects = async () => {
        await axios.get<any>('https://api.jsonbin.io/b/627be5d7019db467969b1512', {
            headers: { 'X-Master-Key' : '$2b$10$vXMWhcKR9uVgiwf/7GD3lO/3kf5OsS9YsFvTkh23DFB5bUseQ6kjK' }
        })
            .then(res => {
                console.log(res);
                setProjects(res.data)
                console.log(projects)
            })
            .catch(err => alert("Server Error (500) :("))
    }

    useEffect(() => {
        GetProjects();
    },[])



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