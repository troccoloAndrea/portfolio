import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import { ModuleReference } from 'typescript'

type Props = {
    title:string,
    description:string,
    customComponent?: React.ReactNode
    image: string,
    imgAlt: string,
    imgId: string,
    imgClass: string
}

const SectionInfo:React.FC<Props> = ({ title, description, customComponent, image, imgAlt, imgId, imgClass }) => {
    return (
        <div className="section-info">
            <div className="section-info-content">
                <h3>{title}</h3>
                <p>{description}</p>
                {customComponent}
                <img src={image} alt={imgAlt} className={imgClass} id={imgId} />
            </div>
        </div>
  )
}

export default SectionInfo