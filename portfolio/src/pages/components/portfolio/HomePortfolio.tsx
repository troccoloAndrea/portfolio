import React, { useContext, useEffect, useState } from 'react'
import avatar4 from '../../../img/avatar/avatar4.PNG'
import axios from 'axios'
import HomePortfolioSingle from './HomePortfolioSingle'
import Loading from '../../../shared/Loading'
import ContextWrapper, { AppContext } from '../../../ContextWrapper'

export interface SEO {
    slug:string,
    metatitle: string,
    metadescription:string
}

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
    playstore: string,
    SEO : SEO
}

const HomePortfolio = () => {
    
    const projects  = useContext<Project[]>(AppContext);

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