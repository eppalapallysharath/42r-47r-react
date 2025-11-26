import React, { useState } from 'react'
import { CountControllers } from './countcontrollers'
import { CountView } from './countView'

export const CountApp = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Count App</h2> 
      <CountView countValue = {count} />
      <CountControllers countUpdate={setCount} count={count}/>
    </div>
  )
}
