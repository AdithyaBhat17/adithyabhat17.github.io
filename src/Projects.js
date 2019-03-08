import React, { Component } from 'react';
import Navbar from './Navbar';
import ReactDOM from 'react-dom';
import projects from './utils/_projects'
// import axios from 'axios'
// import ReactImageFallback from 'react-image-fallback'
import ProgressiveImage from 'react-progressive-image'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import { AtomSpinner } from 'react-epic-spinners'
import Footer from './Footer';

class Projects extends Component {
    componentDidMount() {
      ReactDOM.findDOMNode(this).scrollIntoView()
    }
  render() {
    const placeholder = (
        <div className="loader-project">
            <AtomSpinner color="#000" className="loader" />
        </div>
    ) 
    return (
        <div>
            <Helmet>
                <title>Work | Adithya NR</title>
            </Helmet>
            <Navbar selected={4}/>
            <br/>
            <div className="container animated fadeIn">
                <h1 className="contact-h1 work-h1">My Work</h1> <br/>
                <div className="row">
                    {projects && projects.map(project => (
                        <div key={project.name} className="col-md-6 col-sm-12 hover">
                            <Link to={`/work/${project.path}`} className="thumbnail">
                                {/* <ReactImageFallback fallbackImage={project.image} src={project.image} alt={project.name} className="project-img"/> */}
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
        </div>
    );
  }
}
export default Projects;