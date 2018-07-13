import React,{Component} from 'react';
import './App.css';
import webdev from './assets/webdev.png';

class Landing extends Component{
    render(){
        return(
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-push-6">
                            <img src={webdev} alt="Designed By Freepik" className="heroimg animated fadeInUp"/>
                        </div>
                        <div className="col-md-6 col-lg-pull-6">
                            <h1 className="hello animated fadeInLeft">Hello,I'm Adithya!</h1>
                            <p className="intro-p animated fadeInRight">I'm a 20 year old web developer based in Bengaluru,IN. 
                            <br/>If you are a business seeking a web presence or an<br/>employer looking to hire,you can get in touch with me here.</p>
                            <div className="btns animated fadeInUp">
                                <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/forms/5tuFTzDAmxI1sliu2" className="btn1">I need a website</a>
                                <a href="#contact" className="btn2">I'm looking to hire</a>
                            </div>                        
                        </div>   
                        <i className="fas fa-chevron-down fa-2x animated bounce infinite"></i>                     
                    </div>
                    
                </div>
            </div>
        )
    }
} 

export default Landing;