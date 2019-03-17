import React from 'react'
import './Card.scss'

const Card = ({ personData, planetData, vehicleData }) => {
    return (
        <div className="card">
            {personData.name && <h3>{personData.name}</h3>}
            {personData.species && <h3>{personData.species}</h3>}
            {personData.homeworld && <h3>{personData.homeworld}</h3>}
            {personData.population && <h3>{personData.population}</h3>}
            {planetData.name && <h3>{planetData.name}</h3>}
            {planetData.climate && <h3>{planetData.climate}</h3>}
            {planetData.terrain && <h3>{planetData.terrain}</h3>}
            {planetData.population && <h3>{planetData.population}</h3>}
            {planetData.residents && <h3>{planetData.residents}</h3>}
            {vehicleData.name && <h3>{vehicleData.name}</h3>}
            {vehicleData.model && <h3>{vehicleData.model}</h3>}
            {vehicleData.class && <h3>{vehicleData.class}</h3>}
            {vehicleData.passengers && <h3>{vehicleData.passengers}</h3>}
        </div>
    )
}

export default Card
