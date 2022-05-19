import React from 'react'
import {Link} from 'react-router-dom'
import { Project } from '../../../models/Project'

type Props = {
    project: Project
}

const HomePortfolioSingle = ({ project }: Props) => {
    const img = process.env.REACT_APP_STRAPI_DOMAIN + project.attributes.image.data.attributes.formats.large.url;

    return (
        <Link to={`/portfolio/${project.id}`}>
            <div className='portfolio-single' style={{ backgroundImage: `url(${img})` }}>
                <div className="inner">
                    <p className='title'>{project.attributes.title}</p>
                    <label className='category'>{project.attributes.category}</label>
                </div>
            </div>
        </Link>
    )
}

export default HomePortfolioSingle