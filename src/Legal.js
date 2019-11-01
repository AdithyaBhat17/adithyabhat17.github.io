import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Legal = () => {

    useEffect(() => {
      window.scrollTo(0, 0)
      document.title = 'Legal | Adithya NR'
    })

    return(
      <React.Fragment>
          <Navbar />
          <br/>
          <div className="container">
              <p className="about-me">
                <strong>Contents of this site are &copy; Copyright 2019, Adithya NR. All rights reserved.</strong> <br/>
                The&nbsp;
                 <a
                 href="https://github.com/AdithyaBhat17/adithyabhat17.github.io" 
                 alt="source code"
                 title="source code"
                 target="_blank"
                 rel="noopener noreferrer">source code</a> is available under the&nbsp;
                  <a
                 href="https://raw.githubusercontent.com/AdithyaBhat17/adithya.now.sh/master/LICENSE" 
                 alt="License"
                 title="License"
                 target="_blank"
                 rel="noopener noreferrer">Apache License 2.0</a> 
              </p> 
              <h1 className="about-work">Privacy Policy</h1>
              <p className="about-me">
                This privacy policy governs your access to and use of adithyabhat.com, including any content, functionality 
                and services offered on or through adithyabhat.com (the “Website”).
              </p>
              <h2 className="about-work">1. What information I collect about you and why</h2>
              <p className="about-me">
                When you access the Website, I’ll learn certain information about you during your visit: <br/> <br/>
                <strong>a. Information you provide to me.</strong> I collect information that you provide to me by filling out forms on 
                the Website, by responding to surveys, or by mailing me. I use this information to deliver my services 
                to you, and to send you information and marketing materials. <br/> <br/>
                <strong>b. Information I collect through Google Analytics.</strong> This data will 
                generally include information about your location, how you’re using my website, what device you’re using, 
                etc. The information I collect automatically is used for statistical data to improve my Website and my 
                service offerings and won’t include personal information.
              </p>
              <h2 className="about-work">2. Cookies</h2>
              <p className="about-me">
                This Website uses cookies and similar technologies (Google Analytics) to provide me with 
                information on how people move about the site, what is of interest to them and what is not, how my
                marketing is performing, and incidental items such as what percentage of users access the site from a 
                personal computer versus a mobile phone. You may block most cookies by adjusting your browser settings.
              </p>
              <h2 className="about-work">3. Third Party use of Cookies</h2>
              <p className="about-me">
                Some content or applications on the Website are served by third-parties. These third parties may use 
                cookies alone or in conjunction with web beacons or other tracking technologies to collect information 
                about you when you use my website. I do not control these third parties’ tracking technologies or how 
                they may be used. If you have any questions about this, you should contact the responsible provider 
                directly.
              </p>
              <h2 className="about-work">4. How long do I keep your data?</h2>
              <p className="about-me">
                I will retain any information you choose to provide to me until the earlier of: <br/> <br/>
                <li>you asking me to delete the information,</li>
                <li>my decision to cease using my existing data providers, or</li>
                <li>I decide that the value in retaining the data is outweighed by the costs of retaining it.</li>
              </p>
              <br/> <br/>
              <Footer />
          </div>
      </React.Fragment>
    )
}

export default Legal