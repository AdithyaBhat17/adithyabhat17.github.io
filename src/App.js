import React, { Component } from 'react';
import Navbar from './Navbar';
import ReactDOM from 'react-dom';
import Hero from './Hero';
import { Helmet } from 'react-helmet'

class App extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView()
  }  
  render() {
    return (
      <div>
        <Helmet>
            <title>Adithya NR | I am a Full stack Designer based in Bengaluru, India.</title>
        </Helmet>
        <Navbar selected={1}/>
        <Hero />
      </div>
    );
  }
}

export default App;
