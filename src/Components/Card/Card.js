import React from 'react'
import './Card.scss'

const Card = ({ personData }) => {
    return (
        <div className="card">
            {personData.name && <h3>{personData.name}</h3>}
            {personData.species && <h3>{personData.species}</h3>}
            {personData.homeworld && <h3>{personData.homeworld}</h3>}
            {personData.population && <h3>{personData.population}</h3>}
        </div>
    )
}

export default Card
