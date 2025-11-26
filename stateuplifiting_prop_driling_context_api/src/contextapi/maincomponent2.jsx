import React, { useState, createContext } from 'react'
import { Child2 } from './child2'
import { Names } from './names'

export const userContext = createContext()

export const MainComponent2 = () => {
    const [user, setUser] = useState({
        name:"tom",
        age:"2"
    })
  return (
    <div>
       
        <h3>Main component 2</h3>
        <userContext.Provider value={user}>
             <Names/>
            <Child2 />
        </userContext.Provider>
    </div>
  )
}
