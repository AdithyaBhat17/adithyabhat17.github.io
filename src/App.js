import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Adithya NR | I am a Full stack Designer based in Bengaluru, India.'
  })
  
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
    </React.Fragment>
  )
}

export default App;
