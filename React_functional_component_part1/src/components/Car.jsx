import { useState } from "react"
import "./car.css"
import {Bike} from "./bike"
import {BikeModels} from "./BikeModels" 

export function Car (){
    const [start, setStart] = useState(true)
    const [models, setModels] = useState(["bmw850", "bmw750", "bmw310", "bwm1800"])

    const handleCarStart = () =>{
        setStart(!start)
    }
    // console.log(start)
    return <div>
        <p>Car</p>
        <p style={{ color: start? "green" : "red", textAlign : start? "center" :"left" }} className= {start ? "car-start": "car-stop"}> {start ?  "BMW car is moving" : "cart is stopped on road"}</p>
        <button onClick={()=>handleCarStart()}>{start ? "stop": "start"}</button>
        {start && <p>Light are on</p>}
        <Bike  isStarted={start} > <h1>BMW 1250GS </h1> </Bike>
        {models.map(ele => <BikeModels modeldata={ele}/>)}

    </div>
}

