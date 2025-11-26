import React, { useState } from 'react'
import { Child1 } from './child'

export const MainConponent = () => {
    const [data, setData] = useState({name:"sharath", age:20})
  return (
    <div>
        mainConponent
        <Child1 userdata={data}/>
    </div>
  )
}
