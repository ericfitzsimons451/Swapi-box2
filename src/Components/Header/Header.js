import React from 'react'
import './Header.scss'

const Header = ({ crawlText }) => {
    return (
        <div className="scrolling-container">
            <h3 className="scrolling-text">{crawlText}</h3>
        </div>
    )
}

export default Header