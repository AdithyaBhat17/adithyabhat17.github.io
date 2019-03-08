import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'
// import { Redirect } from 'react-router-dom'

import error from './assets/error.svg'

const Skills = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return(
        <div>
            <Navbar selected={3} />
            {/* <br className="hide"/> */}
                <Helmet>
                    <title>Skills (Coming Soon!) | Adithya NR</title>
                </Helmet>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 animated fadeIn">
                            <img src={error} className="voice-img" alt="Work In Progress"/>
                        </div>
                        <div className="col-md-6 col-sm-12 animated fadeIn">
                            <h1 className="e404">404!</h1>
                            <h3 className="alexa">Alexa! Play Despacito.</h3>
                            <p className="about-me center">
                                Hey, I'm still working on this page right now <i className="fas fa-sad-cry"></i> <br/>
                                Take a look at my projects instead <i className="fas fa-grin-beam-sweat"></i>
                            </p>
                            <p className="buttons">
                                <button onClick={() => props.history.push('/work')}>Sure!</button>
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Skills