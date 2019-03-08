import React from 'react'
import Navbar from './Navbar'
import ReactDOM from 'react-dom'
import projects from './utils/_projects'
import ProgressiveImage from 'react-progressive-image'
import { AtomSpinner } from 'react-epic-spinners'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import { Helmet } from 'react-helmet'
import Error from './Error';

export default class Work extends React.Component{
    componentDidMount() {
        ReactDOM.findDOMNode(this).scrollIntoView()
    }
    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollIntoView()
    }
    render(){
        const placeholder = (
            <div className="loader-project">
                <AtomSpinner color="#000" className="loader" />
            </div>
        ) 
        let empty = projects.filter(project => project.path === this.props.match.params.path) 
        if(empty.length === 0)
            return <Error/>
        return(
            <div>
                <Helmet>
                    <title>Work | Adithya NR</title>
                </Helmet>
                <Navbar selected={4} />
                <br/>
                <div className="container">
                    {projects && projects.map((project,index,array) => project.path === this.props.match.params.path && (
                        <div key={project.path} className="project-details">
                            <h1>{project.name}</h1>
                            <h3>{project.desc}</h3>
                            <ProgressiveImage src={project.image} placeholder="">
                                {(src, loading) => {
                                    return loading ? placeholder : <img className="main-img" src={src} title={project.name} alt={project.name}/>;
                                }}
                            </ProgressiveImage><br/> <br/>
                            {project.about && (
                                <div>
                                    <h2 className="about-work">About {project.name}</h2> <br/>
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-12">
                                            <ProgressiveImage src={project.about.dp} placeholder="">
                                                {(src, loading) => {
                                                    return loading ? placeholder : <img className="project-about-img" src={src} title={project.name} alt={project.name}/>;
                                                }}
                                            </ProgressiveImage>
                                        </div>
                                        <div className="col-lg-9 col-sm-12">
                                            <br/>
                                            <p className="about-me">{project.about.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            )} <br/>
                            <h2 className="about-work">Problem Statement</h2>
                            <p className="about-me">{project.statement}</p> <br/>
                            <h2 className="about-work">Solution</h2>
                            {project.solutiontext && (
                                <div>
                                    <p className="about-me">{project.solutiontext}</p>
                                </div>
                            )} <br/>
                            {project.solution && project.solution.map((work, index) => index % 2 === 0 ? (
                                <div className="row sol-row" key={work.title}>
                                    <div className="col-lg-6 order-lg-2 order-sm-1">
                                        <h1 className="project-work-title">{work.title}</h1>
                                        <p className="project-work-desc">{work.description}</p>
                                    </div>
                                    <div className="col-lg-6 order-lg-1 order-sm-2">
                                        <ProgressiveImage src={work.img} placeholder="">
                                            {(src, loading) => {
                                                return loading ? placeholder : <img src={src} title={project.name} alt={work.title}/>;
                                            }}
                                        </ProgressiveImage>
                                    </div>
                                </div>                                            
                                )
                                : (
                                <div className="row sol-row" key={work.title}>
                                    <div className="col-lg-6 col-sm-12">
                                        <h1 className="project-work-title">{work.title}</h1>
                                        <p className="project-work-desc">{work.description}</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <ProgressiveImage src={work.img} placeholder="">
                                            {(src, loading) => {
                                                return loading ? placeholder : <img src={src} title={project.name} alt={work.title}/>;
                                            }}
                                        </ProgressiveImage>
                                    </div>
                                </div> 
                            ))} <br/>
                            <h2 className="about-work"><strong>Tech Stack Used</strong> </h2>
                            <p className="about-me"><strong>Design: </strong>{project.tech.design}</p>
                            <p className="about-me"><strong>Web Technology: </strong>{project.tech.development}</p> <br/>
                            {project.performance && (
                                <div>
                                    <h2 className="about-work">Audit</h2>
                                    <ProgressiveImage src={project.performance} placeholder="">
                                        {(src, loading) => {
                                            return loading ? placeholder : <img src={src} title={project.name} alt="Google lighthouse score"/>;
                                        }}
                                    </ProgressiveImage> <br/>
                                    <small style={{fontWeight:'lighter', opacity:0.6,fontSize:'0.8em'}} className="caption-perf">Source: Google LightHouse - Simulated Fast 3G, 4x CPU Slowdown</small>
                                </div>
                            )}<br/>
                            {project.testimonial && (
                                <div>
                                    <h2 className="about-work">Testimonial</h2>
                                    <blockquote className="about-me">
                                        " {project.testimonial.text} " <br/>
                                    - {project.testimonial.name} | {project.testimonial.role}
                                    </blockquote> <br/>
                                </div>
                            )} <br/>
                            <p className="buttons">
                                <a target="_blank" rel="noopener noreferrer" title={project.name} href={project.url}>View Project here</a>
                                {array[index+1] ? (
                                    <Link to={array[index+1].path}>Next Project</Link>
                                )
                                : (
                                    <Link to={array[0].path}>Next Project</Link>
                                )}                                
                            </p> <br/> <br/> 
                            <Footer/>

                        </div>
                    ))}
                </div>
            </div>
        )
    }
}