import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {Route, Routes} from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App