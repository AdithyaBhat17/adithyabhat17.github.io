import React from 'react';
import './App.css';
import Landing from './Landing';

const Navbar = () => {
    return(
        <div className="App">
            <div className="App-inner">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed animated fadeIn" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <button className="navbar-brand animated pulse infinite" style={{
                                backgroundColor:'transparent',outline:'none',border:'none'}}></button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#about" className="animated fadeInLeft">About</a></li>
                                <li><a href="#portfolio" className="animated fadeInRight">Portfolio</a></li>
                                <li><a href="https://adithyanr.herokuapp.com" className="animated fadeInUp">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Landing/>
            </div>
        </div>
    )   
}

export default Navbar;
