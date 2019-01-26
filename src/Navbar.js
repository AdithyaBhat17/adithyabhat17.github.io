import React, { Component } from 'react';
import logo from './assets/adithya1.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const { selected } = this.props;
    return (         
        <nav className="navbar container navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/about" style={selected === 2 ? {textDecoration:'line-through',color:'#000'} : {color: '#444'}}>About</Link>
                </li>
                <li className="nav-item">
                    <a href="https://medium.com/adithya-nr" style={{color: '#444'}} target="_blank" rel="noopener noreferrer" className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/work" style={selected === 3 ? {textDecoration:'line-through',color:'#000'} : {color: '#444'}}>Work</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact" style={selected === 4 ? {textDecoration:'line-through',color:'#000'} : {color: '#444'}}>Contact</Link>
                </li>
                
                </ul>
            </div>
        </nav>
    );
  }
}

export default Navbar;