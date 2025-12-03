import React, { useState, lazy, Suspense } from 'react'
import { ProductsList } from '../components/ProductsList'

// name exports
const DemoComp = React.lazy(()=>import("../components/DemoComp").then((module)=>({default:module.DemoComp})))

// default exports 
const Demo2 = lazy(()=>import("../components/Demo2")) 

export const Home = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Suspense fallback={<h3>Loading</h3>}>
      {show && <DemoComp/>}
      {show && <Demo2/>}
      </Suspense>
        <button onClick={()=>setShow(!show)} >{show? "hide": "show"}</button>
        <h2>Products</h2>
        <ProductsList/>
    </div>
  )
}
