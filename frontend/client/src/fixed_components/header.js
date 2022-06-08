import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header( { logout, user} ){

    return(
        <div className="header">
            <ul>
                <li><Link to="/family-list">Family List</Link></li>
                <li><Link to="/new-item">New Item</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/Login" onClick={logout}>Logout</Link></li>
            </ul>
            <p className='welcome'>Welcome {user.name}</p>
        </div>
    )
}

export default Header;