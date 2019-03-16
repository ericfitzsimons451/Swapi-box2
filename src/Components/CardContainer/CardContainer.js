import React from 'react'
import './CardContainer.scss'
import Card from '../Card/Card'

const CardContainer = (props) => {
        const cardsToDisplay = props.data.people.map((person) => {
            if (props.data.currentSelection === 'people') {
                return (
                <Card key={person.name} personData={person} />
                )
            }
            return cardsToDisplay
        })
    

    return (
        <div>
            {cardsToDisplay}
        </div>
    )
       
}

export default CardContainer