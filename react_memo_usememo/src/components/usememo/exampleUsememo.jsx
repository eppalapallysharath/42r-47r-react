import React, { useState, useMemo } from 'react'

export const ExampleUseMemo = () => {
    const [random, setRandom] = useState(0)
    const [sum, setSum] = useState(0)
    console.log("main component")
    const sumofnumbers = ()=>{
        console.log("sum values")
        let val = 0
        for(let i = 0; i<1000; i++ ){
            val+=i
        }
        return val + sum 
    }

    const sumvalue = useMemo(()=>{
        return sumofnumbers()
    },[sum])
  return (
    <div>
        <h1>this usememo example</h1>
        <p>Random number {random} </p>
        <button onClick={()=>{setRandom(Math.random())}}>generate number</button>
        <input type='number' onChange={(e)=>setSum(e.target.value)} />
        <p>{sumvalue}</p>
    </div>
  )
}
