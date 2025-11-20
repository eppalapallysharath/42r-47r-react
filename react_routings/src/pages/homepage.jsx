import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export const HomePage = () =>{
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const students = [ { id:1, name:"sharath", class:"10th"},{id:2,name:"jerry", class:"11th"} ]
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res =>  setData(res.data))
        .catch(err => console.log(err))
    },[])
    return <div>
        <h2> this Home page </h2>
        {students.map((v,index )=> <div key={index} onClick={()=>navigate("/student/" + v.id)}> <p> name {v.name} class {v.class} </p>  </div>)}
        <Link to={"/contact"}> Go to contact page </Link>
        {data.map(product => <div key={product.id} onClick={()=> navigate(`/product/${product.id}/${product.title}`)}>
            <img src={product.image}  width={"150px"}/>
            <p>{product.title}</p>
            </div>)}
    </div>
}