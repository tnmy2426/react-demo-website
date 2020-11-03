import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='nav_container'>
                <nav className="navbar">
                    <NavLink className="navbar-brand" to="/">CompanyLogo</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink exact activeClassName='navlink_active' className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='navlink_active' className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='navlink_active' className="nav-link" to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='navlink_active' className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='navlink_active' className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
