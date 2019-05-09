import React from 'react'
import Navbar from './Navbar'
import { tools } from './utils/_tools'
import Footer from './Footer'

const Tools = () => {
    React.useEffect(() => {
        document.title = 'Tools I Use - Adithya NR'
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <Navbar selected = {3} />
            <br/>
            <div className="container">                
                <h1 className="contact-h1 work-h1">Tools I Use</h1> <br/>
                <h3 className="tools-h3">Devices</h3>
                {tools && tools["0"].map((device, index) => (
                    <li
                     className="list" 
                     key={index}><a href={device.link} target="_blank" rel="noopener noreferrer">{device.name}</a>
                    </li>
                ))}
                <h3 className="tools-h3">Design</h3>
                {tools && tools["1"].map((device, index) => (
                    <li
                     className="list" 
                     key={index}><a href={device.link} target="_blank" rel="noopener noreferrer">{device.name}</a>
                    </li>
                ))}
                <h3 className="tools-h3">Development</h3>
                {tools && tools["2"].map((device, index) => (
                    <li
                     className="list" 
                     key={index}><a href={device.link} target="_blank" rel="noopener noreferrer">{device.name}</a>
                    </li>
                ))}
                <h3 className="tools-h3">OS</h3>
                {tools && tools["3"].map((device, index) => (
                    <li
                     className="list" 
                     key={index}><a href={device.link} target="_blank" rel="noopener noreferrer">{device.name}</a>
                    </li>
                ))}
                <h3 className="tools-h3">Notes</h3>
                {tools && tools["4"].map((device, index) => (
                    <li
                     className="list" 
                     key={index}><a href={device.link} target="_blank" rel="noopener noreferrer">{device.name}</a>
                    </li>
                ))}
                <h3 className="tools-h3">Task Management</h3>
                {tools && tools["5"].map((device, index) => (
                    <li
                     className="list" 
                     key={index}><a href={device.link} target="_blank" rel="noopener noreferrer">{device.name}</a>
                    </li>
                ))}
                <h3 className="tools-h3">Blogs</h3>
                {tools && tools["6"].map((device, index) => (
                    <li
                     className="list" 
                     key={index}><a href={device.link} target="_blank" rel="noopener noreferrer">{device.name}</a>
                    </li>
                ))}
                <h3 className="tools-h3">Courses</h3>
                {tools && tools["7"].map((device, index) => (
                    <li
                     className="list" 
                     key={index}><a href={device.link} target="_blank" rel="noopener noreferrer">{device.name}</a>
                    </li>
                ))}
                <br/> <br/> <br/>
                <Footer />
            </div>
        </div>
    )
}

export default Tools