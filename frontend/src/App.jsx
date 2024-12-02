import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route/>
      </Routes>
    </div>
  )
}

export default App