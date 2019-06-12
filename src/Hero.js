import React from 'react';
import hero from './assets/hero.svg';
import { Link } from 'react-router-dom';

export default function Hero(){
    return (
      <div className="container">
        <div className="row">
            <div className="col-lg-6 order-lg-2 order-sm-1 animated fadeIn">
                <img className="hero-img" src={hero} alt="hero"/>
            </div>
            <div className="col-lg-6 order-lg-1 order-sm-2 animated fadeIn">
                <h1 className="hero-tag">Hi, I'm Adithya</h1>
                <p className="about-tag">
                    I make elegantly professional web apps for a living and also design mobile apps &amp; logos. <br/>
                    If you want me to do any one of these for you, get in touch with me here.
                </p>
                <p className="buttons hvr-grow">
                    <Link to="/about" title="learn more">Learn More</Link>
                    <Link to="/contact" title="contact">Contact Me</Link>
                </p>
                <p className="socials">
                    <a target="_blank" rel="noopener noreferrer" title="behance" href="https://behance.net/adithyabhat">
                        <i className="fab fa-behance"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="dribbble" href="https://www.dribbble.com/adithyanr">
                        <i className="fab fa-dribbble"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="instagram" href="https://www.instagram.com/adithya_nr">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="medium" href="https://www.github.com/AdithyaBhat17">
                        <i className="fab fa-github"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="linkedin" href="https://www.linkedin.com/in/adithya-nr">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </p>

            </div>
        </div>
      </div>
    )
}
