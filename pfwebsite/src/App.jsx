import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import OurTeam from './pages/OurTeam'

function App() {

  return (  
    <div className=''>
      <Router>

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/OurTeam' element={<OurTeam/>} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
