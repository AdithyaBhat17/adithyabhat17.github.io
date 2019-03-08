import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import sheet from './assets/specs.svg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default class Contact extends React.Component{
    contact = (e) => {
        // e.preventDefault();
        document.form.action="https://getsimpleform.com/messages?form_api_token=de3f3e206755bfc7b484633b6ab33cff"
        alert(`Thanks for reaching out ${e.target.name.value}! I'll get back to you ASAP!`)
        // this.props.history.push('/')
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this).scrollIntoView()
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>Contact | Adithya NR</title>
                    <meta name="description" content="Got a project in mind, a question or something else? Get in touch with me here"/>
                    <meta name="og:description" content="Got a project in mind, a question or something else? Get in touch with me here"/>
                    <script>
                        {'var LandbotLiveConfig = { index: \'https://landbot.io/u/H-59003-WNTZ6MRU56B9E9UL/index.html\', accent: \'#444444\' }'}
                    </script>
                    <script src="https://static.helloumi.com/umiwebchat/umiwebchat.js?v=1531493681238" defer>
                    </script>
                </Helmet>
                <Navbar selected={5}/>
                <div className="container animated fadeIn">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <br/>
                            <h1 className="contact-h1">Get in touch</h1>                            
                            <form name="form" onSubmit={e => this.contact(e)} className="form" method="post" encType="multipart/form-data">
                                <input type='hidden' name='_spam' value='message' />
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea rows="3" name="message" className="form-control"/>
                                </div>
                                <p className="buttons left">
                                    <input type="submit" value="Send"/>
                                    <Link to="/resume">View Resume</Link>
                                </p>                                
                            </form>
                            <a className="feedback" href="https://5f1ed849.nolt.io/" target="_blank" rel="noopener noreferrer">Have time for some Feedback?</a>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img src={sheet} alt="" className="contact-img"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}