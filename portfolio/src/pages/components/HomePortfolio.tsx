import React, { useEffect, useState } from 'react'
import avatar4 from '../../img/avatar/avatar4.PNG'
import axios from 'axios'
import HomePortfolioSingle from './HomePortfolioSingle'

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

    useEffect(() => {
        GetProjects();
    }, [])

    const GetProjects = async () => {
        await axios.get<Project[]>('http://localhost:3004/projects')
            .then(res => {
                setProjects(res.data)
                console.log(projects)
            })
            .catch(err => alert(err))
    }




    return (
        <section className='container portfolio'>
            <h3><img src={avatar4} height={80} />My Portfolio</h3>
            <p>Questi sono i progetti che ho realizzato a scuola, corsi di formazione e just for fun!</p>
            <div className='home-portfolio-box'>
                {projects.length == 0 ? <p>Error: no project found!</p> : projects.map((project) => <HomePortfolioSingle project={project} />)}
            </div>
        </section>
    )
}

export default HomePortfolio