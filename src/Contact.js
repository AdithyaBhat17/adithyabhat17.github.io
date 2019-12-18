import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import sheet from './assets/specs.svg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
    
const contact = (e) => {
    // TODO : Verify existence of mail id.
    document.form.action="https://getsimpleform.com/messages?form_api_token=de3f3e206755bfc7b484633b6ab33cff"
    alert(`Thanks for reaching out ${e.target.name.value}! I'll get back to you ASAP!`)
}

const Contact = () => {

    const [valid, setValid] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
    })    

    const verifyEmail = async (emailId) => {
        let re = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/)
        let valid = re.test(emailId)
        setValid(valid)
    }

    return(
        <div>
            <Helmet>
                <title>Contact | Adithya NR</title>
                <meta name="description" content="Got a project in mind, a question or something else? Get in touch with me here"/>
                <meta name="og:description" content="Got a project in mind, a question or something else? Get in touch with me here"/>
                <script src="https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js"></script>
                <script>
                  var myLandbot = new LandbotLivechat({
                    index: 'https://landbot.io/u/H-330271-2RB1E3Y80V7XDYSX/index.html',
                  });
                </script>
            </Helmet>
            <Navbar />
            <div className="container animated fadeIn">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <br/>
                        <h1 className="contact-h1">Get in touch</h1>                            
                        <form name="form" onSubmit={e => contact(e)} className="form" method="post" encType="multipart/form-data">
                            <input type='hidden' name='_spam' value='message' />
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                 onBlur={(e) => verifyEmail(e.target.value)} 
                                 type="email" 
                                 name="email" 
                                 className={valid ? "form-control" : "error-input form-control"}
                                 required
                                />
                                {!valid && <small className="error">
                                    Invalid email address
                                </small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea rows="3" name="message" className="form-control" required/>
                            </div>
                            <p className="buttons left">
                                <input type="submit" value="Send"/>
                                <Link to="/resume">View Resume</Link>
                            </p>                                
                        </form>
                        <a className="feedback" href="https://5f1ed849.nolt.io/" target="_blank" rel="noopener noreferrer">Have time for some Feedback?</a>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src={sheet} alt="contact" className="contact-img"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
