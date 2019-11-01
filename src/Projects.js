import React, { useEffect } from 'react'
import Navbar from './Navbar'
import projects from './utils/_projects'
import ProgressiveImage from 'react-progressive-image'
import { Link } from 'react-router-dom'
import { AtomSpinner } from 'react-epic-spinners'
import Footer from './Footer'

const placeholder = (
    <div className="loader-project">
        <AtomSpinner color="#000" className="loader" />
    </div>
) 

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Work | Adithya NR'
    })

    return (
        <React.Fragment>
            <Navbar />
            <br/>
            <div className="container animated fadeIn">
                <h1 className="contact-h1 work-h1">My Work</h1> <br/>
                <div className="row">
                    {projects && projects.map(project => (
                        <div key={project.name} className="col-md-6 col-sm-12 hover">
                            <Link to={`/work/${project.path}`} className="thumbnail">
                                <ProgressiveImage src={project.image} placeholder="">
                                    {(src, loading) => {
                                        return loading ? placeholder : <img className="project-img" src={src} alt={project.name}/>;
                                    }}
                                </ProgressiveImage>
                                <h2 className="project-h2">{project.name}</h2>
                                <h3 className="project-cat">{project.category}</h3>
                            </Link>
                        </div>
                    ))}
                </div> <br/> <br className="hide"/>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Projects;