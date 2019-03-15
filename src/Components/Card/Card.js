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

//if the data given is specific to the vehicles/people, 
//then there is only 1 way that it can be rendered.  Don't map over
//state given as props, map over the props that are specific to 
//this card.  There will be no _____, if that is
//not part of the displayed card