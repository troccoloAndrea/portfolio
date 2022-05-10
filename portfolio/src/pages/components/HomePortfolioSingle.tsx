import React from 'react'
import { Project } from './HomePortfolio'
import bg from '../../img/index.css.png'
import {Link} from 'react-router-dom'

type Props = {
    project: Project
}

const HomePortfolioSingle = ({ project }: Props) => {
    const img = require("../../img/projetcs/" + project.img);

    return (
        <Link to={`/portfolio/${project.id}`}>
            <div className='portfolio-single' style={{ backgroundImage: `url(${img})` }}>
                <div className="inner">
                    <p className='title'>{project.title}</p>
                    <label className='category'>{project.category}</label>
                </div>
            </div>
        </Link>
    )
}

export default HomePortfolioSingle