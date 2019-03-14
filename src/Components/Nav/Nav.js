import React from 'react'
import './Nav.scss'
import PropTypes from 'prop-types'

const Nav = ({ fetchPeople, fetchPlanets, fetchVehicles }) => {
    return (
        <div className="nav-container">
            <h1 className="title">SwapiBox</h1>
            <button className='fetchPeopleBtn' onClick={fetchPeople}>People</button>
            <button className='fetchPlanetsBtn' onClick={fetchPlanets}>Planets</button>
            <button className='fetchVehiclesBtn' onClick={fetchVehicles}>Vehicles</button>
            <button>Favorites <span>0</span></button>
        </div>
    )
}



Nav.propTypes = {
    fetchPeople: PropTypes.func,
    fetchPlanets: PropTypes.func,
    fetchVehicles: PropTypes.func
}

export default Nav