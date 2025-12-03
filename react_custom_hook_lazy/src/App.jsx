import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProductsDetails } from './pages/ProductsDetails'
import { NavBar } from './components/NavBar'

const App = () => {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/productdetails/:id' element={<ProductsDetails/>} />
    </Routes>
    </>
  )
}

export default App