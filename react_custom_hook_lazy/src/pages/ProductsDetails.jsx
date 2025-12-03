import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useFetch } from '../HOC/fetch';

export const ProductsDetails = () => {
    // const [data, setData] = useState({})
    const {id} = useParams();

    // function fetchProduct() {
    //     const url = `https://fakestoreapi.com/products/${id}`
    //     axios.get(url)
    //     .then(res => setData(res.data))
    //     .catch(err => console.log(err))
    // }

    // useEffect(()=>{
    //     fetchProduct()
    // },[])
 
    const urlObject = {url: `https://fakestoreapi.com/products/${id}`, method: "get"}
    const data = useFetch(urlObject)

  return (
    <div>
        <h2>Products details</h2>
        {
            data ? <Card style={{ width:"20rem" }}>
            <Card.Title>{data.title}</Card.Title>
            <Card.Img src={data.image} />
            <Card.Text>{data.description}</Card.Text>
            <Card.Text>{data.category}</Card.Text>
            <Card.Title>Price $ {data.price}</Card.Title>
            <Card.Text>ratings {data?.rating?.rate}/5</Card.Text>
        </Card> : <h3>Loading....</h3>
        }
        
    </div>
  )
}
