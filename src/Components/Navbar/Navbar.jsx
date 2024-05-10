import React, { useState } from "react";
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li><Link to='/' className={location.pathname === '/' ? 'active' : '' }>Home</Link></li>
                <li><Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About Me</Link></li>
                <li><Link to='/resume' className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
                <li><Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;