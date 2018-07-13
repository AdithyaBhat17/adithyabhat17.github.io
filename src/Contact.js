import React,{Component} from 'react';
import './App.css';
import contact from './assets/contact.png';

class Contact extends Component{
    render(){
        return(
            <div className="contact" id="contact">
                <h3 className="aboutheader wow fadeIn">&lt;Contact/&gt;</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12 wow fadeInLeft">
                            <img src={contact} alt="Designed By Freepik" className="contactimg"/>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 wow fadeInRight">
                            <form className="form" action="https://formspree.io/adithyabhat17.ab@gmail.com" method="POST">
                                <p>If you're interested in working with me,drop in a message below to get in touch!</p>
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="NAME" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="_replyto" className="form-control" placeholder="EMAIL" />
                                </div>
                                <div className="form-group">
                                    <textarea rows="5" name="message" className="form-control" placeholder="MESSAGE" />
                                </div>
                                <input type="submit" className="btnf" value="SUBMIT" />
                                <input type="text" name="_gotcha" className="gotcha"/>
                                <input type="hidden" name="_subject" value="Website contact" />
                                <input type="hidden" name="_next" value="https://adithyabhat.com" />
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Contact;