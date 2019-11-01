import React from 'react';
import logo from './assets/adithya1.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (         
        <nav className="navbar container navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" activeClassName="active-nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <a href="https://medium.com/adithya-nr" style={{color: '#444'}} target="_blank" rel="noopener noreferrer" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/work" activeClassName="active-nav-link">Work</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/tools" activeClassName="active-nav-link" className="nav-link">Tools I Use</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" activeClassName="active-nav-link">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;