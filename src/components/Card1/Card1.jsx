import React from 'react'
import './Card1.css'

function Card({title, image, description}) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <div className="hovercard">
                <img src={image} alt=''/>
                <div className="description">
                    <hr className="separator" />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card