import './header.css'
import { Link } from 'react-router-dom'

function Header( { logout, user} ){

    return(
        <div className="header">
            <ul>
                <li><Link to="/family-list">Family List</Link></li>
                <li><Link to="/new-item">New Item</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
            <p>Welcome {user.name}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Header;