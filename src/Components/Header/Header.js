import React from 'react'
import './Header.scss'
import PropTypes from 'prop-types'

const Header = ({ crawlText }) => {
    return (
        <div className="scrolling-container">
            <h3 className="scrolling-text">{crawlText}</h3>
        </div>
    )
}

Header.propTypes = {
    crawlText: PropTypes.func
}

export default Header