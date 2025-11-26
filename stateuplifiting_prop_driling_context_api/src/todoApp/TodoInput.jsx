import React, { useState } from 'react'

export const TodoInput = (props) => {
    const [input, setInput] = useState("");
    const {setTodos, todos} = props

    const handleAdd = ()=>{
        const removeSpaces = input.trim()
        if(removeSpaces.length > 0){
            setTodos([...todos, removeSpaces])
        }
    }

  return (
    <div>
        <input type='text' placeholder='enter todos' onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
