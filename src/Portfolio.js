import React from 'react';
import './App.css';
import projects from  './utils/_DATA';

const Portfolio = () => {
    return(
        <div className="portfolio" id="portfolio">
            <h3 className="aboutheader wow fadeIn">&lt;My work/&gt;</h3>
            <div className="container">
                <div className="row">
                    {projects.map(project => (
                        <div key={project.name} className="col-md-3 col-sm-12 col-xs-12 wow fadeInUp">
                            <div className="thumbnail">
                                <img className="workimg" src={project.image} alt={project.name}/>
                                <h5 className="workh">{project.name}</h5>
                                <p className="workp">{project.desc}</p>
                                <a target="_blank" rel="noopener noreferrer" href={project.url} className="workbtn">view here</a>
                            </div>
                        </div>
                    ))}              
                </div>
            </div>
        </div>
    )
}

export default Portfolio;