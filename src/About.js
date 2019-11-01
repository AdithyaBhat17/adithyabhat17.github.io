import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import me from './assets/person.svg'
import { Tooltip } from '@auth0/cosmos'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'About | Adithya NR'
    })

    return (
      <React.Fragment>
        <Navbar />
        <div className="container animated fadeIn">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src={me} alt="Adithya NR" className="me-img"/>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1 className="who">
                        About Me
                    </h1>
                    <p className="about-me me-p">
                        As you might have guessed already, I'm Adithya, a twenty-one-year-old&nbsp;
                        <span id="fsd"> 
                        <Tooltip
                         position='top' 
                         content='A designer that gets involved in every stage of a product design: research, design, development.'>
                            Full-Stack Designer
                        </Tooltip></span>&nbsp;from Bengaluru, India.
                        <br/>
                        I'm a&nbsp;
                        <span> 
                            <a
                             style={{color: '#434aae'}} 
                             href="https://confirm.udacity.com/JGVCXDQ6" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             title="My Nanodegree certificate">
                                React Nanodegree Graduate
                            </a>  
                        </span>
                        , an <span>
                            <a
                             style={{color: '#434aae'}} 
                             href="https://www.interaction-design.org/adithya-nr" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             title="My IDF Profile">
                                IDF certified UX Designer
                            </a>
                        </span>&nbsp;and I love design-oriented development. <br/>
                        Free time is hard to come by but when it does, I <span>freelance</span> and build web projects for 
                        clients in the 21st century for the time being. <br/>
                        If you have an exciting project in mind, get in touch with me
                        <span> <Link style={{color: '#434aae'}} to="/contact" title="email">here</Link>.</span>
                    </p> <br/>
                    <p className="buttons btn-2">
                        <Link to="/work">View past Work</Link>
                        <Link to="/contact">Get in Touch</Link>
                    </p> <br/>
                    <p className="socials about-s" style={{marginTop:'35px'}}>
                        <a target="_blank" rel="noopener noreferrer" title="behance" href="#behance">
                            <i className="fab fa-behance"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" title="dribbble" href="https://www.dribbble.com/adithyanr">
                            <i className="fab fa-dribbble"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" title="instagram" href="https://www.instagram.com/adithya_nr">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" title="linkedin" href="https://www.github.com/AdithyaBhat17">
                            <i className="fab fa-github"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" title="medium" href="https://www.medium.com/adithya-nr">
                            <i className="fab fa-medium-m"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" title="linkedin" href="https://www.linkedin.com/in/adithya-nr">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <Link style={{textAlign:'right',float:' right',opacity:'0.7'}} to="/legal"><small><small>legal</small></small></Link>
                    </p>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
}

export default About;
