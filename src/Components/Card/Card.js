import React from 'react'
import './Card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <h3>Name: {props.cardInfo.name}</h3>
            <h3>Homeworld: {props.cardInfo.homeworld}</h3>
            <h3>Species: {props.cardInfo.species}</h3>
            <h3>Population: {props.cardInfo.population}</h3>
        </div>
    )
}

export default Card
//homeworld
//species
//population