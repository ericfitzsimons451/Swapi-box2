import React from 'react'
import './Nav.scss'
import PropTypes from 'prop-types'

const Nav = ({ fetchPeople, fetchPlanets, fetchVehicles }) => {
    return (
        <div className="nav-container">
            <h1 className="title">SwapiBox</h1>
            <button onClick={fetchPeople}>People</button>
            <button onClick={fetchPlanets}>Planets</button>
            <button onClick={fetchVehicles}>Vehicles</button>
            <button>Favorites</button>
        </div>
    )
}
Nav.propTypes = {
    fetchPeople: PropTypes.func,
    fetchPlanets: PropTypes.func,
    fetchVehicles: PropTypes.func
}

export default Nav