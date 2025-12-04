import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingHOC from '../Hoc/loadingHoc'
import { ProductCard } from './productcard'


const Product = LoadingHOC(ProductCard)

export const ProductsDetails = () => {
  const {id} = useParams()
   const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(()=>{
    setLoading(true)
    axios.get("https://fakestoreapi.com/products/"+id)
    .then(res=> { console.log(res.data), setData(res.data), setLoading(false), setError("")})
    .catch(err =>{console.log(err.message), setLoading(false), setError(err.message)})
  }, [])
  return (
    <div>productsDetails
      <Product  data={data} isLoading={loading}/>
    </div>
  )
}
