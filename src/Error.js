import React, { useEffect } from 'react'
import Navbar from './Navbar'
import error from './assets/error.svg'

export default function Error(props){

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return(
        <div>
            <Navbar />
            <br className="hide"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 animated fadeIn">
                        <img src={error} className="voice-img" alt="Voice Assistant"/>
                    </div>
                    <div className="col-md-6 col-sm-12 animated fadeIn">
                        <h1 className="e404">404!</h1>
                        <h3 className="alexa">Alexa! Play Despacito.</h3>
                        <p className="about-me center">
                            I'm afraid the page you're looking for is missing my friend <i className="fas fa-sad-cry"></i>
                        </p>
                        <p className="buttons">
                            <button onClick={() => props.history.go(-1)}><i className="fas fa-arrow-left"></i> Go Back</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}