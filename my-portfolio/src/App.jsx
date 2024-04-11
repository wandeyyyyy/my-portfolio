import React, {useState, useEffect} from 'react'
import CircleLoader from 'react-spinners/CircleLoader'

import { Home , About, Contact, Projects, Nav, Skills, Footer} from './components'

import './index.css'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <div>
      {loading ? 
      <div className='bodyOnload'>
        <CircleLoader
        color={"#fe6235"}
        loading={loading}
        size={100}/> 
        </div>
        : 
        <>
          <Nav />
          <Home/>
            <About />
          <Skills />
          <Projects />  
        <Contact />
     
     <Footer/>
     </>
      }
      </div>
      )
    }

  

export default App
