import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="header">
                <ul style={{ "display": "flex", "justifyContent": "space-evenly" }}>
                    <Link to={'/'} >Home</Link>
                    <Link to={'/about'} >About</Link>
                    <Link to={'/profile'} >Profile</Link>
                </ul>
            </div>
        </>)
}

export default Header