import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import About from './About'
import Projects from './Projects';
import Contact from './Contact'
import Resume from './Resume'
import Work from './Work'
import Legal from './Legal'
import Error from './Error';
import Skills from './Skills';

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/work" component={Projects}/>
            <Route exact path="/work/:path" component={Work}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/legal" component={Legal}/>  
            <Route component={Error}/>                 
        </Switch>
    </Router>
  )
}
  
export default Routes
