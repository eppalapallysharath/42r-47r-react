import {useState} from "react"

export const Welcome = function(){
    const [count, setCount] = useState(1)
    const [input1, setinput1] =  useState("")
    const [number, setNumber] = useState()
    function dec (){
        setCount(count - 1)
    }
    function rest(){
        setCount(0)
    }

    const numberinput = (e) =>{
        setNumber(e.target.value)
    }

    return <div>
        <p>Hi welcome to react</p>
        <h1>{count}</h1>
        {/* inline event binding */}
        <button onClick={()=>setCount(count + 1)}>+</button>
        {/* External Function event binding */}
        <button onClick={dec}>-</button>
        <button onClick={()=>rest()}>rest</button>
        <input type="text" onChange={(e)=>setinput1(e.target.value)}/>
        <p>Live preview {input1}</p>
        <input type="number" onChange={(e)=>numberinput(e)} />
        <h1>live number {number}</h1>
    </div>
}