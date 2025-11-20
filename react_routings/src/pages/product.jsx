import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Product = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setData(res.data))
        .then(err => console.log(err))
    },[])
  return (
    <div>
        <h2>Product detailed page</h2>
        <h4>{data.title}</h4>
        <img src={data.image} />
        <p>{data.price}</p>
        <p>{data.category}</p>
        {/* <p>{data.rating}</p> */}
    </div>

  )
}
