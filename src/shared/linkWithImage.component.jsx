import React from 'react'

export default function LinkWithImage({routeLink, imageName}) {
    return <div className="linkWithImg" >
        <a href={routeLink} className="linkWithImg__a" >
            <img src={`/public/icons/${imageName}.jpeg`} alt={imageName} />
        </a>
    </div>
}