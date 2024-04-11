import React ,{ useEffect}from 'react'

import { Home , About, Contact, Projects, Nav, Skills, Footer} from './components'

import './index.css'

function App() {

  return (
    <>
<body>
    <Nav />
 
     <Home/>
     
     
     <About />
  
     
     <Skills />
  
     

     <Projects />
  
     
   <Contact />

<Footer/>
</body>
    </>
  )
}

export default App
