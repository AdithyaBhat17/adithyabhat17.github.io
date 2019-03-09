import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

let education = [
    {
        year: '2018',
        course: 'React Nanodegree',
        institution: 'Udacity',
        score: ''
    },
    {
        year: '2015-2019',
        course: 'B.Tech - Computer Science & Engineering',
        institution: 'RNS Institute of Technology',
        score: '8 CGPA'
    },
    {
        year: '2013-2015',
        course: 'Pre-University Education',
        institution: 'Vijaya Junior College',
        score: '93%'
    },
]

let projects = [
    {
        title: 'RNS Chronicles',
        date: 'Oct 2018 - Nov 2018',
        url: 'https://rnsit.now.sh',
        desc: 'A student blog built using ReactJS & Firestore.'
    },
    {
        title: 'Would You Rather',
        date: 'Nov 2018',
        url: 'https://wyr.now.sh',
        desc: 'A Gen-Y game built using React-Redux.'
    },
    {
        title: 'My Reads',
        date: 'July 2018',
        url: 'https://adithyabhat.com/React-MyReads',
        desc: 'A book tracking app which lets users select books they would want to read and keep track of their progress by marking them as `read`, `want to read`, or `currently reading`.'
    },
    {
        title: 'RNSIT',
        date: 'May 2018 - present',
        url: 'https://rnsit.ac.in',
        desc: 'Currently working on optimizing the performance and making the website a PWA.'
    },
    {
        title: 'AIKYA',
        date: 'April 2018 - May 2018',
        url: 'https://rnsaikya.herokuapp.com',
        desc: 'A web app for the departmental fest of CSE, RNSIT.'
    },
]

let experience = [
    {
        role: 'Intern',
        company: 'Betsol',
        date: 'January 2019 - Present',
        url: 'https://betsol.com',
        workdone: 'Working on redesigning the admin dashboard for the sales team of Zmanda, Betsol.'
    },
    {
        role: 'Freelance Web Developer',
        company: 'GrandMentor LLC',
        date: 'June 2018 - August 2018',
        url: 'https://grand-mentor.com',
        workdone: 'Worked on designing and developing a company portfolio using ReactJS.'
    },
    {
        role: 'Summer Intern',
        company: 'The Valley Bootcamp',
        date: 'July 2018 - August 2018',
        url: 'https://www.thevalleybootcamp.com/',
        workdone: 'Worked on developing a Telegram chatbot to track user expenses using IBM Watson and Python.'
    }
]

let skills = [
    {
        field: 'Design',
        skills: 'UI / UX / Wireframing / Web Design'
    },
    {
        field: 'Development',
        skills: 'Javascript / ReactJS / React-Native / Redux / Java / NodeJS / GraphQL / ElectronJS / Python / HTML5 / CSS3'
    },
]

export default function Resume() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return(
        <div className="container resume">
            <Helmet>
                <title>Resume | Adithya NR</title>
            </Helmet>
            <header className="resume-header">
                <Link to="/" title="Home">
                    <small>Home</small>
                </Link>
                <HashLink to="#Bio" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="About">
                    <small>About</small>
                </HashLink>
                <HashLink to="#Education" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="Education">
                    <small>Education</small>
                </HashLink>
                <HashLink to="#Projects" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="Projects">
                    <small>Projects</small>
                </HashLink>
                <HashLink to="#Experience" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="Experience">
                    <small>Experience</small>
                </HashLink>
                <HashLink to="#Skills" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="Skills">
                    <small>Skills</small>
                </HashLink>
            </header>
            <br/>
            <div id="Bio" className="resume-div">
                <h1>Hi, I'm Adithya NR</h1>
                <p className="resume-p">
                    A Computer Science Engineer from Bengaluru, India. <br/>
                    I'm a React Nanodegree Graduate and I love design-oriented development. <br/>
                    I have an obsession for detail and perfectly executed designs, I have a strong interest in usability, 
                    and am constantly looking to create intriguing and concept enhancing interactions that remain 
                    intuitive for the user.
                </p>
            </div>
            <div id="Education" className="resume-div">
                <h1>Education</h1>
                {education.map(edu => (
                    <div key={edu.score} className="resume-edu">
                        <p>{edu.course} / {edu.institution} / <small>{edu.score} <br/> <small>{edu.year}</small></small></p>
                    </div>
                ))}
            </div>
            <div id="Projects" className="resume-div">
                <h1>Projects</h1>
                {projects.map(project => (
                    <div key={project.title} className="resume-edu">
                        <p style={{fontWeight:'bold',fontSize:'1.2em'}}><a title={project.title} target="_blank" rel="noopener noreferrer" href={project.url}>{project.title}</a>                              
                        <br/> <small>{project.date}</small></p>
                        <p>{project.desc}</p>
                    </div>
                ))}
                <p><a href="https://github.com/AdithyaBhat17">See more on my GitHub</a></p>
            </div>
            <div id="Experience" className="resume-div">
                <h1>Experience</h1>
                {experience.map(exp => (
                    <div key={exp.company} className="resume-edu">
                        <p style={{fontWeight:'normal',fontSize:'1.3em'}}>{exp.role} -&nbsp;
                            <a title={exp.title} target="_blank" rel="noopener noreferrer" href={exp.url}>{exp.company}</a> <br/>
                        <small><small>{exp.date}</small></small> <br/>

                        <span style={{fontSize:'0.8em'}}>{exp.workdone}</span>
                        </p>
                    </div>
                ))}
            </div>
            <div id="Skills" className="resume-div">
                <h1>Skills</h1>
                {skills.map(skill => (
                    <div key={skill.field} className="resume-edu">
                        <h3>{skill.field}</h3>
                        <p>{skill.skills}</p>
                    </div>
                ))}
            </div>
            <p className="socials resume-socials">
                <a target="_blank" rel="noopener noreferrer" title="behance" href="https://behance.net/adithyabhat">
                    <i className="fab fa-behance"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" title="dribbble" href="https://www.dribbble.com/adithyanr">
                    <i className="fab fa-dribbble"></i>
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
            </p>
        </div>
    )
}
