import React, { useState, lazy, Suspense } from 'react'
// import { DemoLazy } from './DemoLazy'
// import { DemoLazy2 } from './DemoLazy2'
import { Routes, Route, Link } from 'react-router-dom'
// import Home from './pages.jsx/Home'
// import { Service } from './pages.jsx/Service'
// import { Contact } from './pages.jsx/Contact'
// import { PageNotFound } from './pages.jsx/PageNotFound'

const Home = lazy(()=>import("./pages/Home"))
const Contact = lazy(()=>import("./pages/Contact").then((m)=>({default:m.Contact})))
const Service = lazy(()=>import("./pages/Service").then((m)=>({default:m.Service})))
const PageNotFound = lazy(()=>import("./pages/PageNotFound").then((m)=>({default:m.PageNotFound})))
const ProductsDetails = lazy(()=>import("./pages/productsDetails").then((m)=>({default:m.ProductsDetails})))

const DemoLazy = React.lazy(()=>import("./DemoLazy"))
const DemoLazy2 = lazy(()=>import("./DemoLazy2").then((module)=>({default:module.DemoLazy2})))

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <ul>
        <li><Link to={"/"}>Home </Link></li>
        <li><Link to={"/contact"}>contact</Link></li>
        <li><Link to={"/service"}> service</Link></li>
        <li><Link to={"/se"}> random</Link></li>
      </ul>
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/product/:id' element={<ProductsDetails/>} />
      </Routes>
      </Suspense>
      <h3>App</h3>
      <button onClick={()=>setShow(!show)}>{show ? "hide" : "show"}</button>
      <Suspense fallback={<h2>Loading...</h2>}>
      {show && <DemoLazy/>}
      {show && <DemoLazy2/>}
      </Suspense>
    </>
  )
}

export default App;