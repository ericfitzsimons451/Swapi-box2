import React from 'react'
import './CardContainer.scss'
import Card from '../Card/Card'

const CardContainer = (props) => {
    return(
        <div className="card-container">
            {props.data.people.map((person, i) => {
                return <Card key={i} cardInfo={person} />
            })}
        </div>
    )
//this is where I can map over the props and render the cards using
//the shortcircuit operator.  There will be a lot of props, so 
//there will be conditional logic saying, if it is here, then
//render it.  So, only the data coming in will be rendered. 

//where to do the check for the doing/notdoing the fetch again?
}

export default CardContainer