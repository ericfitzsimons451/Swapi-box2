import React from 'react'
import './CardContainer.scss'
import Card from '../Card/Card'



const CardContainer = ({ currentSelection }) => {
    const cardsToDisplay = (props) => {
        if (currentSelection === 'people') {
        return props.data.people.map((person) => {
            return (
                <Card key={person.name} personData={person} />
            )
        })
        } else if (currentSelection === 'planets') {
            return props.data.planets.map((planet) => {
                return (
                    <Card key={planet.name} planetData={planet} />
                )
            })
        } else if (currentSelection === 'vehicles') {
            return props.data.vehicles.map((vehicle) => {
                return (
                    <Card key={vehicle.name} vehicleData={vehicle} />
                )
            })
        }
    }
       
    return (
        <div>
            <div>{cardsToDisplay}</div>
        </div>
    )
       
}




export default CardContainer