import React,{Component} from 'react';
import './App.css';
import about from './assets/about.png';
import WOW from 'wowjs';
import resume from './assets/AdithyaNR-resume.pdf';

class About extends Component{
    componentDidMount(){
        new WOW.WOW().init();
    }
    render(){
        return(
            <div className="about" id="about">
                <h3 className="aboutheader wow fadeInDown">&lt;About Me/&gt;</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12 wow fadeInLeft">
                            <img src={about} alt="Designed by Freepik" className="aboutimg"/>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 wow fadeInRight">
                            <h3 className="webdesigner">Web designer &amp; developer</h3>
                            <p className="about-p">Hey there! I'm Adithya NR.</p>
                            <p className="about-p">I specialize in Front-end Web Development and am experienced with all stages of the development cycle for dynamic web projects.</p>
                            <p className="about-p">I freelance in my free time.I work on projects right from design phase to the development phase.</p>
                            <p className="about-p">This website is my personal/professional website and will house all my work.</p>
                            <div className="socials">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/AdithyaBhat17"><i className="fab fa-github fa-2x animated pulse infinite"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/adithya-nr-8002a8148/"><i className="fab fa-linkedin fa-2x animated pulse infinite"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/adithyabhat__/"><i className="fab fa-instagram fa-2x animated pulse infinite"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Adithyabhat9"><i className="fab fa-twitter fa-2x animated pulse infinite"></i></a>
                            </div>
                            <a href={resume} className="resume">Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;