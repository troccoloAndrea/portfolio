import React from 'react'
import Loading from './Loading'

type Props = {}

const PageLoader = (props: Props) => {
    return (
        <div className='page-loader'>
            <div className="page-loader-content">
                <h1>{"<andreatroccolo />"}</h1>
                <Loading />
            </div>
        </div>
    )
}

export default PageLoader