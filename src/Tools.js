import React from 'react'
import Navbar from './Navbar';

const Tools = () => {
    return (
        <div>
            <Navbar selected = {3} />
            <br/>
            <div className="container">                
                <h1 className="contact-h1 work-h1">Tools I Use</h1> <br/>
                <h3>Hardware</h3>
            </div>
        </div>
    )
}

export default Tools