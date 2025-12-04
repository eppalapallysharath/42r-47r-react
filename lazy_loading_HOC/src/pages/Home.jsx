import axios from 'axios'
import React, { lazy, useEffect, useState } from 'react'
const ProductsList = lazy(()=>import("./ProductsList").then((m)=>({default:m.ProductsList}))) 
// const LoadingHOC = lazy(()=>import("../Hoc/loadingHoc"))
import LoadingHOC from "../Hoc/loadingHoc"

// hoc
const Products = LoadingHOC(ProductsList)

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(()=>{
    setLoading(true)
    axios.get("https://fakestoreapi.com/products")
    .then(res=> { setData(res.data), setLoading(false), setError("")})
    .catch(err =>{console.log(err.message), setLoading(false), setError(err.message)})
  }, [])
  return (
    <div>
      <h4>Home</h4>
      <Products productsData={data} isLoading={loading}/>
    </div>
  )
}

export default Home