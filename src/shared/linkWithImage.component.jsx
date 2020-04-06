import React from 'react'
import {Link} from 'react-router-dom'

export default function LinkWithImage({routeLink, imageName}) {
    return <div className="linkWithImg" >
        <Link to={routeLink} className="linkWithImg__a" >
            <img src={`/public/icons/${imageName}.jpeg`} alt={imageName} />
        </Link>
    </div>
}