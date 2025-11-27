import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { PageNotFound } from './pages/PageNotFound';
import { NavBar } from './components/Navbar';
import { CartContext } from './ContextApi/CartContext';

const App = () => {
  const [cart, setCart] = useState([])
  const cartContextValue= {cart, setCart}
  return (
    <CartContext.Provider value={cartContextValue} >
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App;
