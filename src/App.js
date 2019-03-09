import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import { Helmet } from 'react-helmet'

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div>
      <Helmet>
          <title>Adithya NR | I am a Full stack Designer based in Bengaluru, India.</title>
      </Helmet>
      <Navbar selected={1}/>
      <Hero />
    </div>
  )
}

export default App;
