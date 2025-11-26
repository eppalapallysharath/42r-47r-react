import React from 'react'

export const CountControllers = (props) => {
    const {countUpdate, count} = props
  return (
    <div>
        <button onClick={()=>countUpdate(count+1)}>increment</button>
        <button onClick={()=>countUpdate(count-1)}>decrement</button>
    </div>
  )
}
