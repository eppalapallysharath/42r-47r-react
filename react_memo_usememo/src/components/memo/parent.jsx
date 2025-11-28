import React, { useMemo, useState } from 'react'
import {ChildMemo } from './child'
import { FormData } from './formData'

export const Parent = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState("")
    console.log("parent")

    function submit(e){
        e.preventDefault()
        setData({username: username, password:password})
        setPassword("")
        setUsername("")
    }

    const memocountvalue = useMemo(()=>{
      console.log("memo")
      return count
    },[count])  

  return (
    <div>
        <h3>this parent component</h3>
        <p>Count value {memocountvalue}</p>
        <button onClick={()=>setCount(count + 1)}>+</button>
        <button onClick={()=>setCount(count - 1)}>-</button>
        <button onClick={()=>{setNumber(Math.random())}}>Generate random number</button>
        <hr></hr>
        <ChildMemo number={number}/>
        <form onSubmit={submit}>
            <p>username</p>
            <input type='text' name="username" onChange={(e)=>setUsername(e.target.value)}/>
             <p>password</p>
            <input type='text' name="username" onChange={(e)=>setPassword(e.target.value)}/>
            <button >Login</button>
        </form>
    <FormData userData = {data} />
    </div>
  )
}
