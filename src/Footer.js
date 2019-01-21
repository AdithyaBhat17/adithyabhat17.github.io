import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return(
        <div>
            <p className="get-in-touch">
                Got a project in mind, a question or something else? <br/>
                Get in touch with me <Link to="/contact">here</Link>
            </p> <br/>
            <p className="socials about-s full-s resume-socials">
                <a target="_blank" rel="noopener noreferrer" title="behance" href="https://behance.net/adithyabhat">
                    <i className="fab fa-behance"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" title="dribbble" href="https://www.dribbble.com/adithyanr">
                    <i className="fab fa-dribbble"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" title="instagram" href="https://www.instagram.com/adithya_nr">
                    <i className="fab fa-instagram"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" title="Github" href="https://www.github.com/AdithyaBhat17">
                    <i className="fab fa-github"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" title="medium" href="https://www.medium.com/adithya-nr">
                    <i className="fab fa-medium-m"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" title="linkedin" href="https://www.linkedin.com/in/adithya-nr">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <Link style={{textAlign:'right',float:' right',opacity:'0.7'}} to="/legal"><small>legal</small></Link>
            </p>            
        </div>
    )
}